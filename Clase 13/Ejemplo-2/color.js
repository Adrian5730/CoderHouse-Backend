const getNumb0to255 = () => Math.floor(Math.random() * 256)

class Color {
    get() {
        let color = `rgb (${getNumb0to255()} , ${getNumb0to255()}, ${getNumb0to255()} )`
        return color
    }
}

const color = new Color()
console.log(color.get())