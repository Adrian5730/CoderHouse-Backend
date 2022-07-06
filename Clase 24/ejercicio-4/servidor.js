import express from 'express';
import session from 'express-session';
// path redis-cli  -h redis-10394.c114.us-east-1-4.ec2.cloud.redislabs.com -p 10394 -a kxG4bAQVDDY26evCo3tNiSVh9Y4yx93p
// --------------------------------------------------------------- //
import redis from 'redis';
import redisStore from 'connect-redis';
const RedisStore = redisStore(session)
// --------------------------------------------------------------- //
const REDIS_URL = 'redis-10394.c114.us-east-1-4.ec2.cloud.redislabs.com'
const REDIS_PORT = 10394
const REDIS_PASSWORD = 'kxG4bAQVDDY26evCo3tNiSVh9Y4yx93p'
const client = redis.createClient({
    url: `redis://default:${REDIS_PASSWORD}@${REDIS_URL}:${REDIS_PORT}`,
    legacyMode: true
})

await client.connect()
// --------------------------------------------------------------- //

const app = express();

app.use(express.json());


app.use(
    session({
        store: new RedisStore({
            client: client,
            ttl: 60
        }),
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