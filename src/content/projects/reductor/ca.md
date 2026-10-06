---
title: Reductor compacte de vis sens fi
summary: Avantprojecte d'un reductor de vis sens fi i = 40 per acoblar un motor elèctric a màquines lentes, de 1.400 a 35 min⁻¹ i 395 N·m a la sortida. Carcassa partida de fosa nodular, sortida orientable a dreta o esquerra i un disseny pensat per fabricar-ne 6.000 unitats en 3 anys.
context: Disseny Mecànic, ETSEIB · individual
role: Dimensionament, CAD, plànols i càlculs de comprovació
duration: 1 quadrimestre (tardor 2025)
manufacturing:
  [Fosa en motlle de sorra, Forja amb matrius, Mecanitzat, Tremp i revingut, Tall làser]
materials: [Fosa nodular GJS 450-12, Bronze fosforós CuSn11P, Acer 16MnCr5, Acer C45, Acer C25, NBR]
captions:
  - "El reductor des de darrere, amb la tapa portarodaments de l'eix de sortida"
  - "L'engranatge: roda de bronze collada a l'arbre de sortida i vis amb els seus rodaments"
  - "Vista explosionada del reductor"
  - "Conjunt roda explosionat: brida de sortida, rodaments, arbre, roda de bronze i tapa"
  - "Conjunt vis explosionat: brida d'entrada, KM i MB, rodaments de contacte angular i rígid"
  - "Carcassa muntada, amb els taps d'oli i l'espiell"
  - "Carcassa inferior: la junta de perfil circular a mida i els allotjaments dels rodaments"
  - "Muntatge final: les dues carcasses es tanquen al voltant de la roda"
  - "Diagrama de cos lliure de l'arbre de sortida, per calcular les reaccions als rodaments"
  - "Plànol de muntatge, amb les seccions i la llista de 33 components"
  - "Plànol de la carcassa inferior, de fosa nodular"
  - "Plànol de l'arbre de sortida"
---

A l'assignatura de Disseny Mecànic de l'ETSEIB havíem de fer l'**avantprojecte complet d'un reductor de vis sens fi**: el dimensionament, el disseny de totes les peces, els plànols, els càlculs de comprovació i les instruccions de muntatge i manteniment.

L'encàrrec era un reductor per acoblar un **motor elèctric** a màquines que necessiten **35 min⁻¹ i 300–400 N·m**, amb brides estàndard a l'entrada i a la sortida. El motor penja directament del reductor, l'eix d'entrada queda vertical a la part de sota i, tot i així, no pot perdre oli. El client en preveia **6.000 unitats en 3 anys**, amb una vida de **10.000 hores** a plena càrrega.

[[1]]

## Dimensionament

Partint d'una distància entre eixos de 112 mm, l'únic mòdul normalitzat que deixava el vis dins les proporcions recomanades era **m = 4,5 mm**. A partir d'aquí surt tota la geometria: un **vis d'una entrada** i una **roda de 40 dents** (180 mm de diàmetre primitiu), que donen la relació **i = 40**: de 1.400 min⁻¹ i 18 N·m a l'entrada a **35 min⁻¹ i 395 N·m** a la sortida.

El rendiment és del **54 %**. És baix, però és el preu dels reductors de vis sens fi: a canvi, fan una reducció molt gran en una sola etapa i en molt poc espai.

Els arbres es van dimensionar per torsió: els eixos interiors de 16 i 42 mm de les brides del motor i la màquina, i els arbres buits del reductor (20 i 55 mm) amb el mateix moment resistent.

[[2]]

## Concepte de disseny

Amb 8 unitats per dia laborable, cap taller tindria una màquina dedicada només al reductor. Per això totes les peces es fan amb **processos genèrics**, i només s'hi afegeixen motlles, matrius i utillatges de muntatge, que sí que s'amortitzen en 6.000 unitats.

La decisió clau va ser fer una **carcassa partida per l'eix de sortida**:

- **Més compacte**: no calen tapes grans per entrar-hi la roda.
- **Alineació ràpida**: la roda es col·loca sobre la carcassa inferior amb tot el mecanisme a la vista. L'alineació es comprova a ull i s'ajusta afegint o traient galgues de 0,25 mm.
- **Sortida reversible**: les dues meitats són simètriques. Intercanviant la brida de sortida per la tapa portarodaments, la sortida queda a dreta o a esquerra, segons el que necessiti cada client.

[[3-5]]

L'inconvenient és l'**estanquitat**: els 4 punts on es troben les dues carcasses amb la brida i la tapa són difícils de segellar. Com que queden molt per sobre del nivell de l'oli i només reben esquitxos, les pèrdues són negligibles. Per això el reductor s'ha de transportar i vendre sec.

[[3d]]

## Peces i materials

- **Carcasses**: **fosa nodular GJS 450-12**, en motlle de sorra, i mecanitzades només a les cares de contacte i als forats roscats. Les juntes entre carcasses són de NBR amb un perfil normalitzat, però fetes a mida per seguir la forma de la peça.
- **Vis**: mecanitzat directament sobre l'arbre d'entrada, en una sola peça d'**acer de cementació 16MnCr5**, preforjat i tornejat. Després se li fa un tremp i revingut fins a 50 HRC perquè no es desgasti.
- **Roda**: de **bronze fosforós CuSn11P**, sense tractament tèrmic. Es vol tova perquè el desgast es concentri en ella i no en el vis, que és més car i crític. Va muntada a l'arbre de sortida per interferència i collada amb 8 cargols.
- **Arbre de sortida**: **acer C45** forjat, normalitzat i mecanitzat.
- **Brides i tapa**: **acer C25**, amb menys carboni, més tenaç per a càrregues estàtiques.
- **Comercials**: rodaments FAG, retenidors SKF, juntes tòriques, taps d'oli i espiell. A les unions roscades a la carcassa vaig fer servir **volanderes Nord-Lock** en lloc de fixador de rosques, perquè les vibracions no afluixin els cargols i es pugui obrir el reductor per fer-ne el manteniment.

[[6-8]]

## Càlculs de comprovació

Amb les forces de contacte entre el vis i la roda (830 N tangencial, 1.630 N radial i 4.400 N axial), vaig resoldre l'equilibri de l'arbre de sortida per obtenir les reaccions a cada rodament. Els rodaments de contacte angular FAG 7212-B es van comprovar segons la **ISO 281**, i la vida més desfavorable és de **més de 700.000 hores**, molt per sobre de les 10.000 que demana el client.

[[9]]

## Resultats

- **Avantprojecte complet**: memòria, **plànols** de muntatge i de les peces principals amb toleràncies i acabats, i especificacions de tots els components comercials.
- **Instruccions de muntatge** pas a pas, amb els parells de collada de cadascuna de les 5 unions cargolades.
- **Pla de lubricació i manteniment**: oli ISO VG 320, uns 730 ml, i intervals de revisió i de canvi d'oli.

[[10-12]]
