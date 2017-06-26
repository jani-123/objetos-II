//var assert = require('assert');
function fichaDeHospital(nombre,apellido,edad,genero,ciudad,pais)
{
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.genero = genero;
	this.ciudad = ciudad;
	this.pais = pais;
	this.ficha = function(){
		return " nombre: " + nombre + "\n"+ " edad: " + edad +  "\n" +" pais: " + pais
	}

}
var ficha1 = new fichaDeHospital("juan","perez",39,"masculino","arequipa","peru");
console.log(ficha1.ficha());
/*describe('fichaDeHospital',function(){ 
    it('Prueba 1 juan 39 peru - ("juan","perez",39,"masculino","arequipa","peru")', function(){
         assert.equal("", new Persona("Chio",21,"desarrolladora web", "mujer").mostrarInformacion());
    });
    
    
});*/
