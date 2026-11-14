#!/usr/bin/env bash
# Réexporte les modèles 3D du jeu pour le lecteur du wiki (public/models/*.glb).
# Lit les fichiers .blend du dépôt Unity voisin (ArtSource/), les exporte en GLB avec Blender
# (animations comprises), puis les compresse (meshopt) avec gltf-transform.
# Usage : bash scripts/export-models.sh   (depuis la racine du site)
set -euo pipefail
GAME="${GAME:-../Picness-Valley}"
BLENDER="${BLENDER:-/c/Program Files/Blender Foundation/Blender 5.2/blender.exe}"
TMP="$(mktemp -d)"
OUT="public/models"
mkdir -p "$OUT"

run() {
	local file="$1"; shift
	"$BLENDER" --background "$GAME/ArtSource/$file.blend" --python scripts/export_glb.py -- "$TMP" "$@" | grep EXPORTED
}

# Villagers: one file per skin and sex, its body and its four hairstyles (WalkerBlueHair1..4, ADR 0136 of the game).
villagers=()
for skin in Blue Yellow Red Green; do
	for sex in "" Female; do
		name="villager-${skin,,}"; [ -n "$sex" ] && name="$name-female"
		mesh="Walker$skin$sex"
		villagers+=("$name=Armature,$mesh,${mesh}Hair1,${mesh}Hair2,${mesh}Hair3,${mesh}Hair4")
	done
done
run TownToonWalker "${villagers[@]}"
run TownToonDragon dragon=Armature,Dragon
run TownToonHouse house-a=TownToonHouse house-b=TownToonHouseB house-c=TownToonHouseC
run TownToonForester ranger-cabin=TownToonForester
run TownToonBerryHut berry-hut=TownToonBerryHut
run TownToonCellar small-cellar=TownToonCellar
run TownToonLogistics logistics-center=TownToonLogistics
run TownToonSmallStorage small-storage=TownToonSmallStorage
run TownToonWoodcutter woodcutting-workshop=TownToonWoodcutter,TownToonWoodcutterAxe
run TownToonTree tree=TownToonTree young-tree=TownToonTreeYoung
run TownToonBerryBush berry-bush=TownToonBerryBush
run TownToonRock rock=TownToonRock
run TownToonStump stump=TownToonStump
run TownToonTallGrass tall-grass=TownToonTallGrass

for f in "$TMP"/*.glb; do
	name="$(basename "$f")"
	# The dragon's texture is already WebP: re-encoding it fails, so it is kept as is.
	tex=webp; [ "$name" = dragon.glb ] && tex=false
	case "$name" in
	villager-*)
		# "optimize" merges identical materials (dedup): the viewer needs the villagers' Hair and Eyes
		# materials to tint them (ADR 0135 of the game), so they get the same steps without the merge.
		npx -y @gltf-transform/cli@4.2.1 resample "$f" "$f.r.glb" > /dev/null
		npx -y @gltf-transform/cli@4.2.1 prune "$f.r.glb" "$f.p.glb" > /dev/null
		npx -y @gltf-transform/cli@4.2.1 meshopt "$f.p.glb" "$OUT/$name" > /dev/null
		;;
	*)
		npx -y @gltf-transform/cli@4.2.1 optimize "$f" "$OUT/$name" --compress meshopt --simplify false --texture-compress "$tex" > /dev/null
		;;
	esac
	echo "$OUT/$name"
done
rm -rf "$TMP"
