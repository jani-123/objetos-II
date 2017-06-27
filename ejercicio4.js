var assert = require('assert');
function fichaDeHospital(nombre,apellido,edad,genero,ciudad,pais) // ejercicio donde muestra datos de los pacientes de 
{ // un hospital 
	this.nombre = nombre; // creamos una funcion constructor con los parametros en este caso los datos de los pacientes
	this.apellido = apellido;
	this.edad = edad;
	this.genero = genero;
	this.ciudad = ciudad;
	this.pais = pais;
	this.ficha = function(){//nostramos solo lo que se nos pide acerca del paciente
		return " nombre: " + nombre + " \n " + "edad: " + edad  +  " \n " + "pais: "  +  pais 
	}

}
describe("fichaDeHospital", function() { // testeamos con diferentes pruebas 
    it("fichaDeHospital-1", function() {
        var ficha1 = new fichaDeHospital("Juan","Perez",28, "masculino", "arequipa","peru ");
        assert.equal(" nombre: Juan \n edad: 28 \n pais: peru ", ficha1.ficha());
    })
    it("fichaDeHospital-2", function() {
        var ficha2 = new fichaDeHospital("rocio","flores", 40, "femenino","bogota", "Colombia ");
        assert.equal(" nombre: rocio \n edad: 40 \n pais: Colombia ", ficha2.ficha());
    })
    it("fichaDeHospital-3", function() {
        var ficha3 = new fichaDeHospital("Albertano","Santa Cruz",56,"","cusco","Peru ");
        assert.equal(" nombre: Albertano \n edad: 56 \n pais: Peru ", ficha3.ficha());
    })
    
})