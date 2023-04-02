/**
 * Reto #9
 *
 * CODIGO MORSE
 *
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a codigo morse
 * y viceversa.
 * - Debe detectar automaticamente de que tipo se trata y realizar la conversion.
 * - En morse se soporta raya "-", punto ".", un espacio " " entre letras o simbolos
 * y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado sera el mostrado en wikipedia
 */

const alphabet = {
  a: ".- ",
  b: "-... ",
  c: "-.-. ",
  d: "-.. ",
  e: ". ",
  f: "..-. ",
  g: "--. ",
  h: ".... ",
  i: ".. ",
  j: ".--- ",
  k: "-.- ",
  l: ".--- ",
  m: "-- ",
  n: "-. ",
  ñ: "--.-- ",
  o: "--- ",
  p: ".--. ",
  q: "--.- ",
  r: ".-. ",
  s: "... ",
  t: "- ",
  u: "..- ",
  v: "...- ",
  w: ".-- ",
  x: "-..- ",
  y: "-.-- ",
  z: "--.. ",
  " ": " ",
};

//texto a codigo morse
const textToMorseFun = (text) => {
  let textToMorse = "";
  for (letter of text.toLowerCase()) {
    textToMorse += alphabet[letter];
  }
  return textToMorse;
};

console.log(textToMorseFun("SOS"));

//codigo morse a texto

const morseToTextFun = (morseCode) => {
  const characterMorseRegex = new RegExp(
    /[\.\-]{1,5}/g
  );
  const morseCharArray = morseCode.match(
    characterMorseRegex
  );

  let morseToText = "";

  const alphabetArray = Object.entries(alphabet);
  for (let i = 0; i < alphabetArray.length; i++) {
    for (morseCharacter of morseCharArray) {
      if (
        morseCharacter ===
        alphabetArray[i][1].trim()
      ) {
        morseToText += alphabetArray[i][0];
      }
    }
  }
  return morseToText;
};

console.log(
  morseToTextFun(
    ".- -... -.-. -.. . ..-. --. .... .. -.."
  )
);
