# List — sitio de presentación

Página estática para presentar List. Está construida con HTML, CSS y JavaScript puro y puede publicarse con GitHub Pages.

## Archivos

- `index.html`: contenido y estructura de la página.
- `css/style.css`: diseño responsive, colores, tarjetas y animaciones.
- `js/main.js`: menú móvil, apariciones al desplazarse, año automático y enlace de WhatsApp.
- `assets/`: carpeta para agregar el logo y capturas reales de la aplicación.

## Configurar WhatsApp

Abrí `js/main.js` y editá:

```js
const LIST_CONFIG = {
  whatsapp: "549XXXXXXXXXX",
  whatsappMessage: "Hola, quiero conocer la aplicación List y hacer una consulta."
};
```

Reemplazá `549XXXXXXXXXX` por el número real con código de país, sin `+`, espacios ni guiones. Para un número argentino suele usarse `54` + `9` + característica y número.

## Probar localmente

Abrí `index.html` en tu navegador. La página no necesita servidor ni compilación. La tipografía se carga desde Google Fonts cuando hay conexión; si no hay conexión, se usan fuentes alternativas del sistema.

## Publicar en GitHub Pages

1. Creá un repositorio en GitHub, por ejemplo `list-web`.
2. Subí `index.html`, `css/`, `js/`, `assets/` y `README.md` a la raíz del repositorio.
3. En GitHub, entrá en **Settings → Pages**.
4. En la sección de publicación, elegí **Deploy from a branch**, seleccioná `main` y la carpeta `/ (root)`.
5. Guardá y esperá a que GitHub Pages publique el sitio.

## Antes de publicar

- Configurá el número real de WhatsApp.
- Agregá una captura real de List si querés reforzar la presentación visual.
- Revisá que todas las descripciones coincidan con la versión actual de la aplicación.

La página promocional no recopila formularios ni guarda datos de visitantes. Los enlaces de contacto abren WhatsApp.
