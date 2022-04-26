function mostrarLetras(str, cb) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < str.length) {
            console.log(srt[i])
        } else {
            clearInterval(timer)
            cb();
        }
    }, 1000)
}

const fin = () => console.log('termine');

setTimeout(() => { mostrarLetras('Hola!', fin()) }, 0)