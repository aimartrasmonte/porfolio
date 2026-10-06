---
title: Reductor compacto de tornillo sinfín
summary: Anteproyecto de un reductor de tornillo sinfín i = 40 para acoplar un motor eléctrico a máquinas lentas, de 1.400 a 35 min⁻¹ y 395 N·m a la salida. Carcasa partida de fundición nodular, salida orientable a derecha o izquierda y un diseño pensado para fabricar 6.000 unidades en 3 años.
context: Diseño Mecánico, ETSEIB · individual
role: Dimensionado, CAD, planos y cálculos de comprobación
duration: 1 cuatrimestre (otoño 2025)
manufacturing:
  [Fundición en molde de arena, Forja con matrices, Mecanizado, Temple y revenido, Corte láser]
materials: [Fundición nodular GJS 450-12, Bronce fosforoso CuSn11P, Acero 16MnCr5, Acero C45, Acero C25, NBR]
captions:
  - "El reductor desde atrás, con la tapa portarrodamientos del eje de salida"
  - "El engranaje: corona de bronce atornillada al árbol de salida y tornillo sinfín con sus rodamientos"
  - "Vista explosionada del reductor"
  - "Conjunto corona explosionado: brida de salida, rodamientos, árbol, corona de bronce y tapa"
  - "Conjunto sinfín explosionado: brida de entrada, KM y MB, rodamientos de contacto angular y rígido"
  - "Carcasa montada, con los tapones de aceite y el visor"
  - "Carcasa inferior: la junta de perfil circular a medida y los alojamientos de los rodamientos"
  - "Montaje final: las dos carcasas se cierran alrededor de la corona"
  - "Diagrama de cuerpo libre del árbol de salida, para calcular las reacciones en los rodamientos"
  - "Plano de montaje, con las secciones y la lista de 33 componentes"
  - "Plano de la carcasa inferior, de fundición nodular"
  - "Plano del árbol de salida"
---

En la asignatura de Diseño Mecánico de la ETSEIB teníamos que hacer el **anteproyecto completo de un reductor de tornillo sinfín**: el dimensionado, el diseño de todas las piezas, los planos, los cálculos de comprobación y las instrucciones de montaje y mantenimiento.

El encargo era un reductor para acoplar un **motor eléctrico** a máquinas que necesitan **35 min⁻¹ y 300–400 N·m**, con bridas estándar en la entrada y en la salida. El motor cuelga directamente del reductor, el eje de entrada queda vertical en la parte de abajo y, aun así, no puede perder aceite. El cliente preveía **6.000 unidades en 3 años**, con una vida de **10.000 horas** a plena carga.

[[1]]

## Dimensionado

Partiendo de una distancia entre ejes de 112 mm, el único módulo normalizado que dejaba el sinfín dentro de las proporciones recomendadas era **m = 4,5 mm**. A partir de ahí sale toda la geometría: un **sinfín de una entrada** y una **corona de 40 dientes** (180 mm de diámetro primitivo), que dan la relación **i = 40**: de 1.400 min⁻¹ y 18 N·m en la entrada a **35 min⁻¹ y 395 N·m** en la salida.

El rendimiento es del **54 %**. Es bajo, pero es el precio de los reductores de tornillo sinfín: a cambio, hacen una reducción muy grande en una sola etapa y en muy poco espacio.

Los árboles se dimensionaron a torsión: los ejes interiores de 16 y 42 mm de las bridas del motor y de la máquina, y los árboles huecos del reductor (20 y 55 mm) con el mismo momento resistente.

[[2]]

## Concepto de diseño

Con 8 unidades por día laborable, ningún taller tendría una máquina dedicada solo al reductor. Por eso todas las piezas se fabrican con **procesos genéricos**, y solo se añaden moldes, matrices y utillajes de montaje, que sí se amortizan en 6.000 unidades.

La decisión clave fue hacer una **carcasa partida por el eje de salida**:

- **Más compacto**: no hacen falta tapas grandes para meter la corona.
- **Alineación rápida**: la corona se coloca sobre la carcasa inferior con todo el mecanismo a la vista. La alineación se comprueba a ojo y se ajusta añadiendo o quitando galgas de 0,25 mm.
- **Salida reversible**: las dos mitades son simétricas. Intercambiando la brida de salida por la tapa portarrodamientos, la salida queda a derecha o a izquierda, según lo que necesite cada cliente.

[[3-5]]

El inconveniente es la **estanqueidad**: los 4 puntos donde se encuentran las dos carcasas con la brida y la tapa son difíciles de sellar. Como quedan muy por encima del nivel del aceite y solo reciben salpicaduras, las pérdidas son despreciables. Por eso el reductor se tiene que transportar y vender en seco.

[[3d]]

## Piezas y materiales

- **Carcasas**: **fundición nodular GJS 450-12**, en molde de arena, y mecanizadas solo en las caras de contacto y en los agujeros roscados. Las juntas entre carcasas son de NBR con un perfil normalizado, pero hechas a medida para seguir la forma de la pieza.
- **Sinfín**: mecanizado directamente sobre el árbol de entrada, en una sola pieza de **acero de cementación 16MnCr5**, preforjado y torneado. Después se le hace un temple y revenido hasta 50 HRC para que no se desgaste.
- **Corona**: de **bronce fosforoso CuSn11P**, sin tratamiento térmico. Interesa que sea blanda para que el desgaste se concentre en ella y no en el sinfín, que es más caro y crítico. Va montada en el árbol de salida por interferencia y atornillada con 8 tornillos.
- **Árbol de salida**: **acero C45** forjado, normalizado y mecanizado.
- **Bridas y tapa**: **acero C25**, con menos carbono, más tenaz para cargas estáticas.
- **Comerciales**: rodamientos FAG, retenes SKF, juntas tóricas, tapones de aceite y visor. En las uniones roscadas a la carcasa usé **arandelas Nord-Lock** en lugar de fijador de roscas, para que las vibraciones no aflojen los tornillos y se pueda abrir el reductor para su mantenimiento.

[[6-8]]

## Cálculos de comprobación

Con las fuerzas de contacto entre el sinfín y la corona (830 N tangencial, 1.630 N radial y 4.400 N axial), resolví el equilibrio del árbol de salida para obtener las reacciones en cada rodamiento. Los rodamientos de contacto angular FAG 7212-B se comprobaron según la **ISO 281**, y la vida más desfavorable es de **más de 700.000 horas**, muy por encima de las 10.000 que pide el cliente.

[[9]]

## Resultados

- **Anteproyecto completo**: memoria, **planos** de montaje y de las piezas principales con tolerancias y acabados, y especificaciones de todos los componentes comerciales.
- **Instrucciones de montaje** paso a paso, con los pares de apriete de cada una de las 5 uniones atornilladas.
- **Plan de lubricación y mantenimiento**: aceite ISO VG 320, unos 730 ml, e intervalos de revisión y de cambio de aceite.

[[10-12]]
