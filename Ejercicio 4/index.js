/*4. Uso de forEach y filter:  
   - Crea un array con nombres de personas.  
   - Usa `forEach` para mostrar cada nombre en la consola.  
   - Usa `filter` para obtener solo los nombres que tengan más de 5 letras.*/

var nombres = ["Jhon", "Juan", "Carlos", "Pedro", "Maria", "Sebastian", "Isabela"];

console.log("Lista de nombres:");
nombres.forEach(function(nombres) {
    console.log(nombres);
});

let nombresLargos = nombres.filter(function(nombre){
    return nombre.length > 5;
});

console.log("Nombres con más de 5 letras:");
console.log(nombresLargos);