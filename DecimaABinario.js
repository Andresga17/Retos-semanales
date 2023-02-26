/**
 * Reto #8
 * 
 * DECIMAL A BINARIO
 * 
 * Enunciado: Crea un programa que se encargue de transformar un numero decimal a binario sin utilizar
 * funciones propias del lenguaje que lo hagan directamente
 * 
 */


const numberDecimal = 725

const decimalToBinn = (numberDecimal) => {
    
    let numberBin = []
    numberBin.unshift(Math.floor(numberDecimal % 2))

    while (numberDecimal >= 2) {
    
        if (numberDecimal === 1) {
            numberBin.push(numberDecimal)
        }else {
            numberDecimal = Math.floor(numberDecimal / 2)
            numberBin.unshift(numberDecimal % 2)
        }
    }

    return numberBin.toString()
}


console.log(decimalToBinn(numberDecimal))