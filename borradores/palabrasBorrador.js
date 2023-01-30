const word = 'cuando tuve yo te tuve te mantuve y te di, ya no tengo ni te tengo ni te doy'
// console.log(word.match(/[\,.;:]/))

let arrayWord = word.split(' ')
let arrayAux = arrayWord.slice()
let countObj = {}
let arrayCount = []
let count = 0
for (let i = 0; i < arrayWord.length; i++) {
    if (arrayWord[i].match(/[\,.;:]/)) {
        arrayWord[i] = arrayWord[i].substring(0, arrayWord[i].length - 1)
        console.log(arrayWord)
      }

    console.log(arrayAux)
}
// countObj.match()
console.log(arrayAux)
console.log(arrayWord)
console.log(arrayCount)
console.log(countObj)
const objeto = {
  a:1,
  b:2,
  c:3
}
console.log(objeto.a)
Object.assign(objeto, {d: 4})
console.log(objeto)

//________________________________________//

console.log(contandoPalabras(word))

const regex = /\b(Apple)+\b/g

const fruit = 'Apple, banana, Apple, abcdefgj'

for (const match of fruit.matchAll(regex)) {
    console.log(match)
}

console.log(word.includes('c', 0))

//------------------------------------------------------------------------------//

// let arrayAux = arrayWord.splice()
let arrayConteo = []
let arryProps = []
let objConteo = {}

for (let i = 0; i < arrayWord.length; i++) {
    arrayConteo.push([arrayWord[i], 0])[i]
    objConteo = Object.fromEntries(arrayConteo)
    arryProps = Object.keys(objConteo)
    for (let j = 0; j < arryProps.length; j++) {
      if(arryProps[j] === arrayConteo[i][0]) {
        objConteo[arryProps[j]] += 1  
      }else {
        objConteo[arryProps[j]] = 0 
      }
    }
    // for (pWord in objConteo) {
        //   if(arrayAux[i] === pWord) {
            //     objConteo[pWord]+=1
            //   }    
            // }
}

//__________________________________________//
for (let i = 0; i < arrayWord.length; i++) {
    if (arrayWord[i].match(/[\,.;:]/)) {
        arrayWord[i] = arrayWord[i].substring(0, arrayWord[i].length - 1)
        console.log(arrayWord)
        const arrayAux = arrayWord.slice()
        
    }
}
console.log(arrayWord)

