const socket = io.connect();

const input = document.querySelector('input')
document.querySelector('button').addEventListener('click',() => {
    console.log(input.value)
    socket.emit('mensaje', input.value)
})

socket.on('mensajes', msjs => {
    const mensajesHTML = msjs
        .map(msj => `Socket ID: ${msj.socketid} -> ${msj.mensaje}`)
        .join('<br>')
    documento.querySelector('p').innerHTML += msj
})