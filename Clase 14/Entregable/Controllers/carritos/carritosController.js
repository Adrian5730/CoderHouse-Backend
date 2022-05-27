let carritos = require('../../public/db/carritos')
let productos = require('../../public/db/productos')


let carritoController = {

    mostrarProductos: function (req, res) {
        let idCarrito = req.params.id
        let carrito = carritos.find(item => item.id === 1)
        let productosCarrito = carrito.productos
        console.log(productosCarrito)
        res.render('productos', {productos: productosCarrito})
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
            productos: []
        }
        carritos.push(nuevoCarrito)
        console.log(carritos)
        res.redirect(`/api/productos`)
    },

    borrarCarrito: function (req, res) {
        let idCarrito = req.params.id
        let indice = productos.find(item => item.id === idCarrito)
        carritos.splice(indice, 1)
        res.redirect(`/api/productos`)
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
            let nuevoArrayProductos = carrito.productos
            nuevoArrayProductos.push(prodCarrito)
            res.redirect(`/api/carrito/1/productos`)

        } else {
            res.send("No existe ningun producto con ese id")
        }
    }

}

module.exports = carritoController;