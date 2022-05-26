const socket = io.connect();

socket.on('mi mensaje', data => {
    document.querySelector('p').innerHTML = data
    socket.emit('clave3', 'el mensaje lo recibi correctamente, saludos del cliente')
})