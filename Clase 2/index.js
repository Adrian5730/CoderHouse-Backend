function mostrarLista(lista) {
    for (i = 0; i < lista.length; i++) {
        if (lista.length !== 0) {
            console.log(lista[i])
        } else {
            console.log("Lista Vacia")
        }
    }
}


const lista = []

mostrarLista(lista)