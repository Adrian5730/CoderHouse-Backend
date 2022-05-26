const express = require('express');
const router = express.Router();
const userCheck = require('../../middlewares/userCheck');
var carritosController= require("../../Controllers/carritos/carritosController");

// router.get('/:id?', carritosController.listadoDeProductos);
router.get('/:id/productos', userCheck, carritosController.mostrarProductos);

router.post('/', userCheck, carritosController.crearCarrito);
router.delete('/:id', userCheck, carritosController.borrarCarrito);
router.post('/:id/productos', userCheck, carritosController.sumProdsCarrito);

// router.put('/:id?', userCheck, productsController.editarProducto);
// router.delete('/:id?', userCheck, productsController.borrarProducto);

module.exports = router;