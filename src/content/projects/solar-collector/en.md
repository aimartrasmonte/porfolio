---
title: Water-cooled solar thermal collector
summary: Design and calculation of a 1×2 m solar thermal collector and a 24 kW installation in Wrocław. The absorber and the piping are a single cast aluminium part, with no welds, designed for mass production. Each panel delivers 1.23 kW of useful heat and 20 are needed.
context: Solar Energy Conversion Systems, Politechnika Wrocławska · individual
role: Design, CAD and thermal calculation
# duration: to be filled in
manufacturing: [Aluminium casting, Sheet metal bending, Riveting, Sealing gaskets]
materials: [Aluminium, Glass, Stainless steel, Mineral wool, Black copper coating]
captions:
  - "The closed panel: 1 × 2 m, with the two threaded pipe outlets"
  - "Section through the frame and insulation: the glass and the absorber plate below"
  - "Section through the layers: glass, absorber, insulation and case"
  - "Absorber, gasket and distribution manifold, exploded"
  - "Close-up of the 32 tubes cast into the absorber, the gasket and the manifold holes"
  - "Stainless steel distribution manifold with the thread to connect the panel"
  - "Heat loss coefficients of the collector: through the cover, the walls and the bottom"
  - "20-panel installation: 4 parallel branches of 5 panels in series, from 19 °C to 49 °C"
---

During my semester at the Politechnika Wrocławska, in the Solar Energy Conversion Systems course, I designed a **solar thermal collector** and the full installation for a given set of specifications: **24 kW of power** heating water up to **49 °C**, from 1 May to 30 September in Wrocław, with fixed-size **1 × 2 m** panels.

A thermal collector is, layer by layer: a transparent **cover**, an **absorber plate** that heats up in the sun, a **piping system** that carries the heat away with water, **insulation** that stops the heat from escaping, and a **case** that encloses it all.

[[1]]

## Design concept

In a conventional collector, the absorber plate is a metal sheet and the water tubes are welded underneath it. That joint is the weak point: the heat has to pass through the weld, which conducts worse and has a small contact area, and welding 30 tubes per panel is a lot of labour.

My proposal was to **merge the absorber and the piping into a single cast aluminium part**, with the **32 tubes built into** the plate. Heat goes straight from the surface to the water, with no welds or intermediate parts. The trade-off is that the part needs a custom mould, which is a large upfront investment: it's a design **meant for mass production**, where the cost of the mould is spread out and the reduced labour makes each panel cheaper.

[[3d]]

## Components and materials

- **Cover: 4 mm glass.** PMMA is more transparent, but it degrades and clouds over in the sun. I chose glass for a panel that needs no maintenance. It's mounted with a rubber gasket that keeps air from flowing in and out.
- **Absorber: aluminium.** Copper conducts better (400 vs 250 W/mK), but it costs almost 4 times more per kg and the difference didn't justify it. The plate is 4 mm at its thinnest points.
- **Coating: black copper**, with high absorptance (0.85) and low emissivity (0.18): it absorbs a lot and radiates little.
- **Distribution manifolds: stainless steel.** At each end, a 25 mm pipe with holes that connect the 32 tubes in parallel, pressed against the absorber with bolts and a gasket. The ends come out of the case with a thread to connect other panels or a cap. Stainless steel conducts 10 times less than aluminium, which is an advantage here: it's the part that reaches the outside.
- **Insulation: mineral or glass wool**, 48.75 mm thick under the absorber and 25 mm on the walls. Foams are cheaper, but they degrade over time and with humidity.
- **Case: bent 3 mm stainless steel sheet**, a cheap process that scales easily. The top frame is riveted to the case and holds the glass between the gaskets.

[[2, 3]]

[[4-6]]

## Calculations

I did the whole thermal calculation by hand, following the standard procedure for flat-plate collectors:

1. **Radiation**: using the SolarSym simulator, I found the average day of the period (20 August) and its peak radiation, 1,067 W/m².
2. **Orientation**: from the solar declination, Wrocław's latitude (51.1°) and the hour angle, the **optimal panel tilt is 38.9°**, facing south. With this orientation, **1,189 W/m²** reach the panel.
3. **Absorbed radiation**: taking into account reflection and refraction in the glass (Snell's law), its transmittance and the coating's absorptance, the absorber captures **810 W/m²**.
4. **Heat losses** by convection and radiation through the cover, the walls and the bottom: **8.24 W/m²K**, mostly through the cover.
5. **Useful heat**: I sized the tubes from the mass flow and the pressure drop. Below 10 mm the pressure drop shoots up, so I chose **10 mm tubes spaced 30 mm apart**. Since there's no weld between tube and plate, that thermal resistance drops out of the calculation, which is where the design gains efficiency.

[[7]]

## Results

- **1.23 kW of useful heat per panel**, with an efficiency of **68%**.
- **20 panels** to reach 24 kW, in 4 parallel branches of 5 panels in series. Each panel heats the water by 6 °C, from 19 °C (mains water in Poland) to 49 °C.
- A **complete panel design**, with drawings and standard materials for every part except the absorber.

[[8]]
