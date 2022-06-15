const express = require('express');
const app = express();
const { Router } = express;
const router = Router();
const { Server: HttpServer } = require('http')
const httpServer = new HttpServer(app)
const PORT = process.env.PORT || 8080
const methodOverride = require("method-override");
const productsRouter = require('./routes/products/products')
const carritosRouter = require('./routes/carritos/carritos')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(methodOverride("_method"));
app.set('view engine', 'ejs')
app.use('/api', router)
router.use('/productos', productsRouter)
router.use('/carrito', carritosRouter)


httpServer.listen(PORT, () => { console.log("Se inicio el servidor en el puerto N° " + PORT) })