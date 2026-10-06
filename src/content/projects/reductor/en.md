---
title: Compact worm gear reducer
summary: Preliminary design of an i = 40 worm gear reducer to couple an electric motor to slow machines, from 1,400 to 35 rpm and 395 N·m at the output. Split nodular cast iron housing, output that can face left or right, and a design meant for manufacturing 6,000 units over 3 years.
context: Mechanical Design, ETSEIB · individual
role: Sizing, CAD, drawings and verification calculations
duration: 1 semester (autumn 2025)
manufacturing: [Sand casting, Closed-die forging, Machining, Quenching and tempering, Laser cutting]
materials: [GJS 450-12 nodular cast iron, CuSn11P phosphor bronze, 16MnCr5 steel, C45 steel, C25 steel, NBR]
captions:
  - "The reducer from behind, with the bearing cover of the output shaft"
  - "The gear set: bronze wheel bolted to the output shaft, and the worm with its bearings"
  - "Exploded view of the reducer"
  - "Exploded wheel assembly: output flange, bearings, shaft, bronze wheel and cover"
  - "Exploded worm assembly: input flange, lock nut and washer, angular contact and deep groove bearings"
  - "Assembled housing, with the oil plugs and the sight glass"
  - "Lower housing: the custom round-profile gasket and the bearing seats"
  - "Final assembly: the two housing halves close around the wheel"
  - "Free body diagram of the output shaft, used to calculate the bearing reactions"
  - "Assembly drawing, with the sections and the 33-part bill of materials"
  - "Drawing of the lower housing, in nodular cast iron"
  - "Drawing of the output shaft"
---

In the Mechanical Design course at ETSEIB, we had to produce the **complete preliminary design of a worm gear reducer**: sizing, design of every part, drawings, verification calculations, and assembly and maintenance instructions.

The brief was a reducer to couple an **electric motor** to machines that need **35 rpm and 300–400 N·m**, with standard flanges at the input and output. The motor hangs directly from the reducer, with the input shaft vertical at the bottom, and even so it can't leak oil. The client expected **6,000 units over 3 years**, with a life of **10,000 hours** at full load.

[[1]]

## Sizing

Starting from a 112 mm centre distance, the only standard module that kept the worm within the recommended proportions was **m = 4.5 mm**. All the geometry follows from there: a **single-start worm** and a **40-tooth wheel** (180 mm pitch diameter), giving a ratio of **i = 40**: from 1,400 rpm and 18 N·m at the input to **35 rpm and 395 N·m** at the output.

The efficiency is **54%**. That's low, but it's the price of worm gear reducers: in return, they achieve a very large reduction in a single stage and in very little space.

The shafts were sized for torsion: the 16 and 42 mm inner shafts of the motor and machine flanges, and the reducer's hollow shafts (20 and 55 mm) with the same section modulus.

[[2]]

## Design concept

At 8 units per working day, no workshop would dedicate a machine to the reducer alone. That's why every part is made with **general-purpose processes**, adding only moulds, dies and assembly jigs, which do pay off over 6,000 units.

The key decision was a **housing split along the output shaft**:

- **More compact**: no large covers are needed to fit the wheel in.
- **Quick alignment**: the wheel is placed on the lower housing with the whole mechanism in view. Alignment is checked by eye and adjusted by adding or removing 0.25 mm shims.
- **Reversible output**: the two halves are symmetrical. By swapping the output flange and the bearing cover, the output faces left or right, depending on what each client needs.

[[3-5]]

The drawback is **sealing**: the 4 points where the two housing halves meet the flange and the cover are hard to seal. Since they sit well above the oil level and only get splashed, leakage is negligible. That's why the reducer has to be shipped and sold dry.

[[3d]]

## Parts and materials

- **Housings**: **GJS 450-12 nodular cast iron**, sand cast and machined only on the contact faces and threaded holes. The gaskets between the halves are NBR with a standard profile, but custom-made to follow the shape of the part.
- **Worm**: machined directly onto the input shaft as a single part in **16MnCr5 case-hardening steel**, pre-forged and turned. It's then quenched and tempered to 50 HRC so it doesn't wear.
- **Wheel**: **CuSn11P phosphor bronze**, with no heat treatment. It should be soft so that wear concentrates on it and not on the worm, which is more expensive and critical. It's press-fitted onto the output shaft and fastened with 8 bolts.
- **Output shaft**: **C45 steel**, forged, normalised and machined.
- **Flanges and cover**: **C25 steel**, with less carbon, tougher for static loads.
- **Off-the-shelf parts**: FAG bearings, SKF shaft seals, O-rings, oil plugs and a sight glass. For the joints threaded into the housing I used **Nord-Lock washers** instead of threadlocker, so vibration doesn't loosen the bolts and the reducer can still be opened for maintenance.

[[6-8]]

## Verification calculations

With the contact forces between the worm and the wheel (830 N tangential, 1,630 N radial and 4,400 N axial), I solved the equilibrium of the output shaft to get the reactions at each bearing. The FAG 7212-B angular contact bearings were checked according to **ISO 281**, and the worst-case life is **over 700,000 hours**, far above the 10,000 the client requires.

[[9]]

## Results

- **Complete preliminary design**: report, assembly and main part **drawings** with tolerances and surface finishes, and specifications for every off-the-shelf component.
- Step-by-step **assembly instructions**, with tightening torques for each of the 5 bolted joints.
- **Lubrication and maintenance plan**: ISO VG 320 oil, about 730 ml, with inspection and oil change intervals.

[[10-12]]
