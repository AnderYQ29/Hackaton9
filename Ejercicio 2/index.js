/*2. Funciones anónimas y flecha:
	- Crea una función anónima que reciba un número y devuelva su cuadrado.
	- Convierte esa función en una función flecha.*/

    var cuadrado = function (numero) {
        return numero * numero
    }
    console.log("Funciones anónimas");
    console.log("El cuadrado de 7 es: ",cuadrado(7));
    console.log("El cuadrado de 5 es: ",cuadrado(5));

    console.log("-------------------------------------------");

    let cuadradoFlecha = (numero) => numero * numero;

    console.log("Funciones flecha");
    console.log("El cuadrado de 7 es: ",cuadrado(7));
    console.log("El cuadrado de 5 es: ",cuadrado(5));
