const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', './views')
app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
    const data = {
        nombre: 'Adrian',
        apellido: 'Olave',
        edad: '20',
        email:'camilo-olave@hotmail.com',
        telefono: '12348566789'
    }
    
    res.render('datos', data)
})

app.listen(8080)