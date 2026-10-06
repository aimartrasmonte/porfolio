---
title: Marimba afinada por optimización FEA
summary: Marimba de 15 láminas (C3–C5) que diseñé con un algoritmo propio que afina cada lámina por simulación en ANSYS, y que construí a mano por 50 €. Todas las láminas quedan con menos de un 2 % de error de frecuencia.
context: Projecte II, ETSEIB · individual
role: Diseño, simulación, ensayo de materiales y construcción
duration: 1 cuatrimestre (2023) · ~120 h
manufacturing: [Sierra de cinta, Lijadora de banda, Sierra de mesa, Taladro de columna]
materials: [Madera de padauk (Pterocarpus soyauxii), PVC, Madera de palé reciclada, Aceite de linaza]
captions:
  - "Los tres primeros modos de vibración de una lámina, con los nodos (puntos quietos) y los antinodos"
  - "Ensayo de flexión a tres puntos de un listón de padauk para medir su módulo de Young"
  - "Esquema paramétrico de la lámina: 'd' y 'e' son los dos parámetros que ajusta el algoritmo"
  - "Las 15 láminas cortadas de los 7 listones de padauk; las de arriba ya tienen el arco cortado"
  - "Cortando el arco de una lámina en la sierra de cinta"
  - "Lijando el arco hasta la medida en la lijadora de banda"
  - "Buscando los nodos: la sal salta donde la lámina vibra y se acumula donde no"
  - "Las láminas acabadas con aceite de linaza"
  - "Vista por debajo: los arcos de las láminas, de la más grave a la más aguda"
  - "La marimba terminada, con los resonadores de PVC"
  - "La marimba terminada, vista desde arriba"
---

Esta marimba es fruto de la asignatura Projecte II, en la que teníamos que diseñar y construir un idiófono (un instrumento que genera notas con la vibración de su propio cuerpo) en un cuatrimestre y con un presupuesto mínimo. Mientras la mayoría de alumnos hicieron xilófonos de cucharas, yo hice una **marimba de dos octavas (15 láminas)**, con tubos resonadores y arpa.

La gracia de una marimba es que no basta con que cada lámina vibre con la nota correcta. El **primer armónico (segundo modo libre de vibración)** tiene que vibrar a exactamente **4 veces la frecuencia fundamental (primer modo libre de vibración)**, dos octavas por encima; si no, la lámina suena rara aunque la fundamental sea correcta. La frecuencia de los modos de vibración depende solo de la forma de la lámina y de su material.

[[1]]

## Material y propiedades

Las marimbas profesionales se hacen de palisandro, pero es una madera cara y difícil de encontrar. Hablando con carpinteros con experiencia, acabé eligiendo **padauk** (palo coral): más barato y lo bastante rígido para dar un sonido bonito y aguantar la vibración.

Como no tenía datos fiables de las propiedades de la madera, las medí yo mismo:

- **Densidad**: 614,6 kg/m³, pesando un listón de medidas conocidas.
- **Rigidez (módulo de Young)**: 8,37 GPa, con un **ensayo de flexión** en el laboratorio. Es el doble que muchas maderas comunes, que van de 2 a 5 GPa.

[[2]]

## Geometría mediante FEA modal iterativo

Las láminas de marimba tienen un **arco tallado por debajo**: quitando material del centro se modifica la frecuencia del primer modo, y jugando con la longitud del arco se ajusta el armónico. Para encontrar la geometría que afinara todas las láminas, definí la lámina con 6 parámetros: cuatro fijos según la lámina (longitud, grosor, anchura y radio del arco) y **dos ajustables para afinarla**: la longitud del arco y el grosor en el centro.

[[3]]

Para encontrar esos dos valores para cada nota programé un **algoritmo de optimización en ANSYS APDL**:

- Genera la lámina a partir de los parámetros y calcula sus frecuencias con un **análisis modal por elementos finitos 2D**, dejando la pieza libre, tal como colgará de verdad del cordel.
- Primero adelgaza el centro hasta que la nota fundamental se acerca al objetivo.
- Después alarga el arco para bajar el armónico hasta la relación 4:1. Como eso también baja un poco la fundamental, el algoritmo va reajustando el grosor.
- En cada paso corrige más o menos según lo lejos que esté (Newton-Raphson), y se detiene cuando los dos errores son **menores del 2 %**.

Las 15 láminas convergen en **12–50 iteraciones (unas 20 de media)**, y comprobé cada resultado con una segunda versión del modelo en 3D.

## Construirla

Toda la construcción la hice en el Laboratorio de Maquetas de la ETSAB.

- **Cortar sin desperdiciar madera**: las 15 láminas tenían que salir de un solo bloque. Con un optimizador de cortes en MATLAB encontré la combinación que las encajaba en **solo 7 listones**.
- **Arcos**: primero un corte aproximado con la sierra de cinta, dejando margen, y después a la lijadora de banda hasta la medida.
- **Afinación final**: la madera no es igual en todas direcciones, así que la pieza real nunca suena exactamente como la simulación. Fui lijando cada lámina mientras **medía las frecuencias con un analizador de espectro**, hasta dejarla afinada.
- **Puntos de sujeción**: cada lámina tiene dos puntos que no vibran (los nodos), y es por donde hay que colgarla para que el cordel no apague el sonido. Por la misma irregularidad de la madera, no coincidían con los teóricos. Los encontré **poniendo sal sobre la lámina y golpeándola**: la sal salta donde vibra y se acumula en los nodos.
- **Acabado**: aceite de linaza y no barniz, porque una capa dura cambiaría la rigidez y desafinaría la lámina.
- **Resonadores**: tubos de PVC de 50 mm, tapados por abajo y cortados a la longitud que amplifica la nota de cada lámina.
- **Estructura**: un marco trapezoidal hecho con la madera de un palé reciclado, que sigue la línea de los nodos. Las láminas cuelgan de un cordel y no tocan el marco.

[[4-9]]

## Resultado

- **15 láminas afinadas**, tanto en la nota como en el armónico, con un resonador para cada una.
- **50 € en total**: 35 € de madera, 10 € de tubos y 5 € de ferretería. El marco no costó nada.
- **Unas 120 h** de trabajo, de las cuales 20 h fueron para programar el algoritmo y 26 h en el taller.

[[10-11]]
