import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();


app.use(express.json())
app.use(cookieParser('coderhouse'));

app.post('/cookies', (req, res) => {
    const { nombre, valor, tiempo, firmada } = req.body;

    if (!nombre || !valor) {
        return res.json({ error: 'Falta Nombre o valor' })
    }

    if (tiempo) {
        res.cookie(nombre, valor, { signed: firmada, maxAge: 1000 * parseInt(tiempo) })
    } else {
        res.cookie(nombre, valor, { signed: firmada })
    }

    res.json({proceso: 'Ok'})

})

app.get('/cookies', (req, res) => {
    res.json({ noFirmadas: req.cookies, firmadas: req.signedCookies })
})

app.delete('/cookies/:nombre', (req, res) => {
     const { nombre } = req.params
     if(!req.params[nombre] && !req.signedCookies[nombre]){
        res.json({error: 'Nombre Invalido'})
     } else {
        res.clearCookie(nombre)
        res.json({ proceso: 'Ok'})

     }
})

const PORT = 8080;

const server = app.listen(PORT, () => { 
    console.log('Servidor escuchando en el puerto ' + PORT)
})
