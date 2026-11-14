---
title: Game mechanics
description: Health, hunger, cold, fatigue, storage, harvesting, roads and difficulty in Picness Valley, with the game's numbers.
sidebar:
  order: 0
---

This page gathers the rules that keep your village alive (or not). Durations are given at ×1 speed: a **year lasts 4 minutes** (see [Seasons](/en/wiki/saisons/)).

## Health and death
Each villager has **100 health points**. Dropping to 0 is the **only cause of death**.

| Situation | Effect on health | In practice |
|---|---|---|
| Food **or** warmth below 30 % | −0.5 HP per second | death in about 3 min 20 |
| Food **and** warmth below 30 % | −1.5 HP per second (3 times faster) | death in just over a minute |
| Food and warmth **at 50 % or more** | +0.25 HP per second | full health in under 7 min |
| In between | nothing changes | |

On death, a notification says why: "… has starved to death!", "… has frozen to death!" or "… has died of hunger and cold!". The villager drops what they were carrying, collapses, and their body stays on the ground for **a quarter of a year** (one minute) before fading away.

## Needs
| | Gauge | Goes down | Remedy |
|---|---|---|---|
| <img class="pv-icon" src="/icons/needs/food.webp" alt="" /> | **Food** | all the time | The villager eats **1 food** when coming home. |
| <img class="pv-icon" src="/icons/needs/cold.webp" alt="" /> | **Warmth** | with the season's cold | They warm up at home if the house has firewood. |
| <img class="pv-icon" src="/icons/needs/energy.webp" alt="" /> | **Energy** | while working | They rest to get it back. |

A villager **goes home on their own** below 40 % food or warmth, even if they had an order, and from 60 % when nothing is more urgent. Out of energy, they stop to rest. Their full list of priorities is on the [Villagers](/en/wiki/habitants/) page.

## Keeping warm
The cold depends on the season: **spring 1, summer 0, autumn 1, winter 2**. The colder it is, the faster villagers lose warmth and the more wood houses burn.

1. **Foresters** cut down trees: each grown tree gives **5 logs**.
2. The **woodcutter** at the Woodcutting Workshop splits each log into **2 firewood**.
3. Villagers bring wood home as soon as fewer than 5 are left in the house; the Logistics Center's **logisticians** also deliver it to houses linked by a path.
4. The fire burns while the house has wood and the season is cold: the chimney smokes. No fire in summer.

:::caution[The firewood limit]
The village stops splitting wood once the **global firewood limit** is reached (40 by default). Raise it from the Woodcutting Workshop's card before winter if you have many houses.
:::

## Feeding the village
Berries (bushes, at the start of every summer) and potatoes (fields, harvested in autumn) both count as **food**.

| Where food is kept | How much |
|---|---|
| Simple House | 5 food (plus 5 firewood) |
| Berry Hut | 60 berries |
| Small Cellar | 100 food |

## Storing
**Nothing is harvested while no storage or building site has room** for what would be produced. It is the first thing to check when your villagers stand idle.

| Storage | What it keeps |
|---|---|
| Small Storage Area | Stone, logs, firewood: 9 piles of 4 |
| Small Cellar | 100 food |
| Berry Hut | 60 berries and 20 stumps |
| Woodcutting Workshop | 20 logs and 40 firewood |
| Simple House | 5 firewood and 5 food |

## Harvesting
Every resource on the map can be harvested without marking it: a **right-click** with villagers selected gives them the matching job, then they carry on alone across the whole map.

- **Trees**: once felled, they leave **5 logs** on the ground, lined up in the direction of the fall. The forester stores the closest one; picking up logs on the ground is the foresters' first duty. A young tree takes **one year** before it can be cut.
- **Rocks**: 10, 5 or 1 stone depending on their size, 1 per strike. The rock shrinks, then disappears.
- **Berry bushes**: 5 berries, 1 per picking. They fill up again at the start of summer.
- **Stumps**: a bush marked "Dig up the stump" is dug up with a shovel by a gatherer, who brings the stump back to the Berry Hut; it is used to replant a bush.

After a harvest, the villager carries what they gathered to the nearest storage that accepts it, then goes back to work.

## Building
A placed building becomes a building site: **clearing** (20 % of the progress), **delivery** of materials (30 %), **construction** (50 %). Each building's cost is on the [Buildings](/en/wiki/batiments/) page. Nothing is refunded when a building is demolished.

## Getting around
| Ground | Walking speed |
|---|---|
| Grass, dirt | normal |
| Dirt Road | +10 % |
| Paved Road (1 stone per tile) | +20 % |

Villagers take a detour along roads as soon as it saves a little time.

## Difficulty
Chosen on the **New game** screen, it sets three sensitivities. 100 % is the game's original pace.

| Level | Cold | Hunger | Fatigue |
|---|---|---|---|
| Easy | 20 % | 20 % | 20 % |
| Normal (default) | 50 % | 50 % | 50 % |
| Hard | 100 % | 100 % | 100 % |
| Custom | your choice | your choice | your choice |

Cold sensitivity slows down warmth loss, hunger sensitivity food loss, and fatigue sensitivity the energy spent working. Resting does not change.

## The blood price
The valley is guarded by the dragon **[Zebor](/en/wiki/dragon/)**, and your villagers belong to four **[schools of thought](/en/wiki/factions/)**. For now, the dragon is scenery only: it does not attack anyone yet.
