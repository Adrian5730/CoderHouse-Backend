const express = require('express');
const router = express.Router();
const userCheck = require('../../middlewares/userCheck');
var carritosController= require("../../Controllers/carritos/carritosController");

router.get('/:id/productos', carritosController.mostrarProductos);
router.post('/', userCheck, carritosController.crearCarrito);
router.delete('/:id', userCheck, carritosController.borrarCarrito);
router.post('/:id/productos', userCheck, carritosController.sumProdsCarrito);

module.exports = router;