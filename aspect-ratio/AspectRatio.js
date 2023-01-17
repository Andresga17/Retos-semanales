/*
Reto #5
ASPECT RATIO DE UNA IMAGEN

Crea un programa que se encargue de calcular el aspect ratio de una imagen a partir de una url.
Por ratio hacemor referencia por ejemplo a los 16:9 de una imagen de 1920x1080px.
*/

// console.log(document.getElementsByTagName('img'))

// const foto = document.getElementById("foto")
// console.log(document.images)

const url = new URL("https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png")
// console.log(window.webkitURL.createObjectURL("https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png"))
// const foto = document.getElementById('imagen')
// console.log(foto)

// const foto = document.getElementsByClassName('imagen')
// console.log(foto[0].childNodes())

console.log(typeof(url))

for (element in url) {
    console.log(element)
}



function display ( file ) {
    if ( window.webkitURL ) {
       return window.webkitURL.createObjectURL( file );
    } else if ( window.URL && window.URL.createObjectURL ) {
       return window.URL.display( file );
    } else {
    return null;
    }
 }

 display(url)