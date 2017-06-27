var assert = require('assert')
function sumaNumeros(numInicial,numFinal)
{
    var Objeto = {  // declaramos el objeto literal que contiene
        Inicial: numInicial,// numero inicial
        Final: numFinal // numero final
    }
    var c=0; // creamos un contador

    for(var i=Objeto.Inicial ; i <= Objeto.Final ; i++)//recoremos los numeros del inicio al final
    {
        c = c+i; // sumamos cada numero q vamos recoriendo
    }
        return c // mostramos resultado de la suma
    
}

describe('SUMA DE CADENA',function(){  // realizamos el testeo provando en distintos casos
    it('prueba cadena 55 , 1+2+3...+10', function(){
         assert.equal(55, sumaNumeros(1,10));
    });
    it('prueba cadena 75 , 10 hasta 15', function(){
         assert.equal(75, sumaNumeros(10,15));
    });
    it('prueba cadena 55 , 1 hasta "hola"', function(){
         assert.equal(0, sumaNumeros(1,"hola"));
    });
    
});



