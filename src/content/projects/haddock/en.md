---
title: "Haddock's: RC Sailing Barcelona 2024"
summary: A 1 m radio-controlled sailboat that we designed, simulated and built in 90 days on €500. 3D-printed hull reinforced with fibreglass. 3rd out of 12 teams and 2nd fastest in the speed trial.
context: Bachelor's thesis (Honours) · team of 4
role: Hydrodynamic and structural hull design, hull and lead ballast manufacturing
duration: 3 months (February – May 2024)
manufacturing: [FDM 3D printing, Fibreglass-epoxy lay-up, Lead casting in a sand mould]
materials: [PETG, Fibreglass, Epoxy resin, Balsa wood, Recycled lead, Aluminium]
captions: []
---

This was my Bachelor's thesis. With three classmates from ETSEIB, we entered [RC Sailing Barcelona](http://rcsailingbarcelona.com/), an inter-university radio-controlled sailing race organised around the America's Cup in Barcelona. We had **90 days and €500** to build a **1 m long** sailboat, and the rules were strict:

- At most 50 cm deep below the waterline, 160 cm tall and 6 kg, with a lead ballast of at least 2 kg.
- If it capsizes it must right itself, and it has to stay upside down for 20 s without taking on water.
- At least half of the weight made of recycled or recyclable materials.

I was in charge of the **hull**: designing, validating and building it. In total I put 382 h into it, 42 % of the team's hours.

## The idea: a hull that planes

With 90 days there was no time for trial and error, so I spent the start understanding the problem and settling the concept before drawing anything.

A normal boat pushes water aside with its whole hull, and above a certain speed, which depends on its length, drag shoots up: it's like sailing uphill. For a 1 m boat, that limit is only **2.4 knots (about 4.5 km/h)**, while an RC sailboat sails at 4–6. To go faster, the hull has to **plane**: lift up and skim over the water, like a surfboard or a speedboat.

From there I made the main decisions:

- **One hull and two sails**, the simplest configuration: it rights itself and there are fewer things to break. In a race where most teams don't finish, reliability counts most.
- **Wide hull with a shallow V-shaped bottom**: when the wind heels the boat over, one side of the bottom lies flat on the water and acts as the planing surface.
- **Vertical, narrow bow**, to cut through waves instead of riding over them. For such a small boat, a normal wave is huge.
- **Removable parts** (keel, rudder and mast), so it can be transported.

## Design and checks

- **Hull shape**, in MaxSurf, a naval design program.
- **Stability**: I checked that the boat tends to right itself at **any heel angle, from 0° to 180°**. If it capsizes completely, it comes back up on its own.
- **Drag**: the simulation confirmed what I expected, with the drag peak between 2.5 and 3 knots and the transition to planing from about 3 knots.
- **3D model in SolidWorks**:
  - 1.5 mm hull wall, split into 4 pieces to fit the 3D printer (256 mm).
  - Internal reinforcements where the loads are highest: at the mast, the keel and the rudder.
  - Compartments built into the deck, so the hull is watertight without seals.
- **Keel, rudder and ballast**: standard aerofoil sections (NACA), like those of an aircraft wing. I sized the ballast's volume from the density of lead so it would weigh exactly 2 kg.

## Manufacturing

My favourite part of the project is how the hull was made: **the printed plastic shell is both the mould and the internal structure**. The fibreglass is laid directly on top, so there's no separate mould to make and the whole process is much faster.

- **3D printing**: 4 PETG parts (about 4 kg and 72 h of printing), bonded with epoxy.
- **Fibreglass**: 2 plies with epoxy resin. A few air bubbles appeared on the deck and I repaired them by injecting resin with a syringe, adding less than 10 % weight.
- **Keel**: a balsa wood core with 5 plies of fibreglass. With 2 kg of lead hanging from the tip it bends only about 5°.
- **Lead ballast**: made from old diving weights, melted and cast in a sand mould, then finished with an angle grinder and a drill.
- **Watertight hatch**: an adapted plastic food container. Cheap, watertight, and it can be opened and closed as often as needed.

## Testing and the race

Before the race we tested the boat in front of a fan, and I found that the motor pulling in the sail wasn't strong enough. The cause was **friction on the line** at three points; I fixed it with an improvised pulley and some rounded 3D-printed parts.

- We passed **technical inspection at the first attempt**: dimensions, weight, self-righting and watertightness.
- We finished **3rd out of 12 teams**. Only 3 boats completed every race.
- We set the **2nd best time in the speed trial**: 50 m in 50 s.
- Final cost of **€509**, 1.8 % over budget.

## What I'd do differently

- **Weight**: the boat ended up at 5.4 kg, 25 % more than planned (the plastic shell alone weighed 1.75 kg). I should have designed the hull around that real weight.
- **Rudder shaft**: it was carbon fibre and snapped on impact just before the final. In stainless steel it would at most have bent, and we could have kept going.
- **Ballast**: it was too thick and caused more drag than I had calculated.
- **The wind**: there was very little on race day, and the fleet never got to plane. Exactly where our hull had the advantage.
