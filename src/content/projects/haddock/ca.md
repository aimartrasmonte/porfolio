---
title: "Haddock's: RC Sailing Barcelona 2024"
summary: Veler de radiocontrol d'1 m que vam dissenyar, simular i construir en 90 dies amb 500 €. Casc imprès en 3D i reforçat amb fibra de vidre. 3r de 12 equips i 2n més ràpid a la prova de velocitat.
context: TFG (matrícula d'honor) · equip de 4
role: Disseny hidrodinàmic i estructural del casc, fabricació del casc i el contrapès de plom
duration: 3 mesos (febrer – maig 2024)
manufacturing: [Impressió 3D FDM, Laminat de fibra de vidre i epoxi, Fosa de plom en motlle de sorra]
materials: [PETG, Fibra de vidre, Resina epoxi, Fusta de balsa, Plom reciclat, Alumini]
captions: []
---

Aquest va ser el meu TFG. Amb tres companys de l'ETSEIB ens vam apuntar a la [RC Sailing Barcelona](http://rcsailingbarcelona.com/), una regata entre universitats de velers de radiocontrol que es va organitzar arran de la America's Cup a Barcelona. Teníem **90 dies i 500 €** per fer un veler d'**1 m d'eslora**, i les normes eren estrictes:

- Màxim 50 cm de profunditat sota l'aigua, 160 cm d'alçada i 6 kg de pes, amb un contrapès de plom d'almenys 2 kg.
- Si bolca, s'ha de redreçar sol, i ha d'aguantar 20 s cap per avall sense que hi entri aigua.
- Almenys la meitat del pes, de materials reciclats o reciclables.

Jo em vaig encarregar del **casc**: dissenyar-lo, validar-lo i fabricar-lo. En total hi vaig dedicar 382 h, el 42 % de les hores de l'equip.

<!-- FOTO: veler complet al moll o foto d'equip (Figura 75/76 de la memòria) -->

## La idea: un casc que "planegi"

Amb 90 dies no hi havia temps per provar i corregir, així que vaig dedicar l'inici a entendre bé el problema i fixar el concepte abans de dibuixar res.

Un vaixell normal empeny l'aigua amb tot el casc, i a partir d'una certa velocitat, que depèn de la seva llargada, la resistència es dispara: és com si fes pujada. Per a un veler d'1 m, aquest límit és de només **2,4 nusos (uns 4,5 km/h)**, i un veler de radiocontrol en va a 4–6. Per anar més ràpid, el casc ha de **planejar**: aixecar-se i lliscar per sobre l'aigua, com una planxa de surf o una llanxa.

A partir d'aquí vaig prendre les decisions principals:

- **Un sol casc i dues veles**, la configuració més simple: es redreça sola i hi ha menys coses que es puguin trencar. En una regata on la majoria d'equips no acaben, la fiabilitat és el que més compta.
- **Casc ample amb el fons en forma de V oberta**: quan el vent inclina el veler, un dels dos costats del fons queda pla sobre l'aigua i fa de superfície per planejar.
- **Proa vertical i estreta**, per tallar les onades en lloc de pujar-hi. Per a un vaixell tan petit, una onada normal és molt gran.
- **Peces desmuntables** (quilla, timó i pal), per poder-lo transportar.

## Disseny i comprovacions

<!-- FOTO: plànols de línies o vistes del casc a MaxSurf (Fig. 28–29) -->

- **Forma del casc**, amb MaxSurf, un programa de disseny naval.
- **Estabilitat**: vaig comprovar que el veler tendeix a redreçar-se en **qualsevol inclinació, de 0° a 180°**. Si bolca del tot, torna a posar-se dret sol.
- **Resistència a l'avanç**: la simulació confirmava el que esperava, amb el pic de resistència entre 2,5 i 3 nusos i el pas a planejar a partir d'uns 3 nusos.
- **Model 3D a SolidWorks**:
  - Casc de paret de 1,5 mm, partit en 4 trossos perquè cabés a la impressora 3D (256 mm).
  - Reforços interiors als punts on es fan més esforços: on va el pal, la quilla i el timó.
  - Calaixos integrats a la coberta, perquè el casc fos estanc sense juntes.
- **Quilla, timó i contrapès**: perfils aerodinàmics estàndard (NACA), com els d'una ala d'avió. Vaig calcular el volum del contrapès per a la densitat del plom, perquè pesés exactament 2 kg.

<!-- FOTO: vista transparent del casc amb l'estructura interior (Fig. 34–35) -->

## Fabricació

El que més m'agrada del projecte és la manera de fabricar el casc: **la closca de plàstic impresa fa alhora de motlle i d'estructura interior**. A sobre s'hi lamina la fibra de vidre directament, així que no cal fer cap motlle a part i tot el procés és molt més ràpid.

- **Impressió 3D**: 4 peces de PETG (uns 4 kg i 72 h d'impressió), enganxades amb epoxi.
- **Fibra de vidre**: 2 capes amb resina epoxi. Van sortir algunes bombolles a la coberta i les vaig reparar injectant-hi resina amb una xeringa, afegint menys d'un 10 % de pes.
- **Quilla**: un nucli de fusta de balsa amb 5 capes de fibra de vidre. Amb els 2 kg de plom penjant de la punta només es doblega uns 5°.
- **Contrapès de plom**: el vaig fer amb ploms de submarinisme vells, fosos i colats en un motlle de sorra, i acabats amb radial i trepant.
- **Tapa estanca**: una carmanyola de plàstic adaptada. Barata, estanca, i aguanta obrir-la i tancar-la tantes vegades com calgui.

<!-- FOTO: impressió 3D de les peces, laminat, colada del plom, casc acabat i pintat (Fig. 39–54) -->

## Proves i regata

Abans de la regata vam provar el veler amb un ventilador, i vaig veure que el motor que tiba la vela no tenia prou força. El problema era la **fricció del cordill** en tres punts; ho vaig arreglar amb una politja improvisada i unes peces arrodonides impreses en 3D.

- Vam passar la **inspecció tècnica al primer intent**: mides, pes, redreçament i estanquitat.
- Vam quedar **3rs de 12 equips**. Només 3 vaixells van acabar totes les proves.
- Vam fer la **2a millor marca a la prova de velocitat**: 50 m en 50 s.
- Cost final de **509 €**, un 1,8 % per sobre del pressupost.

<!-- VÍDEO: navegació a la regata -->

## Què faria diferent

- **Pes**: el veler va acabar pesant 5,4 kg, un 25 % més del que havia previst (només la closca de plàstic ja en pesava 1,75). Hauria d'haver dissenyat el casc pensant en aquest pes real.
- **Eix del timó**: era de fibra de carboni i es va trencar d'un cop just abans de la final. D'acer inoxidable, com a molt s'hauria doblegat i hauríem pogut seguir.
- **Contrapès**: era massa gruixut i frenava més del que havia calculat.
- **El vent**: el dia de la regata en va fer molt poc, i la flota no va arribar a planejar. Justament on el nostre casc tenia avantatge.
