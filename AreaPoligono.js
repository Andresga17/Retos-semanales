/*
Reto 4

AREA DE UN POLIGONO

Crea UNA UNICA FUNCION que sea capaz de calcular y
retornar el area de un poligono.

-La funcion recibira por parametro solo un poligono a la vez.
-Los poligonos soportados serán triangulo, cuadrado y rectangulo.
-Imprime el calculo del area de un poligono de cada tipo.
*/

function area(alto, ancho) {
  return !ancho ? alto * alto : alto * ancho;
}

function triangulo(area) {
  return area(3, 2) / 2;
}

function cuadrado(area) {
  return area(4);
}

function rectangulo(area) {
  return area(2, 7);
}

function poligonArea(poligon) {
  if (poligon === "triangulo") {
    return triangulo(area);
  } else if (poligon === "cuadrado") {
    return cuadrado(area);
  } else if (poligon === "rectangulo") {
    return rectangulo(area);
  }
}

console.log(poligonArea("cuadrado"));
