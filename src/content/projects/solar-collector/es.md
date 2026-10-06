---
title: Colector solar térmico refrigerado por agua
summary: Diseño y cálculo de un colector solar térmico de 1×2 m y de una instalación de 24 kW en Breslavia. El absorbedor y las tuberías son una sola pieza de aluminio moldeada, sin soldaduras, pensada para producción en serie. Cada panel aporta 1,23 kW útiles y se necesitan 20.
context: Solar Energy Conversion Systems, Politechnika Wrocławska · individual
role: Diseño, CAD y cálculo térmico
# duration: pendiente de rellenar
manufacturing: [Fundición de aluminio, Plegado de chapa, Remachado, Juntas de estanqueidad]
materials: [Aluminio, Vidrio, Acero inoxidable, Lana mineral, Recubrimiento de cobre negro]
captions:
  - "El panel cerrado: 1 × 2 m, con las dos salidas roscadas de la tubería"
  - "Sección por el marco y el aislamiento: el vidrio y la placa absorbedora debajo"
  - "Sección por las capas: vidrio, absorbedor, aislamiento y caja"
  - "Absorbedor, junta y colector de distribución, explosionados"
  - "Detalle de los 32 tubos moldeados dentro del absorbedor, la junta y los agujeros del colector"
  - "Colector de distribución de acero inoxidable con la rosca para conectar el panel"
  - "Coeficientes de pérdidas de calor del colector: por la cubierta, las paredes y el fondo"
  - "Instalación de 20 paneles: 4 ramas en paralelo de 5 paneles en serie, de 19 °C a 49 °C"
---

Durante mi semestre en la Politechnika Wrocławska, en la asignatura de Solar Energy Conversion Systems, diseñé un **colector solar térmico** y la instalación completa para unas especificaciones dadas: **24 kW de potencia** calentando agua hasta **49 °C**, del 1 de mayo al 30 de septiembre en Breslavia, con paneles de tamaño fijo de **1 × 2 m**.

Un colector térmico es, por capas: una **cubierta** transparente, una **placa absorbedora** que se calienta con el sol, un **sistema de tuberías** que se lleva el calor con agua, un **aislamiento** que evita que el calor se escape y una **caja** que lo cierra todo.

[[1]]

## Concepto de diseño

En un colector convencional, la placa absorbedora es una chapa y los tubos del agua se le sueldan por debajo. Esta unión es el punto débil: el calor tiene que pasar por la soldadura, que conduce peor y tiene una superficie de contacto pequeña, y soldar 30 tubos por panel es mucha mano de obra.

Mi propuesta fue **unificar el absorbedor y las tuberías en una sola pieza de aluminio moldeada**, con los **32 tubos ya integrados** dentro de la placa. El calor pasa directamente de la superficie al agua, sin soldaduras ni piezas intermedias. A cambio, la pieza se tiene que fabricar con un molde a medida, que es una inversión inicial grande: es un diseño **pensado para producción en serie**, donde el coste del molde se reparte y la reducción de mano de obra abarata cada panel.

[[3d]]

## Componentes y materiales

- **Cubierta: vidrio de 4 mm.** El PMMA es más transparente, pero con el sol se degrada y se enturbia. Preferí el vidrio para tener un panel que no necesitara mantenimiento. Va montado con una junta de goma que evita que el aire entre y salga.
- **Absorbedor: aluminio.** El cobre conduce mejor (400 vs 250 W/mK), pero cuesta casi 4 veces más por kg y la diferencia no lo justificaba. La placa tiene 4 mm en los puntos más delgados.
- **Recubrimiento: cobre negro**, con una absortancia alta (0,85) y una emisividad baja (0,18): absorbe mucho e irradia poco.
- **Colectores de distribución: acero inoxidable.** En cada extremo, un tubo de 25 mm con agujeros que conectan los 32 tubos en paralelo, prensado contra el absorbedor con tornillos y una junta. Los extremos salen de la caja con rosca para conectar otros paneles o un tapón. El acero inoxidable conduce 10 veces menos que el aluminio, lo que aquí es una ventaja: es la pieza que sale al exterior.
- **Aislamiento: lana mineral o de vidrio**, de 48,75 mm bajo el absorbedor y 25 mm en las paredes. Las espumas son más baratas, pero se degradan con el tiempo y con la humedad.
- **Caja: chapa de acero inoxidable de 3 mm plegada**, un proceso barato y fácil de escalar. El marco superior se remacha a la caja y atrapa el vidrio entre las juntas.

[[2, 3]]

[[4-6]]

## Cálculos

Todo el cálculo térmico lo hice a mano, siguiendo el procedimiento estándar para colectores planos:

1. **Radiación**: con el simulador SolarSym encontré el día medio del periodo (20 de agosto) y su pico de radiación, 1.067 W/m².
2. **Orientación**: con la declinación solar, la latitud de Breslavia (51,1°) y el ángulo horario, la **inclinación óptima del panel es de 38,9°**, orientado al sur. Con esta orientación, al panel llegan **1.189 W/m²**.
3. **Radiación absorbida**: teniendo en cuenta la reflexión y la refracción en el vidrio (ley de Snell), su transmitancia y la absortancia del recubrimiento, el absorbedor capta **810 W/m²**.
4. **Pérdidas de calor** por convección y radiación a través de la cubierta, las paredes y el fondo: **8,24 W/m²K**, la mayor parte por la cubierta.
5. **Calor útil**: dimensioné los tubos a partir del caudal y de la pérdida de carga. Por debajo de 10 mm la pérdida de presión se dispara, así que elegí **tubos de 10 mm separados 30 mm**. Como no hay soldadura entre tubo y placa, esa resistencia térmica desaparece del cálculo, que es donde el diseño gana rendimiento.

[[7]]

## Resultados

- **1,23 kW útiles por panel**, con un rendimiento del **68 %**.
- **20 paneles** para llegar a los 24 kW, en 4 ramas en paralelo de 5 paneles en serie. Cada panel calienta el agua 6 °C, de 19 °C (el agua de red en Polonia) a 49 °C.
- Un **diseño de panel completo**, con planos y materiales estándar para todas las piezas excepto el absorbedor.

[[8]]
