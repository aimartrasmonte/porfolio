---
title: Col·lector solar tèrmic refrigerat per aigua
summary: Disseny i càlcul d'un col·lector solar tèrmic de 1×2 m i d'una instal·lació de 24 kW a Wrocław. L'absorbidor i les canonades són una sola peça d'alumini emmotllada, sense soldadures, pensada per a producció en sèrie. Cada panell aporta 1,23 kW útils i en calen 20.
context: Solar Energy Conversion Systems, Politechnika Wrocławska · individual
role: Disseny, CAD i càlcul tèrmic
# duration: pendent d'omplir
manufacturing: [Fosa d'alumini, Plegat de xapa, Reblat, Juntes d'estanquitat]
materials: [Alumini, Vidre, Acer inoxidable, Llana mineral, Recobriment de coure negre]
captions:
  - "El panell tancat: 1 × 2 m, amb les dues sortides roscades de la canonada"
  - "Secció pel marc i l'aïllament: el vidre i la placa absorbidora a sota"
  - "Secció per les capes: vidre, absorbidor, aïllament i caixa"
  - "Absorbidor, junta i col·lector de distribució, explosionats"
  - "Detall dels 32 tubs emmotllats dins l'absorbidor, la junta i els forats del col·lector"
  - "Col·lector de distribució d'acer inoxidable amb la rosca per connectar el panell"
  - "Coeficients de pèrdues de calor del col·lector: per la coberta, les parets i el fons"
  - "Instal·lació de 20 panells: 4 branques en paral·lel de 5 panells en sèrie, de 19 °C a 49 °C"
---

Durant el meu semestre a la Politechnika Wrocławska, a l'assignatura de Solar Energy Conversion Systems, vaig dissenyar un **col·lector solar tèrmic** i la instal·lació completa per a unes especificacions donades: **24 kW de potència** escalfant aigua fins a **49 °C**, de l'1 de maig al 30 de setembre a Wrocław, amb panells de mida fixa de **1 × 2 m**.

Un col·lector tèrmic és, per capes: una **coberta** transparent, una **placa absorbidora** que s'escalfa amb el sol, un **sistema de canonades** que s'emporta la calor amb aigua, un **aïllament** que evita que la calor s'escapi i una **caixa** que ho tanca tot.

[[1]]

## Concepte de disseny

En un col·lector convencional, la placa absorbidora és una xapa i els tubs de l'aigua s'hi solden a sota. Aquesta unió és el punt feble: la calor ha de passar per la soldadura, que condueix pitjor i té una superfície de contacte petita, i soldar 30 tubs per panell és molta mà d'obra.

La meva proposta va ser **unificar l'absorbidor i les canonades en una sola peça d'alumini emmotllada**, amb els **32 tubs ja integrats** dins la placa. La calor passa directament de la superfície a l'aigua, sense soldadures ni peces intermèdies. A canvi, la peça s'ha de fer amb un motlle a mida, que és una inversió inicial gran: és un disseny **pensat per a producció en sèrie**, on el cost del motlle es reparteix i la reducció de mà d'obra abarateix cada panell.

[[3d]]

## Components i materials

- **Coberta: vidre de 4 mm.** El PMMA és més transparent, però amb el sol es degrada i s'enterboleix. Vaig preferir el vidre per tenir un panell que no necessités manteniment. Va muntat amb una junta de goma que evita que l'aire entri i surti.
- **Absorbidor: alumini.** El coure condueix millor (400 vs 250 W/mK), però costa gairebé 4 vegades més per kg i la diferència no ho justificava. La placa té 4 mm als punts més prims.
- **Recobriment: coure negre**, amb una absorbància alta (0,85) i una emissivitat baixa (0,18): absorbeix molt i irradia poc.
- **Col·lectors de distribució: acer inoxidable.** A cada extrem, un tub de 25 mm amb forats que connecten els 32 tubs en paral·lel, premsat contra l'absorbidor amb cargols i una junta. Els extrems surten de la caixa amb rosca per connectar-hi altres panells o un tap. L'acer inoxidable condueix 10 vegades menys que l'alumini, que aquí és un avantatge: és la peça que surt a l'exterior.
- **Aïllament: llana mineral o de vidre**, de 48,75 mm sota l'absorbidor i 25 mm a les parets. Les escumes són més barates, però es degraden amb el temps i amb la humitat.
- **Caixa: xapa d'acer inoxidable de 3 mm plegada**, un procés barat i fàcil d'escalar. El marc superior es reblona a la caixa i atrapa el vidre entre les juntes.

[[2, 3]]

[[4-6]]

## Càlculs

Tot el càlcul tèrmic el vaig fer a mà, seguint el procediment estàndard per a col·lectors plans:

1. **Radiació**: amb el simulador SolarSym vaig trobar el dia mitjà del període (20 d'agost) i el seu pic de radiació, 1.067 W/m².
2. **Orientació**: amb la declinació solar, la latitud de Wrocław (51,1°) i l'angle horari, l'**inclinació òptima del panell és de 38,9°**, orientat al sud. Amb aquesta orientació, al panell hi arriben **1.189 W/m²**.
3. **Radiació absorbida**: tenint en compte la reflexió i la refracció al vidre (llei de Snell), la seva transmitància i l'absorbància del recobriment, l'absorbidor capta **810 W/m²**.
4. **Pèrdues de calor** per convecció i radiació a través de la coberta, les parets i el fons: **8,24 W/m²K**, la major part per la coberta.
5. **Calor útil**: vaig dimensionar els tubs a partir del cabal i de la pèrdua de càrrega. Per sota de 10 mm la pèrdua de pressió es dispara, així que vaig triar **tubs de 10 mm separats 30 mm**. Com que no hi ha soldadura entre tub i placa, aquesta resistència tèrmica desapareix del càlcul, que és on el disseny guanya rendiment.

[[7]]

## Resultats

- **1,23 kW útils per panell**, amb un rendiment del **68 %**.
- **20 panells** per arribar als 24 kW, en 4 branques en paral·lel de 5 panells en sèrie. Cada panell escalfa l'aigua 6 °C, de 19 °C (l'aigua de xarxa a Polònia) a 49 °C.
- Un **disseny de panell complet**, amb plànols i materials estàndard per a totes les peces menys l'absorbidor.

[[8]]
