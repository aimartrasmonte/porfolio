---
title: Marimba afinada per optimització FEA
summary: Marimba de 15 tecles (C3–C5) que vaig dissenyar amb un algoritme propi que afina cada tecla per simulació a ANSYS, i que vaig construir a mà per 50 €. Totes les tecles queden amb menys d'un 2 % d'error de freqüència.
context: Projecte II, ETSEIB · individual
role: Disseny, simulació, assaig de materials i construcció
duration: 1 quadrimestre (2023) · ~120 h
manufacturing: [Serra de cinta, Polidora de banda, Serra de taula, Trepant de columna]
materials: [Fusta de coral (Pterocarpus soyauxii), PVC, Fusta de palet reciclada, Oli de llinosa]
captions: []
---

A l'assignatura de Projecte II havíem de dissenyar i construir un instrument de percussió afinat en un quadrimestre i gastant el mínim possible. Jo vaig fer una **marimba de 15 tecles en Do major (C3–C5)**, amb els seus tubs ressonadors i l'estructura.

La gràcia d'una marimba és que no n'hi ha prou que cada tecla faci la nota correcta. A més, el **primer harmònic ha de ser exactament 4 vegades la freqüència fonamental** (dues octaves per sobre); si no, la tecla sona estranya encara que la nota sigui bona. I tot això depèn només de la forma de la tecla i de la fusta.

<!-- FOTO: marimba acabada (Fig. 21–22 de la memòria) -->

## Triar i mesurar la fusta

Les marimbes professionals es fan de palissandre, però era car i no el trobava enlloc. Vaig voltar per 8 fusteries i, parlant amb fusters amb experiència, vaig acabar triant **fusta de coral** (*Pterocarpus soyauxii*): més barata i prou dura i rígida.

El problema és que no en trobava dades fiables, i sense elles no podia simular res. Així que les vaig mesurar jo:

- **Densitat**: 614,6 kg/m³, pesant un llistó de mides conegudes.
- **Rigidesa (mòdul de Young)**: 8,37 GPa, amb un **assaig de flexió** al laboratori. És el doble que moltes fustes comunes, que van de 2 a 5 GPa.

<!-- FOTO: assaig de flexió i pesada del llistó (Fig. 9) + gràfic força-desplaçament (Fig. 10) -->

## Afinar les tecles a l'ordinador

Les tecles de marimba tenen un **arc tallat per sota**: traient material del centre la nota baixa, i jugant amb la llargada de l'arc s'ajusta l'harmònic. Vaig definir la tecla amb 6 paràmetres; quatre es fixen per a cada nota (llargada, gruix, amplada, extrems de l'arc) i **dos s'ajusten per afinar-la**: la llargada de l'arc i el gruix al centre.

<!-- FOTO: esquema paramètric de la tecla (Fig. 12) -->

Per trobar aquests dos valors per a cada nota vaig programar un **algoritme d'optimització a ANSYS APDL**:

- Genera la tecla a partir dels paràmetres i en calcula les freqüències amb una **anàlisi modal per elements finits**, deixant la peça lliure, tal com penjarà de veritat del cordill.
- Primer aprima el centre fins que la nota fonamental s'acosta a l'objectiu.
- Després allarga l'arc per baixar l'harmònic fins a la relació 4:1. Com que això també baixa una mica la nota, l'algoritme la va reajustant.
- A cada pas corregeix més o menys segons com de lluny està, i s'atura quan els dos errors són **menors del 2 %**.

Les 15 tecles convergeixen en **12–50 iteracions (unes 20 de mitjana)**, i vaig comprovar cada resultat amb una segona versió del model en 2D.

## Construir-la

Tota la construcció la vaig fer jo, al Laboratori de Maquetes de l'ETSAB.

- **Tallar sense malbaratar fusta**: les 15 tecles havien de sortir d'un sol bloc. Amb un optimitzador de talls en MATLAB vaig trobar la combinació que les encabia en **només 7 llistons**.
- **Arcs**: primer un tall aproximat amb serra de cinta, deixant marge, i després a la polidora de banda fins a la mida.
- **Afinació final**: la fusta no és igual en totes direccions, així que la peça real mai sona exactament com la simulació. Vaig anar polint cada tecla mentre **mesurava les freqüències amb un analitzador d'espectre**, fins a deixar-la afinada.
- **Punts de subjecció**: hi ha dos punts de cada tecla que no vibren (els nodes), i és per on s'ha de penjar perquè el cordill no apagui el so. Per la mateixa irregularitat de la fusta, no coincidien amb els teòrics. Els vaig trobar posant sal sobre la tecla i picant-la: la sal salta allà on vibra i s'acumula als nodes.
- **Acabat**: oli de llinosa i no vernís, perquè una capa dura canviaria la rigidesa i desafinaria la tecla.
- **Ressonadors**: tubs de PVC de 50 mm, tapats per baix i tallats a la llargada que amplifica la nota de cada tecla.
- **Estructura**: un marc trapezoidal fet amb la fusta d'un palet reciclat, que segueix la línia dels nodes. Les tecles pengen d'un cordill i no toquen el marc.

<!-- FOTO: llistons tallats (Fig. 13), serra de cinta (Fig. 14), polidora (Fig. 15), nodes amb sal (Fig. 16), acabat (Fig. 17) -->

## Resultat

- **15 tecles afinades**, tant en la nota com en l'harmònic, amb un ressonador per a cadascuna.
- **50 € en total**: 35 € de fusta, 10 € de tubs i 5 € de ferreteria. El marc no va costar res.
- **Unes 120 h** de feina, de les quals 20 h van ser per programar l'algoritme i 26 h al taller.

<!-- VÍDEO: tocant la marimba -->

## Què faria diferent

- **Simular la fusta com el que és**: la vaig modelar com si fos igual en totes direccions, i aquesta és la principal raó per la qual la simulació i la realitat no quadraven del tot. Si l'assagés en les tres direccions, m'estalviaria bona part de l'afinació a mà.
- **Materials més sostenibles**: la fusta tropical i el PVC eren el que permetia el pressupost, però tenen un impacte ambiental alt. Provaria fustes locals o tubs d'alumini.
