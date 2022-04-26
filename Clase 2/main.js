/*class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    static saludoCorto = "Hola"

    saludoCompleto(){
        console.log(`Buenas, soy ${this.nombre}`)
    }

    saludoCorto(){
        console.log(Persona.saludoCorto)
    }
}

let persona1 = new Persona("Marcos", 23)

persona1.saludoCorto
persona1.saludoCorto()
Persona.saludoCorto*/

class Contador{
    constructor(nombre ){
        this.nombre = nombre;
        this.cuentaLocal = 0;
    }
    

    static cuentaTotal = 0

    obtenerResponsable(){
        return `${this.nombre}`
    }

    obtenerCuentaLocal(){
        return this.cuentaLocal
    }

    obtenerCuentaGlobal(){
        return Contador.cuentaTotal
    }

    contar(){
        ++this.cuentaLocal
        Contador.cuentaTotal++
    }
}

let contador1 = new Contador("Marcos")

contador1.contar()
contador1.contar()
console.log(`la cuenta de ${contador1.obtenerResponsable()} es de ${contador1.obtenerCuentaLocal()}`)