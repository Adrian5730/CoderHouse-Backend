let productos = require('../../public/db/productos')
let productsController = {
    listadoDeProductos: function (req, res) {
        let idProduct = req.params.id
        if (!idProduct) {
            res.render('productos', { productos: productos })
        } else {
            let producto = productos.find(item => item.id === idProduct)
            if (producto) {
                res.render('productos', { productos: producto })
            }
        }
    },

    crearProducto: function (req, res) {
        let newId
        if (productos.length == 0) {
            newId = 1
        } else {
            newId = productos[productos.length - 1].id
            newId++
        }
        let newProducto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            foto: req.body.foto,
            id: String(newId),
            timesTamp: new Date(),
            codigo: req.body.codigo,
            stock: req.body.stock
        }
        productos.push(newProducto)
        res.redirect(`/api/productos/`)
    },

    editarProducto: function (req, res) {
        let id = Number(req.params.id)
        let indice = id-1
        productos[indice].nombre = req.body.nombre
        productos[indice].descripcion = req.body.descripcion
        productos[indice].precio = req.body.precio
        productos[indice].foto = req.body.foto,
        productos[indice].timesTamp = new Date()
        productos[indice].codigo = req.body.codigo,
        productos[indice].stock = req.body.stock
        res.redirect('/api/productos')
    },

    borrarProducto: function(req, res) {
        let idProduct = req.params.id
        let indice = productos.findIndex(producto => producto.id === idProduct)
        productos.splice(indice, 1)
        res.redirect('/api/productos')
    }
}

module.exports = productsController;