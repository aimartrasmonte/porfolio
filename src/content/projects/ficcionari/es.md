---
title: "Ficcionari: juego móvil multijugador en tiempo real"
summary: Juego multijugador en tiempo real para jugar al juego del diccionario con amigos, cada uno desde su móvil. Cuenta con diccionarios propios de 15k y 36k palabras inusuales en catalán y castellano, extraídos del Viccionari y el Wikcionario. Publicado y operativo.
context: Proyecto personal
role: Diseño y desarrollo
duration: septiembre 2026
manufacturing: []
materials: []
captions:
  - "Pantalla de inicio: crear una partida o unirse a una"
  - "Sala de espera con el código y el QR para unirse a la partida"
  - "El narrador tira los dados hasta encontrar una palabra que le guste"
  - "Un jugador escribiendo su definición falsa para «bregma»"
  - "Resultados de una ronda: la definición real, los votos que ha recibido cada una y la más graciosa"
  - "Puntos de la ronda y clasificación acumulada"
---

Es un juego que siempre me ha gustado mucho para jugar con amigos o en familia después de comer: solo hace falta papel, boli y un diccionario. Alguien busca en el diccionario una palabra rara, el resto se inventan definiciones falsas y todos votan cuál creen que es la de verdad.

El problema es que, a menudo, cuando es buen momento para jugar no tengo papel ni boli, y mucho menos un diccionario a mano. He creado **[Ficcionari](https://ficcionari.vercel.app/)** para llevar el juego al móvil: un jugador crea la partida, el resto se unen con un **código de 4 letras o un QR**, y se juega en persona, cada uno con su teléfono.

[[1-2]]

## Concepto de diseño

La idea no era sustituir la sobremesa, sino acompañarla. Por eso el móvil solo hace lo que el papel hace mal, y el resto pasa en voz alta. En cada ronda, un jugador hace de **narrador**:

1. **Elige una palabra** tirando dados sobre el diccionario, con la definición real a la vista.
2. **La anuncia en voz alta**. Al resto de jugadores no se les muestra: tienen que escucharla.
3. Los demás **escriben una definición falsa** que parezca lo bastante real.
4. El narrador **lee todas las definiciones mezcladas**, con la real entre ellas.
5. Todos **votan** cuál es la real y, opcionalmente, cuál es la más graciosa.
6. **Revelación**: de quién era cada definición, quién ha picado y cuántos puntos se lleva cada uno.

Se ganan puntos acertando la real y, sobre todo, **engañando a los demás**. El narrador va rotando en cada ronda.

[[3-4]]

## Arquitectura

La app es una **PWA** hecha con **React y TypeScript**, instalable en el móvil y sin necesidad de crear ninguna cuenta: cada jugador tiene una sesión anónima y, si se cierra el navegador o se queda sin cobertura, **se reconecta solo** a la misma partida.

Todo el estado de la partida vive en una base de datos **Postgres en Supabase**, y cada móvil se suscribe a ella en tiempo real: cuando alguien envía una definición o vota, el resto de dispositivos lo ven al instante. El reto de hacerlo así es que **varios móviles intentan cambiar el mismo estado a la vez**, y hay que evitar que se pisen:

- **Solo el narrador avanza las fases automáticamente.**
- **Cada acción se puede repetir sin efectos**: enviar dos veces una definición o un voto solo lo actualiza, no lo duplica.
- **Los puntos se suman en la base de datos**.
- **Las definiciones se mezclan igual en todos los móviles**, usando el identificador de la ronda como semilla, para que la número 3 sea la misma definición para todos.
- **Si alguien se va**, el juego reasigna el narrador o el anfitrión automáticamente.

## Diccionarios

Un juego del diccionario es tan bueno como sus palabras. En lugar de depender de una API externa, generé unos **diccionarios propios** procesando las bases de datos completas del **Viccionari** (catalán) y el **Wikcionario** (castellano): un script las lee en streaming y descarta nombres propios, flexiones, locuciones, palabras demasiado conocidas y definiciones autorreferentes.

La limpieza recortó cerca de un tercio de cada diccionario, dejando **14.900 palabras en catalán y 36.450 en castellano**.

## Del playtest a la versión final

La primera partida de verdad con amigos salió bien, pero vi **varias fricciones** que no se intuían programando:

- Nadie recordaba la palabra cuando llegaba el momento de votar. Ahora siempre se mantiene visible en la cabecera desde que se escribe hasta los resultados.
- La revelación avanzaba sola en 20 segundos, y es precisamente **la parte más divertida**. Ahora la pasa el narrador cuando todos han terminado de reírse.
- Las faltas de ortografía delataban al autor. He añadido la opción de **ocultar las definiciones** a los votantes, que solo ven números mientras el narrador las lee.
- También he añadido un **tiempo límite** para escribir, que el narrador pueda **cerrar la votación** a mano si alguien se desconecta, y la opción de **descargar la revelación y el podio como imagen** para guardar las rondas épicas.

[[5-6]]

## Resultados

- App **publicada y en uso**, en catalán y castellano.
- Partidas de **3 a 12 jugadores**, sin cuentas, sin instalar nada y sin servidor propio.
- **Puntuación configurable**: puntos por acertar, por engañar y por la definición más graciosa.
