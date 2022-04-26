const operacion = (val1, val2, operac) => {
    return operac(val1, val2)
}

const suma = (val1, val2) => {
    return val1 + val2
}

const resta = (val1, val2) => {
    return val1 - val2
}

const multiplicacion = (val1, val2) => {
    return val1 * val2
}

const division = (val1, val2) => {
    return val1 / val2
}

console.log('suma ' + operacion(2, 2, resta))



//Promesas

let dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor == 0) {
            reject('no se puede dividir por cero')
        } else {
            resolve(dividendo / divisor)
        }
    })
}

dividir(10, 2)
    .then(resultado => {
        console.log(`resultado: ${resultado}`)
    })
    .catch(error => {
        console.log(`error: ${error}`)
    })

Promise.resolve(16)
    .then(x => x + 1)
    .then(x => x * 2)
    .then(x => {
        if(x=22) throw 'Error'
        else return 80
    })
    .then(x => 30)
    .then(x => x /2)
    .then(console.log)
    .catch(console.log)