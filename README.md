# Spotify

Este proyecto es realizado con el fin de introducirse en las tecnologías de desarrollo web: HTML 5, CSS 4 y Javascript (ES8). Como también en el uso de librerías como React.
Para este fin se decide trabajar en una aplicación web de características similares a la  conocida Spotify.

Funcionalidades:
  - Precarga de información: playlists, listas de amigos (feeds), géneros.
  - Búsqueda de albums (Reload, etc.), artistas (Metallica, etc.)

**A mejorar**:
  - Layout, sitio responsive.

  - Géneros deberían cargarse al hacer click en ‘Browse’

  - Búsquedas anidadas, donde se requiere mostrar por ejemplo, artistas de un album o canciones junto a sus artistas y el álbum al que pertenecen. No fue realizado por no entender por completo el manejo de promesas.
    Revisar /javascript / load_data.js / fetchGetIndexed(albumName)

  - Carga de canciones al reproductor. No realizado por mal manejo de promesas. Si funciona de manera local.
    Revisar /javascript / load_data.js / fetchGetIndexed(albumName)

  - Integracion con React, carece de funcionalidades que si andan en el otro formato.

**Faltante**:
  - Creación de playlist, POST a la API


La organización del código esta dada en las carpetas ‘html’, ‘css’ y ‘javascript’.

Dentro de la carpeta html se encuentra el archivo ‘coverpage.html’ haciendo de ‘index’ y un bosquejo de lo que sería la ventana modal para ingreso de ‘playlists’. La funcionalidad de ‘search_results.html’ fue integrada a coverpage.html

**Contenido carpeta /javascript/**

data_hanlder.js : 
  - objeto urlHandler encargado de disponer las urls a utilizar.
  - funcion nameCapitalized. Recibe un string dejando su primer caracter en mayúscula.

element_handler.js :
  - Dispone de funciones para crear elementos HTML e integrar los mismos (append).

**load_data.js** :
  - Funciones fetchGet…() se encargan de traer la información solicitada desde la API. Utilizadas para precargar playlists, listas de amigos, géneros. Como también para traer listados de canciones.

**search_results.js** :
  - Funcion makeSearch(), utilizada al hacer click en boton de busqueda. Llama al resto de las funciones de búsqueda pasandoles el mismo parámetro string para traer desde la API cualquier álbum o artista que su nombre corresponda al string pasado.
