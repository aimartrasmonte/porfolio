---
title: Marimba afinada per optimització FEA
summary: Marimba de 15 tecles (C3–C5) que vaig dissenyar amb un algoritme propi que afina cada tecla per simulació a ANSYS, i que vaig construir a mà per 50 €. Totes les tecles queden amb menys d'un 2 % d'error de freqüència.
context: Projecte II, ETSEIB · individual
role: Disseny, simulació, assaig de materials i construcció
duration: 1 quadrimestre (2023) · ~120 h
manufacturing: [Serra de cinta, Polidora de banda, Serra de taula, Trepant de columna]
materials: [Fusta de coral (Pterocarpus soyauxii), PVC, Fusta de palet reciclada, Oli de llinosa]
captions:
  - "Els tres primers modes de vibració d'una tecla, amb els nodes (punts quiets) i els antinodes"
  - "Assaig de flexió a tres punts d'un llistó de fusta de coral per mesurar-ne el mòdul de Young"
  - "Esquema paramètric de la tecla: 'd' i 'e' són els dos paràmetres que ajusta l'algoritme"
  - "Les 15 tecles tallades dels 7 llistons de fusta de coral; les de dalt ja tenen l'arc tallat"
  - "Tallant l'arc d'una tecla a la serra de cinta"
  - "Polint l'arc fins a la mida a la polidora de banda"
  - "Trobant els nodes: la sal salta on la tecla vibra i s'acumula allà on no"
  - "Les tecles acabades amb oli de llinosa"
  - "Vista per sota: els arcs de les tecles, de la més greu a la més aguda"
  - "La marimba acabada, amb els ressonadors de PVC"
  - "La marimba acabada, vista des de dalt"
---

Aquesta marimba és fruit de la assignatura de Projecte II, on havíem de dissenyar i construir un idiòfon (instrument que genera notes amb la vibració del seu propi cos) en un quadrimestre i amb un pressupost mínim. Mentre la majoria d'alumnes van fer xilòfons de culleres, jo vaig fer una **marimba de dues octaves (15 tecles)**, amb tubs ressonadors i arpa.

La gràcia d'una marimba és que no n'hi ha prou que cada tecla vibri amb la nota correcta. El **primer harmònic (segon mode lliure de vibració)** ha de vibrar a exactament **4 vegades la freqüència fonamental (primer mode lliure de vibració)** (dues octaves per sobre); si no, la tecla sona estranya encara que la freqüència fonamental sigui correcta. La freqüència de vibració dels modes depèn només de la forma de la tecla i del seu material.

[[1]]

## Material i propietats

Les marimbes professionals es fan de palissandre, però és una fusta cara i difícil de trobar. Parlant amb fusters amb experiència, vaig acabar triant **fusta de coral**: més barata i rígida per a fer un so bonic i aguantar la vibració.

Al no tenir dades fiables de les propietats de la fusta, les vaig mesurar jo mateix:

- **Densitat**: 614,6 kg/m³, pesant un llistó de mides conegudes.
- **Rigidesa (mòdul de Young)**: 8,37 GPa, amb un **assaig de flexió** al laboratori. És el doble que moltes fustes comunes, que van de 2 a 5 GPa.

[[2]]

## Geometria a través de FEA modal iteratiu

Les tecles de marimba tenen un **arc tallat per sota**: traient material del centre es modifica la freqüència del primer mode, i jugant amb la llargada de l'arc s'ajusta l'harmònic. Per a trobar la geometria que afinés totes les tecles, vaig definir la tecla amb 6 paràmetres: quatre fixos segons la tecla (llargada, gruix, amplada, radi de l'arc) i **dos ajustables per afinar-la** - la llargada de l'arc i el gruix al centre.

[[3]]

Per trobar aquests dos valors per a cada nota vaig programar un **algoritme d'optimització a ANSYS APDL**:

- Genera la tecla a partir dels paràmetres i en calcula les freqüències amb una **anàlisi modal per elements finits 2D**, deixant la peça lliure, tal com penjarà de veritat del cordill.
- Primer aprima el centre fins que la nota fonamental s'acosta a l'objectiu.
- Després allarga l'arc per baixar l'harmònic fins a la relació 4:1. Com que això també baixa una mica la fonamental, l'algoritme va reajustant el gruix.
- A cada pas corregeix més o menys segons com de lluny està (Newton-Raphson), i s'atura quan els dos errors són **menors del 2 %**.

Les 15 tecles convergeixen en **12–50 iteracions (unes 20 de mitjana)**, i vaig comprovar cada resultat amb una segona versió del model en 3D.

## Construir-la

Tota la construcció la vaig fer al Laboratori de Maquetes de l'ETSAB.

- **Tallar sense malbaratar fusta**: les 15 tecles havien de sortir d'un sol bloc. Amb un optimitzador de talls en MATLAB vaig trobar la combinació que les encabia en **només 7 llistons**.
- **Arcs**: primer un tall aproximat amb serra de cinta, deixant marge, i després a la polidora de banda fins a la mida.
- **Afinació final**: la fusta no és igual en totes direccions, així que la peça real mai sona exactament com la simulació. Vaig anar polint cada tecla mentre **mesurava les freqüències amb un analitzador d'espectre**, fins a deixar-la afinada.
- **Punts de subjecció**: hi ha dos punts de cada tecla que no vibren (els nodes), i és per on s'ha de penjar perquè el cordill no apagui el so. Per la mateixa irregularitat de la fusta, no coincidien amb els teòrics. Els vaig trobar **posant sal sobre la tecla i picant-la**: la sal salta allà on vibra i s'acumula als nodes.
- **Acabat**: oli de llinosa i no vernís, perquè una capa dura canviaria la rigidesa i desafinaria la tecla.
- **Ressonadors**: tubs de PVC de 50 mm, tapats per baix i tallats a la llargada que amplifica la nota de cada tecla.
- **Estructura**: un marc trapezoidal fet amb la fusta d'un palet reciclat, que segueix la línia dels nodes. Les tecles pengen d'un cordill i no toquen el marc.

[[4-9]]

## Resultat

- **15 tecles afinades**, tant en la nota com en l'harmònic, amb un ressonador per a cadascuna.
- **50 € en total**: 35 € de fusta, 10 € de tubs i 5 € de ferreteria. El marc no va costar res.
- **Unes 120 h** de feina, de les quals 20 h van ser per programar l'algoritme i 26 h al taller.

[[10-11]]
