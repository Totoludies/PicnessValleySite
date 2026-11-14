// Lecteur 3D du Picness Wiki : affiche un modèle du jeu (GLB exporté de Blender),
// en rendu cartoon (aplats + contour), avec rotation à la souris et boutons d'animation.
import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OutlineEffect } from 'three/addons/effects/OutlineEffect.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

/** Clips joués une seule fois (le personnage reste sur la dernière pose). */
const ONCE_CLIPS = new Set(['Death', 'TakeOff', 'Land']);
/** Ordre d'affichage des boutons ; les clips inconnus suivent, par ordre alphabétique. */
const CLIP_ORDER = ['Idle', 'Walk', 'Carry', 'Work', 'Chop', 'Dig', 'Death', 'Sleep', 'TakeOff', 'Fly', 'Land'];
/** Matériaux sans contour (feuilles fines : le contour de la face arrière traverserait la face avant). */
const NO_OUTLINE = new Set(['TownToonDragonWing']);

type Labels = Record<string, string>;

const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
const cache = new Map<string, Promise<GLTF>>();

function load(src: string): Promise<GLTF> {
	let p = cache.get(src);
	if (!p) {
		p = loader.loadAsync(src);
		cache.set(src, p);
	}
	return p;
}

let gradient: THREE.DataTexture | null = null;
function toonGradient(): THREE.DataTexture {
	if (!gradient) {
		// Three flat light bands, like the game's toon shader.
		const tones = new Uint8Array([150, 205, 255]);
		gradient = new THREE.DataTexture(tones, tones.length, 1, THREE.RedFormat);
		gradient.minFilter = gradient.magFilter = THREE.NearestFilter;
		gradient.needsUpdate = true;
	}
	return gradient;
}

function toToon(root: THREE.Object3D) {
	root.traverse((o) => {
		const mesh = o as THREE.Mesh;
		if (!mesh.isMesh) return;
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		// Bones move the skinned meshes: their bounding box must follow.
		mesh.frustumCulled = false;
		const convert = (m: THREE.Material) => {
			const src = m as THREE.MeshStandardMaterial;
			const toon = new THREE.MeshToonMaterial({
				name: src.name,
				color: src.color ?? new THREE.Color(1, 1, 1),
				map: src.map ?? null,
				vertexColors: !!mesh.geometry.attributes.color,
				gradientMap: toonGradient(),
				side: src.side,
				transparent: src.transparent,
				alphaTest: src.alphaTest,
			});
			if (NO_OUTLINE.has(src.name)) toon.userData.outlineParameters = { visible: false };
			return toon;
		};
		mesh.material = Array.isArray(mesh.material) ? mesh.material.map(convert) : convert(mesh.material);
	});
}

class Viewer {
	private el: HTMLElement;
	private stage: HTMLElement;
	private labels: Labels;
	private renderer: THREE.WebGLRenderer;
	private effect: OutlineEffect;
	private scene = new THREE.Scene();
	private camera = new THREE.PerspectiveCamera(32, 1, 0.05, 2000);
	private controls: OrbitControls;
	private clock = new THREE.Clock();
	private model: THREE.Object3D | null = null;
	private mixer: THREE.AnimationMixer | null = null;
	private action: THREE.AnimationAction | null = null;
	private clips: THREE.AnimationClip[] = [];
	private sun: THREE.DirectionalLight;
	private ground: THREE.Mesh;
	private visible = false;
	private token = 0;
	private home = { pos: new THREE.Vector3(), target: new THREE.Vector3() };

	constructor(el: HTMLElement) {
		this.el = el;
		this.stage = el.querySelector('.pv-model__stage')!;
		this.labels = JSON.parse(el.dataset.labels ?? '{}');

		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		this.renderer.outputColorSpace = THREE.SRGBColorSpace;
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.stage.prepend(this.renderer.domElement);
		this.effect = new OutlineEffect(this.renderer, { defaultThickness: 0.0035, defaultColor: [0.17, 0.11, 0.08] });

		this.scene.add(new THREE.HemisphereLight(0xfff6e0, 0x8a7a5a, 1.6));
		this.sun = new THREE.DirectionalLight(0xfff1d6, 2.2);
		this.sun.castShadow = true;
		this.sun.shadow.mapSize.set(1024, 1024);
		this.sun.shadow.bias = -0.0005;
		this.scene.add(this.sun, this.sun.target);

		this.ground = new THREE.Mesh(new THREE.CircleGeometry(1, 48), new THREE.ShadowMaterial({ opacity: 0.22 }));
		this.ground.rotation.x = -Math.PI / 2;
		this.ground.receiveShadow = true;
		this.scene.add(this.ground);

		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableDamping = true;
		this.controls.enablePan = false;
		this.controls.autoRotate = true;
		this.controls.autoRotateSpeed = 1.4;
		this.controls.maxPolarAngle = Math.PI * 0.53;
		this.controls.addEventListener('start', () => this.setAutoRotate(false));

		new ResizeObserver(() => this.resize()).observe(this.stage);
		new IntersectionObserver(
			([entry]) => {
				this.visible = entry.isIntersecting;
				if (this.visible && !this.model && !this.el.classList.contains('is-loading')) this.show(this.currentVariant());
				this.renderer.setAnimationLoop(this.visible ? () => this.frame() : null);
			},
			{ rootMargin: '200px' },
		).observe(el);

		// Two independent choices (variant, then toggle): each group keeps one pressed button.
		for (const key of ['variant', 'suffix']) {
			el.querySelectorAll<HTMLButtonElement>(`[data-${key}]`).forEach((b) =>
				b.addEventListener('click', () => {
					el.querySelectorAll(`[data-${key}]`).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
					this.show(this.currentVariant());
				}),
			);
		}
		el.querySelector<HTMLButtonElement>('[data-rotate]')?.addEventListener('click', () =>
			this.setAutoRotate(!this.controls.autoRotate),
		);
		el.querySelector<HTMLButtonElement>('[data-reset]')?.addEventListener('click', () => this.resetView());
	}

	/** URL of the model chosen by the pressed variant and toggle buttons. */
	private currentVariant(): string {
		const pressed = (key: string) =>
			this.el.querySelector<HTMLElement>(`[data-${key}][aria-pressed="true"]`)?.dataset[key];
		const base = pressed('variant') ?? this.el.dataset.base;
		if (!base) return this.el.dataset.src!;
		return `/models/${base}${pressed('suffix') ?? ''}.glb`;
	}

	private setAutoRotate(on: boolean) {
		this.controls.autoRotate = on;
		this.el.querySelector('[data-rotate]')?.setAttribute('aria-pressed', String(on));
	}

	private resize() {
		const w = this.stage.clientWidth;
		const h = this.stage.clientHeight;
		if (!w || !h) return;
		this.renderer.setSize(w, h, false);
		this.camera.aspect = w / h;
		this.camera.updateProjectionMatrix();
	}

	private async show(src: string) {
		const token = ++this.token;
		this.el.classList.add('is-loading');
		this.el.classList.remove('is-error');
		// The old buttons drive the old model: hide them until the new one is ready.
		this.el.querySelector<HTMLElement>('.pv-model__clips')?.replaceChildren();
		let gltf: GLTF;
		try {
			gltf = await load(src);
		} catch {
			this.el.classList.remove('is-loading');
			this.el.classList.add('is-error');
			return;
		}
		if (token !== this.token) return;
		this.el.classList.remove('is-loading');

		if (this.model) this.scene.remove(this.model);
		this.mixer?.stopAllAction();
		const model = gltf.scene;
		if (!model.userData.pvToon) {
			toToon(model);
			model.userData.pvToon = true;
		}
		model.position.set(0, 0, 0);

		this.clips = [...gltf.animations].sort((a, b) => {
			const ia = CLIP_ORDER.indexOf(a.name);
			const ib = CLIP_ORDER.indexOf(b.name);
			return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.name.localeCompare(b.name);
		});
		this.mixer = this.clips.length ? new THREE.AnimationMixer(model) : null;
		this.action = null;
		this.buildClipButtons();
		// Pose the model on its first clip before measuring it (the bind pose can be much wider).
		if (this.clips.length) {
			this.play(this.clips.find((c) => c.name === 'Idle') ?? this.clips[0]);
			this.mixer!.update(0);
		}
		model.updateMatrixWorld(true);
		const box = new THREE.Box3().setFromObject(model, true);
		const size = box.getSize(new THREE.Vector3());
		const center = box.getCenter(new THREE.Vector3());
		model.position.set(-center.x, -box.min.y, -center.z);
		this.scene.add(model);
		this.model = model;

		const radius = Math.max(size.x, size.y, size.z) * 0.5;
		const height = size.y;
		this.ground.scale.setScalar(Math.max(size.x, size.z) * 0.85);
		this.sun.position.set(radius * 2.2, radius * 4, radius * 2.6);
		this.sun.target.position.set(0, 0, 0);
		const cam = this.sun.shadow.camera as THREE.OrthographicCamera;
		const r = radius * 2;
		Object.assign(cam, { left: -r, right: r, top: r, bottom: -r, near: 0.1, far: radius * 12 });
		cam.updateProjectionMatrix();

		const fov = THREE.MathUtils.degToRad(this.camera.fov);
		const dist = (Math.hypot(size.x, size.z) * 0.5 + height * 0.5) / Math.tan(fov / 2) * 0.72;
		this.home.target.set(0, height * 0.45, 0);
		this.home.pos.set(dist * 0.62, height * 0.45 + dist * 0.42, dist * 0.68);
		this.controls.minDistance = dist * 0.35;
		this.controls.maxDistance = dist * 2.2;
		this.camera.near = dist / 100;
		this.camera.far = dist * 20;
		this.camera.updateProjectionMatrix();
		this.resetView();
	}

	private resetView() {
		this.camera.position.copy(this.home.pos);
		this.controls.target.copy(this.home.target);
		this.controls.update();
	}

	private buildClipButtons() {
		const bar = this.el.querySelector<HTMLElement>('.pv-model__clips')!;
		bar.replaceChildren();
		bar.hidden = this.clips.length === 0;
		for (const clip of this.clips) {
			const b = document.createElement('button');
			b.type = 'button';
			b.className = 'pv-model__chip';
			b.dataset.clip = clip.name;
			b.setAttribute('aria-pressed', 'false');
			b.textContent = this.labels[clip.name] ?? clip.name;
			b.addEventListener('click', () => this.play(clip, true));
			bar.append(b);
		}
	}

	private play(clip: THREE.AnimationClip, restart = false) {
		if (!this.mixer) return;
		const next = this.mixer.clipAction(clip);
		if (next === this.action && !restart) return;
		const once = ONCE_CLIPS.has(clip.name);
		next.reset();
		next.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity);
		next.clampWhenFinished = once;
		if (this.action && this.action !== next) next.crossFadeFrom(this.action, 0.25, false);
		next.play();
		this.action = next;
		this.el.querySelectorAll('[data-clip]').forEach((b) =>
			b.setAttribute('aria-pressed', String((b as HTMLElement).dataset.clip === clip.name)),
		);
	}

	private frame() {
		const dt = Math.min(this.clock.getDelta(), 0.1);
		this.mixer?.update(dt);
		this.controls.update();
		this.effect.render(this.scene, this.camera);
	}
}

export function initModelViewers() {
	document.querySelectorAll<HTMLElement>('.pv-model:not([data-ready])').forEach((el) => {
		el.dataset.ready = '';
		try {
			new Viewer(el);
		} catch {
			el.classList.add('is-error');
		}
	});
}
