---
title: "Haddock's: RC Sailing Barcelona 2024"
summary: Velero de radiocontrol de 1 m que diseñamos, simulamos y construimos en 90 días con 500 €. Casco impreso en 3D y reforzado con fibra de vidrio. 3.º de 12 equipos y 2.º más rápido en la prueba de velocidad.
context: TFG (matrícula de honor) · equipo de 4
role: Diseño hidrodinámico y estructural del casco, fabricación del casco y el contrapeso de plomo
duration: 3 meses (febrero – mayo 2024)
manufacturing: [Impresión 3D FDM, Laminado de fibra de vidrio y epoxi, Fundición de plomo en molde de arena]
materials: [PETG, Fibra de vidrio, Resina epoxi, Madera de balsa, Plomo reciclado, Aluminio]
captions: []
---

Este fue mi TFG. Con tres compañeros de la ETSEIB nos apuntamos a la [RC Sailing Barcelona](http://rcsailingbarcelona.com/), una regata entre universidades de veleros de radiocontrol que se organizó a raíz de la America's Cup en Barcelona. Teníamos **90 días y 500 €** para hacer un velero de **1 m de eslora**, y las normas eran estrictas:

- Máximo 50 cm de profundidad bajo el agua, 160 cm de altura y 6 kg de peso, con un contrapeso de plomo de al menos 2 kg.
- Si vuelca, tiene que enderezarse solo, y aguantar 20 s boca abajo sin que entre agua.
- Al menos la mitad del peso, de materiales reciclados o reciclables.

Yo me encargué del **casco**: diseñarlo, validarlo y fabricarlo. En total le dediqué 382 h, el 42 % de las horas del equipo.

## La idea: un casco que "planee"

Con 90 días no había tiempo para probar y corregir, así que dediqué el principio a entender bien el problema y fijar el concepto antes de dibujar nada.

Un barco normal empuja el agua con todo el casco, y a partir de cierta velocidad, que depende de su longitud, la resistencia se dispara: es como si fuera cuesta arriba. Para un velero de 1 m, ese límite es de solo **2,4 nudos (unos 4,5 km/h)**, y un velero de radiocontrol va a 4–6. Para ir más rápido, el casco tiene que **planear**: levantarse y deslizarse por encima del agua, como una tabla de surf o una lancha.

A partir de ahí tomé las decisiones principales:

- **Un solo casco y dos velas**, la configuración más simple: se endereza sola y hay menos cosas que puedan romperse. En una regata en la que la mayoría de equipos no terminan, la fiabilidad es lo que más cuenta.
- **Casco ancho con el fondo en forma de V abierta**: cuando el viento inclina el velero, uno de los dos lados del fondo queda plano sobre el agua y hace de superficie para planear.
- **Proa vertical y estrecha**, para cortar las olas en lugar de subirlas. Para un barco tan pequeño, una ola normal es muy grande.
- **Piezas desmontables** (quilla, timón y mástil), para poder transportarlo.

## Diseño y comprobaciones

- **Forma del casco**, con MaxSurf, un programa de diseño naval.
- **Estabilidad**: comprobé que el velero tiende a enderezarse en **cualquier inclinación, de 0° a 180°**. Si vuelca del todo, vuelve a ponerse derecho solo.
- **Resistencia al avance**: la simulación confirmaba lo que esperaba, con el pico de resistencia entre 2,5 y 3 nudos y el paso a planear a partir de unos 3 nudos.
- **Modelo 3D en SolidWorks**:
  - Casco de pared de 1,5 mm, partido en 4 trozos para que cupiera en la impresora 3D (256 mm).
  - Refuerzos interiores en los puntos con más esfuerzo: donde van el mástil, la quilla y el timón.
  - Cajones integrados en la cubierta, para que el casco fuera estanco sin juntas.
- **Quilla, timón y contrapeso**: perfiles aerodinámicos estándar (NACA), como los de un ala de avión. Calculé el volumen del contrapeso para la densidad del plomo, para que pesara exactamente 2 kg.

## Fabricación

Lo que más me gusta del proyecto es la forma de fabricar el casco: **la carcasa de plástico impresa hace a la vez de molde y de estructura interior**. Encima se lamina la fibra de vidrio directamente, así que no hace falta ningún molde aparte y todo el proceso es mucho más rápido.

- **Impresión 3D**: 4 piezas de PETG (unos 4 kg y 72 h de impresión), pegadas con epoxi.
- **Fibra de vidrio**: 2 capas con resina epoxi. Salieron algunas burbujas en la cubierta y las reparé inyectando resina con una jeringa, añadiendo menos de un 10 % de peso.
- **Quilla**: un núcleo de madera de balsa con 5 capas de fibra de vidrio. Con los 2 kg de plomo colgando de la punta solo se dobla unos 5°.
- **Contrapeso de plomo**: lo hice con plomos de submarinismo viejos, fundidos y colados en un molde de arena, y acabados con radial y taladro.
- **Tapa estanca**: un táper de plástico adaptado. Barato, estanco, y aguanta abrirlo y cerrarlo tantas veces como haga falta.

## Pruebas y regata

Antes de la regata probamos el velero con un ventilador, y vi que el motor que tensa la vela no tenía suficiente fuerza. El problema era la **fricción del cordel** en tres puntos; lo arreglé con una polea improvisada y unas piezas redondeadas impresas en 3D.

- Pasamos la **inspección técnica al primer intento**: medidas, peso, adrizamiento y estanqueidad.
- Quedamos **3.º de 12 equipos**. Solo 3 barcos terminaron todas las pruebas.
- Hicimos la **2.ª mejor marca en la prueba de velocidad**: 50 m en 50 s.
- Coste final de **509 €**, un 1,8 % por encima del presupuesto.

## Qué haría diferente

- **Peso**: el velero acabó pesando 5,4 kg, un 25 % más de lo previsto (solo la carcasa de plástico ya pesaba 1,75). Tendría que haber diseñado el casco pensando en ese peso real.
- **Eje del timón**: era de fibra de carbono y se rompió de golpe justo antes de la final. De acero inoxidable, como mucho se habría doblado y habríamos podido seguir.
- **Contrapeso**: era demasiado grueso y frenaba más de lo que había calculado.
- **El viento**: el día de la regata hizo muy poco, y la flota no llegó a planear. Justo donde nuestro casco tenía ventaja.
