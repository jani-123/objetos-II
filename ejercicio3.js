var assert = require('assert');
function ordenArreglo(arr)
{
    this.arr = arr;
    this.texto = function(){
    	var resultado = {};
    	arr.forEach(function(propiedad,index){
    	 resultado[index] = propiedad;
    	});
    	return resultado
    }
}
var x = new ordenArreglo([6,5,4,3,2,1]);
console.log(x.texto()); 



