const express = require('express')
const app = express();
const { Router } = express;
const router = Router();
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
app.use(express.json())

const handlebars = require('express-handlebars');
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: 'main.hbs',
    })
);
    
router.get('/', (req, res) => {
    res.render('formulario')
})

router.post('/productos', (req, res) => {
    
})

const PORT = 8080
httpServer.listen(PORT, () => { console.log("Se inicio el servidor en el puerto N° " + PORT) })