/*
Reto 2
LA SUCESION DE FIBONACCI

Escribe un programa los 50 primero numeros de la 
sucesion de fibonacci empezando en 0.
*/

let firstElement = 1
let secondElement = 0
let sucesion = []

for (let i = 0; i < 50; i++) {

    
    let sum = firstElement + secondElement

    firstElement = secondElement
    secondElement = sum
    sucesion.push(firstElement)
}

console.log(sucesion)
