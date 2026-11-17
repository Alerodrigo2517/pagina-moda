# Historia de la moda

Sitio estático con HTML5, CSS3 y JavaScript nativo. No utiliza frameworks ni dependencias de compilación.

## Estado de implementación

- Portada y línea de tiempo de escritorio estructuradas a partir de la página de Figma **Pages 2 09.29 am**.
- Navegación entre portada y línea de tiempo.
- Recorrido horizontal por las once eras y navegación con teclado.
- Apertura de diálogo por época y vista de detalle inicial.
- Aviso de indisponibilidad para celulares y tablets (pantallas de hasta 900 px).

## Estructura

- `index.html`: portada, línea de tiempo y contenedores de diálogo/detalle.
- `css/styles.css`: estilos de escritorio y bloqueo para pantallas pequeñas.
- `js/main.js`: datos de épocas, navegación y eventos.

## Pendiente para fidelidad visual

La geometría y los contenidos de texto de las pantallas principales se tomaron de la estructura de Figma. Aún faltan los recursos visuales originales (fondos, personajes, imágenes de época y vectores), así como la implementación completa de los modales y ampliaciones de cada categoría. Las siluetas actuales son placeholders de maquetación y no sustituyen a los personajes originales. No publicar como versión final hasta incorporar esos recursos y validar cada pantalla contra Figma.
