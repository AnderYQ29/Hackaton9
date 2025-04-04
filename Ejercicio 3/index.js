/*3. Crear un objeto con propiedades y métodos:  
   - Crea un objeto llamado "celular" con las propiedades `marca`, `modelo` y `bateria`.  
   - Agrega un método llamado "cargarBateria" que aumente el nivel de batería en 10 unidades cada vez que se llame.  
   - Simula la carga llamando al método varias veces y muestra el nivel de batería en la consola. */

   const celular = {
    marca: "Samsumg",
    modelo: "A21S",
    bateria: 30,
    cargarBateria: function(){
        this.bateria += 10;
        if(this.bateria > 100){
            this.bateria = 100;
        }
        console.log(`Nivel de bateria: ${this.bateria}%`);
    }
   };
   celular.cargarBateria();
   celular.cargarBateria();
   celular.cargarBateria();
   celular.cargarBateria();
   celular.cargarBateria();
   celular.cargarBateria();
   celular.cargarBateria();
