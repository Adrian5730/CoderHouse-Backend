const express = require('express')
const fs = require('fs')
const app = express();
const PORT = 8080
let producto = []

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT);
});




class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
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
                    producto = []
                    producto.push(seleccionado)
                }
            }
        })
        return producto;
    }
}

const ruta = new Contenedor('./productos.text');

let min = 1
let max = ruta.getAll().length




app.get('/productos', function (req, res, next) {
    res.send(ruta.getAll())
})


app.get('/productoRandom', function (req, res, next) {

    res.send(ruta.getById(Math.floor(Math.random() * (max - min + 1) + min)))
})

