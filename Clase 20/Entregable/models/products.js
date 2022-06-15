const mongoose = require('mongoose');
const productsCollection = 'products';
const ProductsSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    descripcion: String,
    precio: Number,
    foto: String,
    timesTamp: { type: Date, default: Date.now },
    codigo: String,
    stock: Number,
})
 let products = mongoose.model(productsCollection, ProductsSchema);
module.exports = {products}

