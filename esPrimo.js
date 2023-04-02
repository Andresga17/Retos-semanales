/*
Reto 3
¿ES UN NUMERO PRIMO?

Escribe un programa que se encargue de comprobar si un
numero es o no primo.
Hecho esto, imprime los numeros primos entre 1 y 100.
*/

// const number = 13

const isPrime = (number) => {
  let arrayCount = [];

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      arrayCount.push(1);
    } else {
      arrayCount.push(0);
    }
  }
  arrayCount;

  if (
    arrayCount.includes(1) ||
    number === 1 ||
    number === 0
  ) {
    return `${number} no es primo`;
  } else {
    return `${number} es primo`;
  }
};

console.log(isPrime(10));

for (let j = 0; j <= 100; j++) {
  if (isPrime(j) === `${j} es primo`) {
    console.log(j);
  }
}

/*----UNA SOLUCION DISTINTA----*/

function isPrimeAlt(number) {
  for (let k = 2; k < number; k++) {
    let flag = number % k != 0; // Es primo

    if (!flag) {
      return `${number} no es primo`;
    } else if (flag) {
      continue;
    }
  }
  return `${number} es primo`;
}

console.log(isPrimeAlt(9));
