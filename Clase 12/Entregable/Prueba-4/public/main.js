const socket = io.connect();

socket.on('productos', function (productos) {

});
const form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    let data = { title: form[0].value }
    fetch('/api/productos', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(respuesta => respuesta.json())
        .then(productos => {
            console.log(productos)
            //document.getElementById('datos').innerHTML = data2Table(productos)
            form.reset()
            socket.emit('update', 'ok');
        })
        .catch(error => console.error(error))
})


