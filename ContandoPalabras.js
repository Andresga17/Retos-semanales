/** 
 * Reto #7
 * CONTANDO PALABRAS
 * 
 * Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final
 * de todas ellas
 * -Los signos de puntuacion no forman parte de la palabra.
 * -Una palabra es la misma aunque aparezca en mayusculas y minusculas.
 * -no se pueden utilizar funciones propias del lenguaje que lo resuelvan automaticamente 
*/

const word = 'hoy la palabra es parabola y vuela como las gargolas la palabra es la bala directa a vuestras mandibulas la plaga que se propaga como el ebola la flecha colocada en el arco de legolas no me llameis hijo prodigo pues soy el hijo prodigio los hacker buscan mi codigo jamas daran con el valido en este mundo tan rapido vosotros cojos e invalidos flojos y palidos de materia gris'


//------------------------------------------------------------------------------------//
const contandoPalabras = (word) => {
    let arrayWord = word.toLowerCase().split(' ')
    let count = 1
    let arraySorted = arrayWord.sort()
    let wordP = arraySorted[0]
    let words = []
    let arrayCount = []
    const response = []
    
    for (let i = 0; i < arrayWord.length; i++) {
        if (arrayWord[i].match(/[\,.;:]/)) {
            arrayWord[i] = arrayWord[i].substring(0, arrayWord[i].length - 1)
        }
    }

    for(let j = 1; j < arraySorted.length; j++) {
        if ( wordP === arraySorted[j]) {
          count = count + 1
        }else {
          words.push(wordP)
          arrayCount.push(count)
          wordP = arraySorted[j]
          count = 1
        }
        // return `La palabra ${words[j]} se repite ${arrayCount[j] === 1 ? `${arrayCount[j]} vez` : `${arrayCount[j]} veces`}`
    }
    
    for (let k = 0; k < words.length; k++) {
        response.push([words[k], arrayCount[k]])
    }
    return Object.fromEntries(response)
}
console.log(contandoPalabras(word))
//-----------------------------------------------------------------------------------//



