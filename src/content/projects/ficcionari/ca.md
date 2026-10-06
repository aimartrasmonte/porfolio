---
title: "Ficcionari: joc mòbil multijugador en temps real"
summary: Joc multijugador en temps real per jugar al joc del diccionari amb amics, cadascú des del seu mòbil. Compta amb diccionaris propis de 15k i 36k paraules inusuals en català i castellà, extrets del Viccionari. Publicat i operatiu.
context: Projecte personal
role: Disseny i desenvolupament
duration: setembre 2026
manufacturing: []
materials: []
captions:
  - "Pantalla d'inici: crear una partida o unir-s'hi"
  - "Sala d'espera amb el codi i el QR per unir-se a la partida"
  - "El narrador tira els daus fins que troba una paraula que li agradi"
  - "Un jugador escrivint la seva definició falsa per a «bregma»"
  - "Resultats d'una ronda: la definició real, els vots que ha rebut cada una i la més graciosa"
  - "Punts de la ronda i classificació acumulada"
---

Un joc que sempre m'ha agradat molt per jugar amb amics o familia després de dinar: només cal paper, boli i un diccionari. Algú busca al diccionari una paraula estranya, la resta s'inventen definicions falses i tothom vota quina creu que és la de veritat.

El problema és que sovint quan és un bon moment per jugar no tinc paper ni boli, molt menys un diccionari a ma. He creat **[Ficcionari](https://ficcionari.vercel.app/)** per dur el joc al mòbil: un jugador crea la partida, la resta s'hi uneixen amb un **codi de 4 lletres o un QR**, i es juga en persona, cadascú amb el seu telèfon.

[[1-2]]

## Concepte de disseny

La idea era no substituir la sobretaula, sinó acompanyar-la. Per això el mòbil només fa el que el paper fa malament, i la resta passa en veu alta. A cada ronda, un jugador fa de **narrador**:

1. **Tria una paraula** tirant daus sobre el diccionari, amb la definició real a la vista.
2. **L'anuncia en veu alta**. Als altres jugadors no se'ls mostra: l'han d'escoltar.
3. Els altres **escriuen una definició falsa** que sembli prou real.
4. El narrador **llegeix totes les definicions barrejades**, la real entre elles.
5. Tothom **vota** quina és la real i, opcionalment, quina és la més graciosa.
6. **Revelació**: de qui era cada definició, qui ha picat i quants punts s'emporta cadascú.

Es guanyen punts encertant la real i, sobretot, **enganyant els altres**. El narrador va rotant en cada ronda.

[[3-4]]

## Arquitectura

L'app és una **PWA** feta amb **React i TypeScript**, instal·lable al mòbil i sense necessitat de crear cap compte: cada jugador té una sessió anònima i, si es tanca el navegador o es queda sense cobertura, **es reconnecta sol** a la mateixa partida.

Tot l'estat de la partida viu en una base de dades **Postgres a Supabase**, i cada mòbil s'hi subscriu en temps real: quan algú envia una definició o vota, la resta de dispositius ho veuen a l'instant. El repte de fer-ho així és que **varis mòbils intenten canviar el mateix estat alhora**, i cal que no es trepitgin:

- **Només el narrador avança les fases automàticament.**
- **Cada acció es pot repetir sense efectes**: enviar dues vegades una definició o un vot només l'actualitza, no el duplica.
- **Els punts se sumen a la base de dades**.
- **Les definicions es barregen igual a tots els mòbils**, fent servir l'identificador de la ronda com a llavor, perquè el número 3 sigui la mateixa definició per a tothom.
- **Si algú marxa**, el joc reassigna el narrador o l'amfitrió automàticament.

## Diccionaris

Un joc del diccionari és tan bo com les seves paraules. En lloc de dependre d'una API externa, vaig generar uns **diccionaris propis** processant les bases de dades completes del **Viccionari** (català) i el **Wikcionario** (castellà): un script les llegeix en streaming i descarta noms propis, flexions, locucions, paraules massa conegudes i definicions autoreferents

La neteja va retallar prop d'un terç de cada diccionari, deixant **14.900 paraules en català i 36.450 en castellà**.

## Del playtest a la versió final

La primera partida de veritat amb amics va sortir bé, però vaig veure **varies friccions** que no s'intuïen programant:

- Ningú recordava la paraula quan arribava el moment de votar. Ara sempre es manté visible a la capçalera des que s'escriu fins als resultats.
- La revelació avançava sola en 20 segons, i és precisament **la part més divertida**. Ara la passa el narrador quan tothom ha acabat de riure.
- Les faltes d'ortografia delataven l'autor. He afegit l'opció d'**amagar les definicions** als votants, que només veuen números mentre el narrador les llegeix.
- També he afegit un **temps límit** per escriure, que el narrador pugui **tancar la votació** a mà si algú es desconnecta, i la opció de **descarregar la revelació i el podi com a imatge** per guardar les rondes èpiques.

[[5-6]]

## Resultats

- App **publicada i en ús**, en català i castellà.
- Partides de **3 a 12 jugadors**, sense comptes, sense instal·lar res i sense servidor propi.
- **Puntuació configurable**: punts per encertar, per enganyar i per la definició més graciosa.
