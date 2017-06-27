var assert = require('assert');
function Persona(nombre,edad,ocupacion,genero) // creamos una funcion constructor con los siguientes parametros
{ 
    this.nombre = nombre; // parametros perteneciente a la persona
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.genero = genero;
    this.mostrarInformacion = function(){ // metodo mostrarinformacion donde realizaremos la resolucion
        if(this.edad > 17 && this.genero.toLowerCase() == "femenino" && // aplicamos las condiciones dadas en el problema tambien  
            (this.ocupacion.toLowerCase() == "desarrolladora web" || // teniendo en cuenta la entrada en mayusculas
                this.ocupacion.toLowerCase() == "estudiante de laboratoria"))
        {
            return "You're awesome"; // retornamos la respuesta deseada
        } 
        else{
            return "Upsiii";
        }   
    }
} 
describe("Persona", function() {
    it("codigo para una SUPER CODER-1", function() { // realizamos el testeo con las distintas pruebas realizadas
        var persona1 = new Persona("rocio", 25, "estudiante de laboratoria", "femenino");
        assert.equal("You're awesome", persona1.mostrarInformacion());
    })
    it("codigo para una SUPER CODER-2", function() {
        var persona2 = new Persona("JUAN", 30, "DESARROLLADOR WEB", "MASCULINO");
        assert.equal("Upsiii", persona2.mostrarInformacion());
    })
    it("codigo para una SUPER CODER-3", function() {
        var persona3 = new Persona("Gabi", 18, "desarrolladora WeB", "femenino");
        assert.equal("You're awesome", persona3.mostrarInformacion());
    })
    
})