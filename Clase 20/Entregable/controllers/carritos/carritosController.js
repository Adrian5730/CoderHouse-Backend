const dbProducts = require('../../contenedor/contenedorMongoAtlas.js');
const dbCarritos = require('../../contenedor/contenedorFirebase.js');
const productos = new dbProducts();
const carritos = new dbCarritos();



let carritoController = {
    mostrarProductos: async (req, res) => {
        const productosCarrito = await carritos.listarProductos(req.params.id)
        console.log(productosCarrito)
        res.redirect('/api/productos')
    },

    crearCarrito: async (req, res) => {
        let cantCarritos = await carritos.listarTodos()
        cantCarritos = cantCarritos.docs.length
        let newId
        if (cantCarritos == 0) {
            newId = 1
        } else {
            newId = cantCarritos + 1
            newId++
        }
        let nuevoCarrito = {
            id: newId,
            timesTamp: new Date(),
            productos: []
        }
        await carritos.crear(nuevoCarrito)
        res.redirect(`/carritos/${newId}/productos`)
    },

    borrarCarrito: async (req, res) => {
        await carritos.borrar(req.params.id)
        res.redirect('/api/carritos')
    },

    sumProdsCarrito: async (req, res) => {
        let producto = await productos.listar(req.params.id)
        producto.forEach(element => {
            producto = element
        })
        console.log(producto)
        if (producto) {
            let carrito = await carritos.listarProductos(1)
            await carritos.sumProdsCarrito(1, producto)
            res.redirect('/carritos/1/productos')
        } else {
            res.send('Producto no encontrado')
        }
    }


}

module.exports = carritoController