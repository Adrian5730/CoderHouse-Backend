const http = require('http');

const server = http.createServer((req, res) => {
    res.end(getMensaje())
})

const PORT = 8080

const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el Puerto ${connectedServer.address().port}`);
})


const getMensaje = () => {
    const hora = new Date().getHours();

    if( hora >= 6 & hora <= 12){
        return 'Buenos Dias'
    }

    if( hora >= 13 & hora <= 19){
        return 'Buenos Tardes'
    }

    return 'Buenas Noches'
}
