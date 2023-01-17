/*
 *Reto #6
 
 INVIRTIENDO CADENAS

 Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias
 del lenguaje que lo hagan de forma automatica.

 -Si se pasa "Hola mundo" retornara "odnum aloH"
 */

const palabra = "soy una frase al reves"

const reverseString = (string) => {
    let strReverse = ""
    for (let i = string.length - 1; i >= 0; i--) {
        strReverse += string[i]
    }
    return strReverse
}

console.log(reverseString(palabra))