---
title: Villagers
description: The needs of Picness Valley's villagers and how they decide what to do.
sidebar:
  order: 1
---

Each villager has their own name, height and character. They live their life on their own: you give them a job or an order, they take care of the rest.

## Gauges
| | Gauge | What to know |
|---|---|---|
| <img class="pv-icon" src="/icons/needs/health.webp" alt="" /> | **Health** | 100 per villager. Reaching 0 is the only cause of death. |
| <img class="pv-icon" src="/icons/needs/food.webp" alt="" /> | **Food** | Goes down all the time. The villager eats 1 food when coming home. |
| <img class="pv-icon" src="/icons/needs/cold.webp" alt="" /> | **Warmth** | Goes down faster as the season gets colder. They warm up at home if there is firewood. |
| <img class="pv-icon" src="/icons/needs/energy.webp" alt="" /> | **Energy** | Work is tiring. They rest to get it back. |

:::note
For now, hunger and cold do not take away health: villagers cannot die yet.
:::

## How a villager decides what to do
In this order:
1. **Your order**, unless they are very hungry, very cold or out of energy.
2. If they carry items, they **drop them off** in a storage.
3. Very hungry (below 40 %): they **go home to eat**.
4. Very cold (below 40 %): they **go home to warm up**, and fetch wood if the house has none left.
5. Out of energy: they **rest**.
6. Fewer than 5 firewood at home: they **go and fetch some**.
7. They **work**: the closest task for their job, otherwise a task with no job (picking up, building).
8. A little hungry or cold (below 60 %): they go home.
9. Energy not full: they rest.
10. Nothing to do: they stroll near their home.

## A villager's card
Clicking a villager opens their card: name, age, job, current activity, their four gauges, the item they carry and a button to their house.
