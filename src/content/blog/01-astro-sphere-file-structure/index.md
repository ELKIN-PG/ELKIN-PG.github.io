---
title: "Fondo transparente para Helix editor"
summary: "Helix no se adapta al difuminado de tu terminal? este es el post que necesitas."
date: "Jan 17 2025"
draft: false
tags:
- Helix

---

Si, una de mis intenciones en un principio, era que el fondo se asociara con la intensidad(difuminación) y transparencia que tenia mi emulador, en este caso kitty, que anteriormente lo habia configurado con `background_blur 14` [ColorScheme-BackgroundBlur](https://sw.kovidgoyal.net/kitty/conf/#color-scheme).

Bien, tenía una opción, de la que intenté en un principio, y esa se trataba de heredar uno de los temas que ya existen en helix, y asignarle un atributo que cancelaba el color de fondo, es decir, lo nulleaba para que helix dispusiera el del emulador, esto fue lo que hice en cuestión.

*Cabe aclarar que al momento de crear nuevos temas en helix, hay que crear un directorio /themes en esta direccion '.config/helix/themes'* , y debe ser un archivo con terminación .toml ,para que asi pueda cargar correctamente.

En el caso de la prueba, creé un archivo **xeotheme.toml**, y herdé de un tema al azar, después de eso, agregué el atributo que nulleaba el fondo propio de helix.

```toml
inherits = "acme" #activa la herencia
"ui.background " = {} #Al dejar este atributo en nulo, helix permite que la terminal
#disponga de un fondo alternatuivo, o una configruacion de fondo alternativo.
"ui.selection" = { bg = "gray" } 
"ui.statusline" = { bg = "none" }
```

Ahora, te proporciono unas explicaciones breves de los otros astributos que aparencen en la nueva configuracion.

**ui.selection**, *bg* indica el color del backgroun, en este caso, seleccionon un color basico, directo si se le puede decir, un gray, gris, basico, facil.
![ui.selection](src/content/blog/01-astro-sphere-file-structure/SeleccionHelix.png)

**ui.statusline** que en este caso, el *bg* está en none, es decir, es transparente, nulo.
![ui.statusline](src/content/blog/01-astro-sphere-file-structure/BarraHelix.png)
Y ese, es el status line.

Ya cuando finalizas todo, lo guardas y acceder al apartado de comandos rapidos de helix, e ingresas **theme xeotheme** y ya está.

![Resultado](src/content/blog/01-astro-sphere-file-structure/FondoFinalHelix.png)

Referencias a la documentacion, o problemas similares presentados.

https://docs.helix-editor.com/themes.html#inheritance *Documentación de los temas personalizables para helix, explica la herencia*

https://github.com/helix-editor/helix/issues/2247 *Y este, uno de los errores que se habia presentado , pero en base a los desarrolladores de helix, solo pasa cuando se ingresa un atrobuto erroneo, no reconocido, o con problemas en la sintaxis*

Bueno, y este es mi articulo explicando este problema, al final ha quedado asi oa interfaz de helix con su fondo transparente y kitty al mismo tiempo 


