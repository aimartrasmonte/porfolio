---
title: "TFM: pinça adaptativa per a robot col·laboratiu"
summary: Disseny, optimització topològica i validació d'una pinça de dits adaptatius per a un robot col·laboratiu, capaç de manipular peces de geometria variable.
context: Treball de Fi de Màster
role: Disseny, simulació i prototipatge
duration: 9 mesos
manufacturing: [Impressió 3D SLS, Mecanitzat CNC, Muntatge]
materials: [PA12, Alumini 7075, TPU]
captions:
  - Concepte inicial de la pinça
  - Resultat de l'optimització topològica
  - Anàlisi de tensions dels dits (FEA)
  - Prototip muntat al robot
  - Proves de presa amb peces diferents
---

> **Text de prova.** Substitueix aquest contingut per la descripció real del projecte.

## Objectiu

Desenvolupar una pinça per a un robot col·laboratiu que s'adapti a la forma de la peça sense necessitat de canviar d'eina, reduint pes i cost respecte a solucions comercials.

## Disseny i optimització

Després d'una fase de generació de conceptes, el cos de la pinça es va optimitzar topològicament amb **Ansys Mechanical** per reduir-ne la massa un 35 %. La cinemàtica dels dits es va estudiar amb **MATLAB**.

![Resultat de l'optimització topològica](./images/02.jpg)

## Validació

El prototip es va fabricar per SLS i es va provar amb 12 peces de geometries diferents, amb una taxa d'èxit de presa del 96 %.
