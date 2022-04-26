const fs = require('fs');
const { json } = require('node:stream/consumers');

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }

    save(listaProductos) {

        const productos = this.getAll();
        let newId
        if (productos.length == 0) {
            newId = 1
        } else {
            newId = productos[productos.length - 1].id + 1
        }
        console.log(`El id asignado fue ${newId}`)
        const nuevaLista = { ...listaProductos, id: newId }
        productos.push(nuevaLista)

        fs.writeFileSync(this.ruta, JSON.stringify(productos), error => {
            if (error) {
                console.log(`Tiro error ${error}`)
            } else {
                console.log('guardado');
            }
        })


    }

    getAll() {
        try {
            const arrayProductos = fs.readFileSync(this.ruta, `utf8`)
            return JSON.parse(arrayProductos)
        }
        catch (e) {
            console.log(`Tiro erro: ${e}`);
            return []
        }
    }

    getById(idProducto) {
        fs.readFile(this.ruta, 'utf8', (err, data) => {
            if (err) {
                console.log(`Error al leer el archivo ${err}`)
            } else {
                console.log("Lectura ok");
                let jsonData = JSON.parse(data)
                let seleccionado = jsonData.find((item) => item.id === idProducto)
                if (!seleccionado) {
                    console.log('No se encontro ningun producto con ese Id')
                } else {
                    console.log(`El producto encontrado fue`);
                    console.log(seleccionado);
                }
            }
        })
    }

    deleteById(idProducto) {
        fs.readFile(this.ruta, 'utf8', (err, data) => {
            if (err) {
                console.log(`Error al leer el archivo ${err}`)
            } else {
                console.log("Lectura ok");
                let jsonData = JSON.parse(data)
                let seleccionado = jsonData.findIndex((item) => item.id === idProducto)
                console.log(seleccionado)
                if (seleccionado == -1) {
                    console.log('No se encontro ningun producto con ese Id')
                } else {
                    jsonData.splice(seleccionado, 1)
                    console.log(jsonData)
                    fs.writeFileSync(this.ruta, JSON.stringify(jsonData), error => {
                        if (error) {
                            console.log(`Tiro error ${error}`)
                        } else {
                            console.log('guardado');
                        }
                    })
                    console.log(`El producto eliminado con el indice ${idProducto} fue eliminado del archivo`);
                }
            }
        })
    }

    deleteAll() {
        fs.unlink(this.ruta, error => {
            if (error) {
                console.log(`Error al eliminar el archivo ${error}`)
            } else {
                console.log(`Archivo eliminado`)
            }
        })
    }
}




const ruta = new Contenedor('./productos.text');

const listaProductos = {
    title: 'El señor de los anillos',
    price: 2000,
    thumbnail: 'www.google.com/images/gatito'
}

ruta.save(listaProductos);
console.log(ruta.getAll());
ruta.getById(30)
// ruta.deleteAll()
// ruta.deleteById(33);