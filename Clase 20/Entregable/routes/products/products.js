const express = require('express');
const router = express.Router();
const userCheck = require('../../middlewares/userCheck');
let productsController= require("../../Controllers/products/productsController");

router.get('/:id?', productsController.listadoDeProductos);
router.post('/', userCheck, productsController.crearProducto);
router.put('/:id', userCheck, productsController.editarProducto);
router.delete('/:id?', userCheck, productsController.borrarProducto);

module.exports = router;