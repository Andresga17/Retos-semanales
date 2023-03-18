/*
Reto 0
EL FAMOSO FIZZ BUZZ
Escribe un programa que muestre por consola los numeros de 1 a 100 (ambos incluidos
con un salto de linea entre cada impresion).
- Multiplos de 3 por la palabra "fizz"
- Multiplos de 5 por la palabra "buzz"
- Multiplos de 3 y de 5 a la vez por la palabra "fizzbuzz"
*/
let arrayFizzBuzz = [];

for (let i = 1; i <= 100; i++) {
  arrayFizzBuzz.push(i);
  // console.log(i)

  if (arrayFizzBuzz[i - 1] % 3 === 0 && arrayFizzBuzz[i - 1] % 5 === 0) {
    arrayFizzBuzz[i - 1] = "Fizz buzz";
  } else if (arrayFizzBuzz[i - 1] % 5 === 0) {
    arrayFizzBuzz[i - 1] = "Buzz";
  } else if (arrayFizzBuzz[i - 1] % 3 === 0) {
    arrayFizzBuzz[i - 1] = "Fizz";
  }
}
console.log(arrayFizzBuzz);
