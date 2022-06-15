const models = require('../models/products.js');
const mongoose = require('mongoose');

let conextion = async () => {
    try {
        const URL = "mongodb+srv://AdrianDB:Camilo5730@cluster0.jrd62.mongodb.net/ecommerce?retryWrites=true&w=majority"
        await mongoose.connect(URL);
        // console.log( await models.products.find());
    } catch (err) {
        console.log(err);
    }
}

class ContenedorMongodb {
    constructor() {
        conextion();
    }

    listar(id) {
        if (id) {
            return models.products.find({ id: id });
        } else {
            return models.products.find();
        }
    }

    insertar(producto) {
        return models.products.create(producto);
    }

    update(id, producto) {
        return models.products.findOneAndUpdate({ id: id }, producto);
    }

    delete(id) {
        return models.products.findOneAndDelete({ id: id });
    }
}

module.exports = ContenedorMongodb;
