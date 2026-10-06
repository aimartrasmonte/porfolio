---
title: Marimba afinada por optimización FEA
summary: Marimba de 15 láminas (C3–C5) que diseñé con un algoritmo propio que afina cada lámina por simulación en ANSYS, y que construí a mano por 50 €. Todas las láminas quedan con menos de un 2 % de error de frecuencia.
context: Proyecto II, ETSEIB · individual
role: Diseño, simulación, ensayo de materiales y construcción
duration: 1 cuatrimestre (2023) · ~120 h
manufacturing: [Sierra de cinta, Lijadora de banda, Sierra de mesa, Taladro de columna]
materials: [Madera de coral (Pterocarpus soyauxii), PVC, Madera de palé reciclada, Aceite de linaza]
captions: []
---

En la asignatura de Proyecto II teníamos que diseñar y construir un instrumento de percusión afinado en un cuatrimestre y gastando lo mínimo posible. Yo hice una **marimba de 15 láminas en Do mayor (C3–C5)**, con sus tubos resonadores y la estructura.

La gracia de una marimba es que no basta con que cada lámina dé la nota correcta. Además, el **primer armónico tiene que ser exactamente 4 veces la frecuencia fundamental** (dos octavas por encima); si no, la lámina suena rara aunque la nota sea buena. Y todo eso depende solo de la forma de la lámina y de la madera.

## Elegir y medir la madera

Las marimbas profesionales se hacen de palisandro, pero era caro y no lo encontraba en ningún sitio. Recorrí 8 carpinterías y, hablando con carpinteros con experiencia, acabé eligiendo **madera de coral** (*Pterocarpus soyauxii*): más barata y suficientemente dura y rígida.

El problema es que no encontraba datos fiables, y sin ellos no podía simular nada. Así que los medí yo:

- **Densidad**: 614,6 kg/m³, pesando un listón de medidas conocidas.
- **Rigidez (módulo de Young)**: 8,37 GPa, con un **ensayo de flexión** en el laboratorio. Es el doble que muchas maderas comunes, que van de 2 a 5 GPa.

## Afinar las láminas en el ordenador

Las láminas de marimba tienen un **arco tallado por debajo**: quitando material del centro la nota baja, y jugando con la longitud del arco se ajusta el armónico. Definí la lámina con 6 parámetros; cuatro se fijan para cada nota (longitud, espesor, anchura, extremos del arco) y **dos se ajustan para afinarla**: la longitud del arco y el espesor en el centro.

Para encontrar esos dos valores para cada nota programé un **algoritmo de optimización en ANSYS APDL**:

- Genera la lámina a partir de los parámetros y calcula sus frecuencias con un **análisis modal por elementos finitos**, dejando la pieza libre, tal como colgará de verdad del cordel.
- Primero adelgaza el centro hasta que la nota fundamental se acerca al objetivo.
- Después alarga el arco para bajar el armónico hasta la relación 4:1. Como eso también baja un poco la nota, el algoritmo la va reajustando.
- En cada paso corrige más o menos según lo lejos que esté, y se detiene cuando los dos errores son **menores del 2 %**.

Las 15 láminas convergen en **12–50 iteraciones (unas 20 de media)**, y comprobé cada resultado con una segunda versión del modelo en 2D.

## Construirla

Toda la construcción la hice yo, en el Laboratorio de Maquetas de la ETSAB.

- **Cortar sin desperdiciar madera**: las 15 láminas tenían que salir de un solo bloque. Con un optimizador de cortes en MATLAB encontré la combinación que las encajaba en **solo 7 listones**.
- **Arcos**: primero un corte aproximado con sierra de cinta, dejando margen, y después a la lijadora de banda hasta la medida.
- **Afinación final**: la madera no es igual en todas direcciones, así que la pieza real nunca suena exactamente como la simulación. Fui lijando cada lámina mientras **medía las frecuencias con un analizador de espectro**, hasta dejarla afinada.
- **Puntos de sujeción**: hay dos puntos de cada lámina que no vibran (los nodos), y es por donde hay que colgarla para que el cordel no apague el sonido. Por la misma irregularidad de la madera, no coincidían con los teóricos. Los encontré poniendo sal sobre la lámina y golpeándola: la sal salta donde vibra y se acumula en los nodos.
- **Acabado**: aceite de linaza y no barniz, porque una capa dura cambiaría la rigidez y desafinaría la lámina.
- **Resonadores**: tubos de PVC de 50 mm, tapados por abajo y cortados a la longitud que amplifica la nota de cada lámina.
- **Estructura**: un marco trapezoidal hecho con la madera de un palé reciclado, que sigue la línea de los nodos. Las láminas cuelgan de un cordel y no tocan el marco.

## Resultado

- **15 láminas afinadas**, tanto en la nota como en el armónico, con un resonador para cada una.
- **50 € en total**: 35 € de madera, 10 € de tubos y 5 € de ferretería. El marco no costó nada.
- **Unas 120 h** de trabajo, de las cuales 20 h fueron para programar el algoritmo y 26 h en el taller.

## Qué haría diferente

- **Simular la madera como lo que es**: la modelé como si fuera igual en todas direcciones, y esa es la principal razón por la que la simulación y la realidad no cuadraban del todo. Si la ensayara en las tres direcciones, me ahorraría buena parte de la afinación a mano.
- **Materiales más sostenibles**: la madera tropical y el PVC eran lo que permitía el presupuesto, pero tienen un impacto ambiental alto. Probaría maderas locales o tubos de aluminio.
