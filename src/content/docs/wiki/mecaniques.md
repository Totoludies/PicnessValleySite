---
title: Mécaniques de jeu
description: Santé, faim, froid, fatigue, stockage, récolte, routes et difficulté dans Picness Valley, avec les chiffres du jeu.
sidebar:
  order: 0
---

Cette page réunit les règles qui font vivre (ou mourir) votre village. Les durées sont données à la vitesse ×1 : une **année dure 4 minutes** (voir [Saisons](/wiki/saisons/)).

## Santé et mort
Chaque habitant a **100 points de vie**. Tomber à 0 est la **seule cause de mort**.

| Situation | Effet sur les points de vie | En pratique |
|---|---|---|
| Faim **ou** chaleur sous 30 % | −0,5 PV par seconde | mort en 3 min 20 environ |
| Faim **et** chaleur sous 30 % | −1,5 PV par seconde (3 fois plus vite) | mort en un peu plus d'une minute |
| Faim et chaleur **au moins à 50 %** | +0,25 PV par seconde | santé pleine en moins de 7 min |
| Entre les deux | rien ne change | |

À la mort, une notification dit pourquoi : « … est mort de faim ! », « … de froid ! » ou « … de faim et de froid ! ». L'habitant lâche ce qu'il portait, s'effondre et son corps reste au sol **un quart d'année** (une minute) avant de s'effacer.

## Les besoins
| | Jauge | Baisse | Remède |
|---|---|---|---|
| <img class="pv-icon" src="/icons/needs/food.webp" alt="" /> | **Faim** | en continu | L'habitant mange **1 nourriture** en rentrant chez lui. |
| <img class="pv-icon" src="/icons/needs/cold.webp" alt="" /> | **Chaleur** | selon le froid de la saison | Il se réchauffe chez lui si la maison a du bois de chauffe. |
| <img class="pv-icon" src="/icons/needs/energy.webp" alt="" /> | **Énergie** | en travaillant | Il se repose pour la regagner. |

Un habitant **rentre de lui-même** sous 40 % de faim ou de chaleur, même s'il avait reçu un ordre, et dès 60 % s'il n'a rien de plus urgent. S'il n'a plus d'énergie, il s'arrête pour se reposer. Le détail de ses priorités est sur la page [Habitants](/wiki/habitants/).

## Se chauffer
Le froid dépend de la saison : **printemps 1, été 0, automne 1, hiver 2**. Plus il fait froid, plus les habitants perdent vite leur chaleur et plus les maisons brûlent de bois.

1. Les **bûcherons** abattent les arbres : chaque arbre adulte donne **5 bûches**.
2. Le **fendeur** de l'atelier de coupe de bois fend chaque bûche en **2 bois de chauffe**.
3. Les habitants rapportent du bois chez eux dès qu'il en reste moins de 5 à la maison ; les **logisticiens** du centre logistique en livrent aussi aux maisons reliées par un chemin.
4. Le feu brûle tant que la maison a du bois et que la saison est froide : la cheminée fume. En été, aucun feu.

:::caution[La limite de bois de chauffe]
Le village arrête de fendre une fois atteinte la **limite globale de bois de chauffe** (40 par défaut). Montez-la depuis la fiche de l'atelier de coupe de bois avant l'hiver si vous avez beaucoup de maisons.
:::

## Se nourrir
Les baies (buissons, au début de chaque été) et les pommes de terre (champs, récoltées en automne) comptent toutes les deux comme **nourriture**.

| Où est rangée la nourriture | Combien |
|---|---|
| Maison simple | 5 nourritures (avec 5 bois de chauffe) |
| Cabane de baies | 60 baies |
| Petit cellier | 100 nourritures |

## Stocker
**Rien n'est récolté tant qu'aucun stockage ni chantier n'a de place** pour ce qui serait produit. C'est la première chose à vérifier quand vos habitants restent les bras croisés.

| Stockage | Ce qu'il garde |
|---|---|
| Petite aire de stockage | Pierre, bûches, bois de chauffe : 9 piles de 4 |
| Petit cellier | 100 nourritures |
| Cabane de baies | 60 baies et 20 souches |
| Atelier de coupe de bois | 20 bûches et 40 bois de chauffe |
| Maison simple | 5 bois de chauffe et 5 nourritures |

## Récolter
Toutes les ressources de la carte se récoltent sans les marquer : un **clic droit** avec des habitants sélectionnés leur donne le métier qui va avec, puis ils continuent seuls sur toute la carte.

- **Arbres** : abattus, ils laissent **5 bûches** au sol, alignées dans le sens de la chute. Le bûcheron range la plus proche ; ramasser les bûches au sol est la première mission des bûcherons. Un jeune arbre met **un an** à devenir coupable.
- **Rochers** : 10, 5 ou 1 pierre selon leur taille, 1 par coup. Le rocher rapetisse, puis disparaît.
- **Buissons à baies** : 5 baies, 1 par cueillette. Ils se remplissent au début de l'été.
- **Souches** : un buisson marqué « Extraire la souche » est déraciné à la pelle par un cueilleur, qui rapporte la souche à la cabane de baies ; elle sert à replanter un buisson.

Après une récolte, l'habitant porte lui-même ce qu'il a récolté au stockage le plus proche qui l'accepte, puis reprend son travail.

## Construire
Un bâtiment posé devient un chantier : **défrichage** (20 % de l'avancement), **livraison** des matériaux (30 %), **construction** (50 %). Les coûts de chaque bâtiment sont sur la page [Bâtiments](/wiki/batiments/). Rien n'est rendu quand on détruit un bâtiment.

## Se déplacer
| Sol | Vitesse de marche |
|---|---|
| Herbe, terre | normale |
| Route de terre | +10 % |
| Route pavée (1 pierre par case) | +20 % |

Les habitants font un détour par les routes dès que le trajet y gagne un peu de temps.

## Difficulté
Choisie à l'écran **Nouvelle partie**, elle règle trois sensibilités. 100 % correspond à la vitesse d'origine du jeu.

| Niveau | Froid | Faim | Fatigue |
|---|---|---|---|
| Facile | 20 % | 20 % | 20 % |
| Normal (par défaut) | 50 % | 50 % | 50 % |
| Difficile | 100 % | 100 % | 100 % |
| Paramétrable | à votre goût | à votre goût | à votre goût |

La sensibilité au froid ralentit la perte de chaleur, celle à la faim la perte de nourriture, celle à la fatigue l'énergie dépensée en travaillant. Le repos, lui, ne change pas.

## Le prix du sang
La vallée est gardée par le dragon **[Zebor](/wiki/dragon/)**, et vos habitants appartiennent à quatre **[courants de pensée](/wiki/factions/)**. Pour l'instant, le dragon est un décor : il ne s'en prend encore à personne.
