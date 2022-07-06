import express from 'express';
import session from 'express-session';
// path redis-cli  -h redis-10394.c114.us-east-1-4.ec2.cloud.redislabs.com -p 10394 -a kxG4bAQVDDY26evCo3tNiSVh9Y4yx93p
// --------------------------------------------------------------- //
import MongoStore from 'connect-mongo';
// --------------------------------------------------------------- //


const app = express();

app.use(express.json());


app.use(
    session({
        store: MongoStore.create({mongoUrl: 'mongodb://localhost/sesiones'}),
        secret: 'Obiwa',
        resave: false,
        saveUninitialized: false
    })
)

app.get('/', (req, res) => {
    if(req.session.contador){
        req.session.contador++;
        res.send(`${req.session.nombre}, visitaste la pagina ${req.session.contador} veces`)
    } else {
        req.session.contador = 1
        req.session.nombre = req.query.nombre || 'Usuario'
        res.send(`Hello there. ${req.session.nombre}`)
    }
})

app.get('/olvidar', (req, res) => {
    const nombre = req.session.nombre
     req.session.destroy( err => {
        if(err){
            res.json({error: 'olvidar', descripcion: err })
        } else {
            res.send(`Hasta luego ${nombre}`)
        }
     })
})

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log('Servidor escuchando en el ' + PORT)
})