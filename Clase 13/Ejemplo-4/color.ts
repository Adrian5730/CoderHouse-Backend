// const getNumb0to255 = () => Math.floor(Math.random() * 256)

// class Color {
//     get() {
//         let color = `rgb (${getNumb0to255()} , ${getNumb0to255()}, ${getNumb0to255()} )`
//         return color
//     }
// }

// const color = new Color()
// console.log(color.get())


const getNumato255 = ():number => Math.floor(Math.random() * 256)
class Color2 {
    get():string{
        let color:string = `rgb (${getNumato255()} , ${getNumato255()}, ${getNumato255()} )`
        return color
    }
}

const color2:Color2 = new Color2()
console.log(color2.get())

//comando para ejecutar .\node_modules\.bin\tsc ./color.ts