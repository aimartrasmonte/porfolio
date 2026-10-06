---
title: Marimba tuned by FEA optimisation
summary: 15-bar marimba (C3–C5) that I designed with my own algorithm that tunes each bar by simulation in ANSYS, and built by hand for €50. Every bar ends up within 2% frequency error.
context: Projecte II course, ETSEIB · solo
role: Design, simulation, material testing and construction
duration: 1 semester (2023) · ~120 h
manufacturing: [Band saw, Belt sander, Table saw, Drill press]
materials: [African padauk (Pterocarpus soyauxii), PVC, Recycled pallet wood, Linseed oil]
captions:
  - "The first three vibration modes of a bar, with the nodes (still points) and antinodes"
  - "Three-point bending test on a padauk strip to measure its Young's modulus"
  - "Parametric sketch of the bar: 'd' and 'e' are the two parameters the algorithm adjusts"
  - "The 15 bars cut from 7 padauk strips; the ones on top already have their arch cut"
  - "Cutting a bar's arch on the band saw"
  - "Sanding the arch to size on the belt sander"
  - "Finding the nodes: the salt jumps off where the bar vibrates and gathers where it doesn't"
  - "The bars finished with linseed oil"
  - "View from below: the arches of the bars, from lowest to highest"
  - "The finished marimba, with its PVC resonators"
  - "The finished marimba, seen from above"
---

This marimba came out of the Projecte II course, where we had to design and build an idiophone (an instrument that produces notes through the vibration of its own body) in one semester on a minimal budget. While most students made spoon xylophones, I built a **two-octave marimba (15 bars)**, with resonator tubes and a frame.

The trick with a marimba is that it isn't enough for each bar to vibrate at the right note. The **first overtone (second free vibration mode)** has to vibrate at exactly **4 times the fundamental frequency (first free vibration mode)**, two octaves higher; otherwise the bar sounds off even if the fundamental is right. The frequency of each mode depends only on the bar's shape and material.

[[1]]

## Material and properties

Professional marimbas are made of rosewood, but it's expensive and hard to find. After talking to experienced woodworkers, I settled on **African padauk**: cheaper, and stiff enough to sound good and withstand the vibration.

Since there was no reliable data on the wood's properties, I measured them myself:

- **Density**: 614.6 kg/m³, by weighing a strip of known dimensions.
- **Stiffness (Young's modulus)**: 8.37 GPa, from a **bending test** in the lab. That's twice as stiff as many common woods, which range from 2 to 5 GPa.

[[2]]

## Geometry through iterative modal FEA

Marimba bars have an **arch cut into the underside**: removing material from the centre changes the frequency of the first mode, and changing the arch length adjusts the overtone. To find a geometry that would tune every bar, I defined the bar with 6 parameters: four fixed for each bar (length, thickness, width and arch radius) and **two adjustable ones for tuning**: the arch length and the thickness at the centre.

[[3]]

To find those two values for each note, I wrote an **optimisation algorithm in ANSYS APDL**:

- It builds the bar from the parameters and computes its frequencies with a **2D finite element modal analysis**, leaving the part free, just as it will actually hang from the cord.
- First it thins the centre until the fundamental approaches the target.
- Then it lengthens the arch to bring the overtone down to the 4:1 ratio. Since this also lowers the fundamental slightly, the algorithm keeps readjusting the thickness.
- At each step it corrects more or less depending on how far off it is (Newton-Raphson), and stops when both errors are **below 2%**.

All 15 bars converge in **12–50 iterations (about 20 on average)**, and I checked each result against a second, 3D version of the model.

## Building it

I did all the construction at the ETSAB model-making workshop.

- **Cutting without wasting wood**: all 15 bars had to come out of a single block. With a cutting optimiser in MATLAB I found the combination that fitted them into **just 7 strips**.
- **Arches**: first a rough cut on the band saw, leaving a margin, then the belt sander to bring them to size.
- **Final tuning**: wood isn't the same in every direction, so the real part never sounds exactly like the simulation. I kept sanding each bar while **measuring its frequencies with a spectrum analyser** until it was in tune.
- **Mounting points**: each bar has two points that don't vibrate (the nodes), and that's where it has to hang so the cord doesn't damp the sound. Because of the same irregularity in the wood, they didn't match the theoretical ones. I found them by **sprinkling salt on the bar and striking it**: the salt jumps off where it vibrates and gathers at the nodes.
- **Finish**: linseed oil rather than varnish, because a hard coat would change the stiffness and detune the bar.
- **Resonators**: 50 mm PVC tubes, capped at the bottom and cut to the length that amplifies each bar's note.
- **Frame**: a trapezoidal frame made from the wood of a recycled pallet, following the line of the nodes. The bars hang from a cord and don't touch the frame.

[[4-9]]

## Result

- **15 bars in tune**, both the note and the overtone, each with its own resonator.
- **€50 in total**: €35 of wood, €10 of tubes and €5 of hardware. The frame cost nothing.
- **About 120 h** of work, of which 20 h went into programming the algorithm and 26 h into the workshop.

[[10-11]]
