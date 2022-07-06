const socket = io.connect();

function addMessage(e) {
    const message = {
        author:{
            id: document.getElementById("id").value,
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            edad: document.getElementById("edad").value,
            alias: document.getElementById("alias").value,
            date: new Date()
        },
        text: document.getElementById("text").value,
        
    }
    socket.emit("new-message", message);
    return false;
}

function render(data) {
    const html = data.map((elem, index) => {
        return (`
            <div>
                <p class="correo">${elem.id}</p>
                <p><strong>[</strong><p class="fecha">${elem.date}</p><strong>]</strong></p>
                <em class="mensaje"> ${elem.text}</em>
            </div>
        `)
    }).join(" ")

    document.getElementById("messages").innerHTML = html
}

socket.on("messages", function (data) { render(data) })

//Productos

function addProduct() {
    const product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value,
    }

    socket.emit("new-product", product);
    return false;
}

function renderProduct(data) {
    console.log(data)
    const html = data.map((elem, index) => {
        console.log(elem)
        return (`<tr role="row">
                        <td>${elem.title}</td>
                        <td>${elem.price}</td>
                        <td><img src="${elem.thumbnail}" alt="${elem.title}"></td>
                    </tr>
                `)
    })

    document.getElementById("products").innerHTML = html
}

function redireccionar(){
    if(window.location.pathname == "/logout"){
        window.location.href = "http://localhost:8080/";

    }
  }
   
setTimeout("redireccionar()", 2000);

socket.on("productos", function (data) { renderProduct(data) })



