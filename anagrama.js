/*
Reto 1
¿ES UN ANAGRAMA?
Escribe una funcion que reciba dos palabras y retorne
verdadero o falso segun sean o no anagramas.
Un anagrama consiste en formar una palabra reordenando TODAS
las letras de otra palabra inicial.
Dos palabras exactamente iguales no son anagrama.
 */

let word1 = 'amor'
let word2 = 'roma'
// console.log(word[4])
function isAnAnagram (word1, word2) {
    let wordArray1 = Array.from(word1).sort()
    let wordArray2 = Array.from(word2).sort()

    for (let i = 0; i < word1.length; i++) {
        if(wordArray1.length === wordArray2.length && wordArray1[i] === wordArray2[i]){
            return `${word1} es un anagrama de ${word2}`
        }else {
            return `${word1} no es un anagrama de ${word2}`
        }
    }
}

console.log(isAnAnagram(word1, word2))