/**
 * La coerción en JavaScript es la conversión automática o implícita de valores de un tipo de dato a otro.
 * Esto ocurre cuando JavaScript intenta realizar una operación en la que los tipos de datos no coinciden.
 * La coerción de tipo puede ser útil en algunos casos, pero también puede llevar
 * a resultados inesperados si no se comprende cómo funciona.
 *
 * Ejemplos de coerción implícita:
 * Suma de un número y una cadena: JavaScript convierte el número a una cadena y luego concatena los dos valores.
 * Comparación de un número y un booleano: JavaScript convierte el booleano a un número
 * (true se convierte en 1 y false se convierte en 0) y luego realiza la comparación.
 */

//En este ejemplo, JavaScript realiza una coerción implícita de tipo.
// Cuando se utiliza el operador + con un número y una cadena, JavaScript
// convierte automáticamente el número a una cadena para poder realizar la concatenación.
let numero = 10;
let cadena = "5";

console.log(numero + cadena); // Resultado: "105"


// En este caso, JavaScript convierte el valor booleano verdadero
// a su representación numérica, que es 1, y luego realiza la suma con el número 5.
let verdadero = true;
let numero = 5;

console.log(verdadero + numero); // Resultado: 6

