let carritos = require('../../public/db/carritos')
let productos = require('../../public/db/productos')


let carritoController = {

    mostrarProductos: function (req, res) {

    },

    crearCarrito: function (req, res) {
        let newId
        if (carritos.length == 0) {
            newId = 1
        } else {
            newId = carritos[carritos.length - 1].id
            newId++
        }
        let nuevoCarrito = {
            id: newId,
            timesTamp: new Date(),
            productos: {}
        }
        carritos.push(nuevoCarrito)
        console.log(carritos)
        res.redirect(`/api/carrito/:${newId}/producto`)
    },

    borrarCarrito: function (req, res) {
        let idCarrito = req.params.id
        let indice = productos.find(item => item.id === idCarrito)
        carritos.splice(indice, 1)
        res.redirect(`/api/carrito/:${newId}/producto`)
    },

    sumProdsCarrito: function (req, res) {
        let idProduct = req.params.id
        let producto = productos.find(item => item.id === idProduct)
        if (producto) {
            let carrito = carritos.find(item => item.id === 1)
            let prodCarrito = {
                id: producto.id,
                timesTamp: producto.timesTamp,
                descripcion: producto.descripcion,
                nombre: producto.nombre,
                codigo: producto.codigo,
                foto: producto.foto,
                precio: producto.precio,
                stock: producto.stock,
            }
            let carritoProduct = carritos.productos ? carritos.productos : {}
            const nuevoProduct = Object.assign(carritoProduct, prodCarrito)
            carritos.productos = nuevoProduct
            console.log(carritoProduct)
            console.log(carritos)
            // console.log(nuevoProduct)



        } else {
            res.send("No existe ningun producto con ese id")
        }
    }

}

module.exports = carritoController;