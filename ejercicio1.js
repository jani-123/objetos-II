//var assert = require('assert')

   var Objeto = {
        numInicial: numInicial,
        numFinal: numFinal,
        metodo1: function(){
            var c=0;
            for(var i=this.numInicial ; i <= this.numFinal ; i++)
            {
                c = c+i;
            }
            return c
        } 
}



//Objeto.metodo1();
/*describe('SUMA DE CADENA',function(){ 
    it('prueba cadena 55 , 1+2+3...+10', function(){
         assert.equal(55, new serieNumeros(1,10).Objeto.metodo1());
    });
    it('prueba cadena 76 , 10 hasta 15', function(){
         assert.equal(76, Objeto.metodo1());
    });
    it('prueba cadena 55 , 1 hasta "hola"', function(){
         assert.equal(55, Objeto.metodo1());
    });
    
});*/



