var assert = require('assert');
function ordenArreglo(arr) // declaramos la funcion constructor que recibe un array
{ 
    this.arr = arr;
    this.texto = function(){ // creamos el metodo texto donde convertiremos un array a objeto
    	var concat = ''; // variable declarada para hacer un string
    	var resultado = {}; // variable declarara para un arreglo
    	arr.forEach(function(propiedad,index){ // utilizamos el forEch para recorrer un array
    	 resultado["propiedad" + (index+1)] = propiedad;
    	 concat += "propiedad" + (index + 1) + "-->" + propiedad + ";";
    	});
    	return concat = concat.slice(0,-1);
    }
}

describe("Arreglos", function() {
    it("ordenar a modo de string un arreglo-1", function() { // realizamos el testeo con las distintas pruebas realizadas
        var texto1 = new ordenArreglo([6,5,4,3,2,1]);
        assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1", texto1.texto());
    })
    it("ordenar a modo de string un arreglo-2", function() { // realizamos el testeo con las distintas pruebas realizadas
        var texto2 = new ordenArreglo([6.8,0,7.5,9]);
        assert.equal("propiedad1-->6.8;propiedad2-->0;propiedad3-->7.5;propiedad4-->9", texto2.texto());
    })
    it("ordenar a modo de string un arreglo-3", function() { // realizamos el testeo con las distintas pruebas realizadas
        var texto3 = new ordenArreglo(["hola","como","estas","?"]);
        assert.equal("propiedad1-->hola;propiedad2-->como;propiedad3-->estas;propiedad4-->?", texto3.texto());
    })
    

    
    
})



