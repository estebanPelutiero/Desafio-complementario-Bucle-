// Alumno: Esteban Pelutiero
// Desafio: Bucle, hice un bucle que suma 2 numeros y los muestra en consola.

// -----------------------------------------------------------------------------------------------------------------------

// Primero se declaran las variables y se piden 2 numeros enteros.

// Toma el resultado de la suma de ambos numeros ingresados por el usuario y los guarda en una variable.

/* Luego la lectura del programa entra en el "while" y evalúa si ese resultado es efectivamente un valor de tipo INT, 
si ambos valores son numeros, muestra el resultado de la suma en consola, luego vuelve a pedir 2 numeros y los guarda otra vez en la 
variable "result" y el bucle vuelve a ejecutarse. De no ser asi (el usuario pudo haber ingresado una caracter, string o una
string en blanco), se salta el bucle, y ejecuta los alerts. */

let userNum1 = parseInt(prompt("Ingrese un número entero: "));
let userNum2 = parseInt(prompt("Ingrese un segundo número entero: "));
let result = userNum1 + userNum2;

while (isNaN(result) == false) {
        console.log("La suma de los número ingresados es: " , result);
        userNum1 = parseInt(prompt("Ingrese un número entero: "));
        userNum2 = parseInt(prompt("Ingrese un segundo número entero: "));
        result = userNum1 + userNum2;
}

alert("Ambos valores necesitan ser números enteros para poder realizar la suma.");
alert("Bucle finalizado.");


