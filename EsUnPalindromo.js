/**
 * Reto #12
 * ¿ES UN PALINDROMO?
 *
 * Enunciado: Escribe una funcion que reciba un texto y retorne verdadero o falso
 * segun sean o no palindromos.
 * Un palindromo es una palabra o expresion que es igual si se lee de izquierda a
 * derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuacion y tildes.
 * Ejemplo: Ana lleva al oso la avellana
 *
 */

const str = "Ana lleva al oso la avellana";
const bigPalindrome =
  "Amor azul Ramera, de todo te di. Mariposa colosal, si, yo de todo te di. Poda la rosa, Venus. El atomo como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, piramide. Todo te dare: mar, luz, aroma.";

const isPalindrome = (str) => {
  const letra = new RegExp(
    /[a-z\u00C0-\u017F]/giu
  );

  const strArray = str.match(letra);

  const strReverse = strArray.slice().reverse();

  let arrayFlag = [];
  for (let i = 0; i < strArray.length; i++) {
    strArray[i].toLocaleLowerCase() ===
    strReverse[i].toLocaleLowerCase()
      ? arrayFlag.push(1)
      : arrayFlag.push(0);
  }

  return arrayFlag.includes(0)
    ? `"${str}" no es un palindromo`
    : `"${str}" es un palindromo`;
};

console.log(isPalindrome(str));
console.log(isPalindrome("reconocer"));
console.log(isPalindrome("anilina"));
console.log(isPalindrome(bigPalindrome));

/**
 * Amor azul Ramera, de todo te di. Mariposa colosal, sí, yo de todo te di. Poda la rosa, Venus. El átomo como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, pirámide. Todo te daré: mar, luz, aroma.
 */
