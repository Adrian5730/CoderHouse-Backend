const socket = io.connect();

const input = document.querySelector('input')
input.addEventListener('input',() => {
    socket.emit('mensaje', input.value)
})

socket.on('mensajes', data => {
    documento.querySelector('p').innerHTML += data
})