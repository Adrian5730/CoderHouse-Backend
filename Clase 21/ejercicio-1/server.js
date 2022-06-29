function testSuma(){
    const resultado = Calculadora.suma(3,5);
    if(resultado == 8){
        console.log("Test ok")
    } else {
        console.log("Test failed")
    }
}

class Calculadora{
    static suma(a,b){
        return a + b ;
    }
}

testSuma();
