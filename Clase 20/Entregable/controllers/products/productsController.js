const  dbProducts = require( '../../contenedor/contenedorMongoAtlas.js');
const  db = new dbProducts();
let productsController = {
    listadoDeProductos: async (req, res) => {
        // let g = await db.listar();
        //     console.log(g)
        let idProduct = req.params.id
        if (!idProduct) {
            res.render('productos', { productos: await db.listar() })
        } else {
            res.render('productos', { productos: await db.listar(idProduct) })
        }
    },

    crearProducto: async (req, res) => {
        let producto = await db.listar();
        let newId
        if (producto.length == 0) {
            newId = 1
        } else {
            newId = producto[producto.length - 1].id
            newId++
        }
        let newProducto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            foto: req.body.foto,
            id: newId,
            timesTamp: new Date(),
            codigo: req.body.codigo,
            stock: req.body.stock
        }
        await db.insertar(newProducto);
        res.redirect(`/api/productos/${newId}`)
    },

    editarProducto: async (req, res) => {
        let updateProducto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            foto: req.body.foto,
            codigo: req.body.codigo,
            stock: req.body.stock,
            timesTamp:new Date()
        }
        await db.update(req.params.id, updateProducto);
        res.redirect("/api/productos/")
    },

    borrarProducto: async (req, res) => {
        await db.delete(req.params.id);
        res.redirect("/api/productos/")
    }


}

module.exports = productsController;