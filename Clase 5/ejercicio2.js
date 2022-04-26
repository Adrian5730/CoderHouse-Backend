const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terraquio', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]


let getNombres = (productos) => {
    const nombres = []
    for (const producto of productos) {
        nombres.push(producto.nombre)
    }
    return nombres.join(', ')
}

console.log(getNombres(productos))

function getPrecioTotal(productos) {
    let precioTotal = 0
    for ( const producto of productos){
        precioTotal += producto.precio
    }

    return precioTotal
}

console.log(to2decimales(getPrecioTotal(productos)))

function getPrecioPromedio(productos){
    if (productos.length === 0) {
        return 0
    }
    let preecioTotal = getPrecioTotal(productos)

    return preecioTotal / productos.length
}

console.log(to2decimales(getPrecioPromedio(productos)));


function getProductoMasBarato(productos){
    if (productos.length === 0) {
        return 0
    }

    let precioBarato = productos[0].precio
    let productoBarato = productos[0].nombre

    for ( const producto of productos){
        if(producto.precio < precioBarato) {
            precioBarato = producto.precio
            productoBarato = producto.nombre
        }
    }

    return 'El producto mas barato es ' + productoBarato + ' y cuesta ' + precioBarato
}

console.log(getProductoMasBarato(productos));

function getProductoMasCaro(productos){
    if (productos.length === 0) {
        return 0
    }

    let precioCaro = productos[0].precio
    let productoCaro = productos[0].nombre

    for ( const producto of productos){
        if(producto.precio > precioCaro) {
            precioCaro = producto.precio
            productoCaro = producto.nombre
        }
    }

    return 'El producto mas caro es ' + productoCaro + ' y cuesta ' + precioCaro
}

console.log(getProductoMasCaro(productos));

const informacion = {
    nombre: getNombres(productos),
    totalDePrecios: getPrecioTotal(productos),
    precioPromedio: getPrecioPromedio(productos),
    productoMasBarato: getProductoMasBarato(productos),
    productoMasCaro: getProductoMasCaro(productos)
}

console.log(informacion);
//----------------------------------------------------------------

function to2decimales(valor) {
    return Number(valor.toFixed(2))
}

