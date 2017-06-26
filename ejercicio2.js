var assert = require('assert');
function Persona(nombre,edad,ocupacion,genero)
{
	this.nombre = nombre;
	this.edad = edad;
	this.ocupacion = ocupacion;
	this.genero = genero;
	this.mostrarInformacion = function(){
		if(this.edad > 17 && this.genero == "mujer" && this.ocupacion == "estudiante de laboratoria")
		{
			return "You're awesome"
        } 
        else{

           	return "Upsiii"
           }	
	}
} 

//var persona1 = new Persona("Chio",21,"desarrolladora web", "mujer");
describe('SUPER CODER',function(){ 
    it('descubre si eres una SUPER CODE - ("Chio",21,"desarrolladora web", "mujer")', function(){
         assert.equal("You're awesome", new Persona("Chio",21,"desarrolladora web", "mujer").mostrarInformacion());
    });
    
    
});
