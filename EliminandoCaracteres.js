/**
 * Reto #11
 * ELIMINANDO CARACTERES
 *
 * Enunciado: Crear una funcion que reciba dos cadenas como parametro (str1, str2) e imprima otras dos cadenas
 * como salida (out1, out2).
 * - out1 contendra todos los caracteres que esten presentes en la str1 pero que NO esten presentes en str2.
 * - out2 contendra todos los caracteres que esten presentes en la str2 pero que NO esten presentes en str1.
 *
 */

const saludo = "hola";
saludo.includes();

const deleteCharacters = (str1, str2) => {
  let out1 = "";
  let out2 = "";

  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      out1 += str1[i];
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (!str1.includes(str2[j])) {
      out2 += str2[j];
    }
  }
  return `Caracteres de la primera cadena que no estan en la segunda: ${out1} \n
  Caracteres que estan en la segunda cadena pero no en la primera: ${out2}`;
};

console.log(
  deleteCharacters(
    "soy andres",
    "soy juan"
  )
);
