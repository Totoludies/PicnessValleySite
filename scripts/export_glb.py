# Exporte des objets d un fichier .blend en GLB pour le lecteur 3D du wiki (appelé par export-models.sh).
# Usage: blender --background file.blend --python export_glb.py -- OUT_DIR name=Obj1,Obj2 name2=Obj3 ...
import bpy, sys, os
args = sys.argv[sys.argv.index("--") + 1:]
out_dir = args[0]
os.makedirs(out_dir, exist_ok=True)
for spec in args[1:]:
    name, objs = spec.split("=")
    objs = objs.split(",")
    bpy.ops.object.select_all(action="DESELECT")
    for o in bpy.data.objects:
        o.hide_render = False
        o.hide_set(False)
        o.hide_viewport = False
    for n in objs:
        o = bpy.data.objects[n]
        o.select_set(True)
        if o.type == "MESH":
            # Force material base colour to white so vertex colours show as-is.
            for m in o.data.materials:
                if m and m.node_tree:
                    for nd in m.node_tree.nodes:
                        if nd.type == "BSDF_PRINCIPLED":
                            if not nd.inputs["Base Color"].is_linked:
                                nd.inputs["Base Color"].default_value = (1, 1, 1, 1)
                            nd.inputs["Roughness"].default_value = 1.0
                            nd.inputs["Metallic"].default_value = 0.0
    has_arm = any(bpy.data.objects[n].type == "ARMATURE" for n in objs)
    bpy.ops.export_scene.gltf(
        filepath=os.path.join(out_dir, name + ".glb"),
        export_format="GLB",
        use_selection=True,
        export_apply=True,
        export_vertex_color="ACTIVE",
        export_animations=has_arm,
        export_animation_mode="ACTIONS",
        export_anim_single_armature=True,
        export_force_sampling=True,
        export_frame_step=2,
        export_optimize_animation_size=True,
        export_draco_mesh_compression_enable=False,
        export_image_format="WEBP",
    )
    print("EXPORTED", name)
