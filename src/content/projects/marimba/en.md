---
title: Marimba tuned by FEA optimisation
summary: A 15-bar marimba (C3–C5) that I designed with my own algorithm to tune each bar by simulation in ANSYS, and built by hand for €50. Every bar ends up within 2 % frequency error.
context: Project II, ETSEIB · individual
role: Design, simulation, material testing and construction
duration: 1 semester (2023) · ~120 h
manufacturing: [Band saw, Belt sander, Table saw, Pillar drill]
materials: [Coral wood / padauk (Pterocarpus soyauxii), PVC, Recycled pallet wood, Linseed oil]
captions: []
---

For the Project II course we had one semester to design and build a tuned percussion instrument, spending as little as possible. I built a **15-bar marimba in C major (C3–C5)**, with its resonator tubes and frame.

The tricky part of a marimba is that each bar playing the right note isn't enough. The **first overtone also has to be exactly 4 times the fundamental frequency** (two octaves up); otherwise the bar sounds off even when the note is right. And all of that depends only on the bar's shape and the wood.

## Choosing and measuring the wood

Professional marimbas are made of rosewood, but it was expensive and I couldn't find it anywhere. I went round 8 timber yards and, after talking to experienced woodworkers, chose **coral wood, also known as padauk** (*Pterocarpus soyauxii*): cheaper, and hard and stiff enough.

The problem was that I couldn't find reliable data for it, and without data I couldn't simulate anything. So I measured it myself:

- **Density**: 614.6 kg/m³, by weighing a slat of known dimensions.
- **Stiffness (Young's modulus)**: 8.37 GPa, from a **bending test** in the lab. That's twice that of many common woods, which range from 2 to 5 GPa.

## Tuning the bars on the computer

Marimba bars have an **arch cut out underneath**: removing material from the centre lowers the note, and changing the arch length adjusts the overtone. I defined the bar with 6 parameters; four are fixed for each note (length, thickness, width, arch ends) and **two are adjusted to tune it**: the arch length and the thickness at the centre.

To find those two values for every note, I wrote an **optimisation algorithm in ANSYS APDL**:

- It builds the bar from the parameters and computes its frequencies with a **finite element modal analysis**, leaving the part unconstrained, just as it will hang from the cord.
- First it thins the centre until the fundamental gets close to the target.
- Then it lengthens the arch to bring the overtone down to the 4:1 ratio. Since that also lowers the note slightly, the algorithm keeps readjusting it.
- Each step corrects more or less depending on how far off it is, and it stops when both errors are **below 2 %**.

All 15 bars converge in **12–50 iterations (about 20 on average)**, and I cross-checked every result with a second, 2D version of the model.

## Building it

I built everything myself, at the ETSAB Model Workshop.

- **Cutting without wasting wood**: all 15 bars had to come from a single block. Using a cutting optimiser in MATLAB, I found the layout that fitted them into **just 7 slats**.
- **Arches**: a rough cut on the band saw first, leaving a margin, then the belt sander down to size.
- **Final tuning**: wood isn't the same in every direction, so the real part never sounds exactly like the simulation. I sanded each bar while **measuring its frequencies with a spectrum analyser** until it was in tune.
- **Mounting points**: each bar has two points that don't vibrate (the nodes), and that's where it has to hang so the cord doesn't damp the sound. Because of the same irregularity in the wood, they didn't match the theoretical ones. I found them by sprinkling salt on the bar and striking it: the salt bounces off wherever it vibrates and gathers at the nodes.
- **Finish**: linseed oil rather than varnish, because a hard coat would change the stiffness and detune the bar.
- **Resonators**: 50 mm PVC tubes, closed at the bottom and cut to the length that amplifies each bar's note.
- **Frame**: a trapezoidal frame made from recycled pallet wood, following the line of the nodes. The bars hang on a cord and don't touch the frame.

## Result

- **15 bars in tune**, on both the note and the overtone, each with its own resonator.
- **€50 in total**: €35 of wood, €10 of tubes and €5 of hardware. The frame cost nothing.
- **About 120 h** of work, including 20 h writing the algorithm and 26 h in the workshop.

## What I'd do differently

- **Simulate the wood as what it is**: I modelled it as if it were the same in every direction, and that's the main reason simulation and reality didn't fully match. Testing it in all three directions would save most of the hand tuning.
- **More sustainable materials**: tropical wood and PVC were what the budget allowed, but they have a high environmental impact. I'd try local woods or aluminium tubes.
