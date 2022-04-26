class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`Hola mi nombre completo es ${this.nombre} ${this.apellido}`)
    }

    addMascotas() {
        mascotas.push(this.mascotas);
    }

    countMascotas() {
        console.log(this.mascotas.length);
    }

    addBook() {
        this.libros.push(this.libros)
    }

    getBookNames() {
        console.log(this.libros)
        for (let i = 0; i< this.libros.length; i++) {
            console.log(this.libros[i].nombre);
        }
    }
}

let usuarioNuevo = new Usuario("Adrian", "Olave", [{ nombre: "Kingdom Hearts", autor: "Square Enix" }, { nombre: "El señor de los anillos", autor: "J. R. R. Tolkien" }], ["Perro", 'Gato'])

usuarioNuevo.getFullName()
usuarioNuevo.countMascotas()
usuarioNuevo.getBookNames()
usuarioNuevo.addBook({nombre: "Prueba 1", autor: "Autor Prueba 1"})
usuarioNuevo.getBookNames()
