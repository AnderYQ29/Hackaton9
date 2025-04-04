/*5. Manipulación de Strings:  
     - Escribe un programa que reciba una frase y:  
     - La convierta en mayúsculas y minúsculas.  
     - Cuente cuántas palabras tiene.  
     - Reemplace una palabra específica por otra. */

    const frase = prompt("Escribe una frase:");

    let mayúsculas = frase.toUpperCase();
    let minúsculas = frase.toLowerCase();

    let palabras = frase.trim().split(/\s+/);
    let cantidadPalabras = palabras.length;

    let palabrasAReemplazar = prompt ("¿Que palabra deseas reemplazar?");
    let nuevaPalabra = prompt("¿Por cual palabra deseas reemplazarla?");
    let fraseReemplazada = frase.replaceAll(palabrasAReemplazar, nuevaPalabra);

    console.log("Frase en mayúsculas: " + mayúsculas);
    console.log("Frase en minúsculas: " + minúsculas);
    console.log("Cantidad de palabras: " + cantidadPalabras);
    console.log("Frase reemplazada: " + fraseReemplazada);

     