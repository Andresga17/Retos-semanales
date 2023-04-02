/**
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 *
 * Enunciado: Crea un programa que comprueba si los parentesis, llaves y corchetes de
 * una expresion estan equilibrados.
 *  - Equilibrado siginifica que estos delimitadores se abren y cierran en orden y de forma correcta.
 *  - Parentesis, llaves y corchetes son igual de prioritarios. No hay uno mas importante que otro.
 *  - Expresion balanceada: { [ a * ( c + d ) - 5 ] }
 *  - Expresion no balanceada: { a * ( c + d )] - 5 }
 */
const expression = "{ a * ( c + d )((ABC) - 5 }";

const verifyExpression = (expression) => {
  const open = new RegExp(/[\{\(\[]/g);
  const close = new RegExp(/[\}\)\]]/g);

  if (
    expression.match(open).length ===
    expression.match(close).length
  ) {
    return "La expresion esta balanceada";
  } else {
    return "La expresion no esta balanceada";
  }
};

console.log(verifyExpression(expression));
