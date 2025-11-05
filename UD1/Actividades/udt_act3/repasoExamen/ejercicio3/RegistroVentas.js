class RegistroVentas {
    #ventas;

    constructor() {
        this.#ventas = []
    }

    insertarTienda(nombre, ventas) {
        nombre = nombre.toUpperCase()
        if (this.#ventas.some(fila => fila[0] === nombre)) return false;
        if (!nombre || ventas.length !== 12) return false;

        this.#ventas.push([nombre, ...ventas]);
        return true
    }

    insertarAleatorio(nombre) {
        let aleatorios = []
        nombre = nombre.toUpperCase()
        if (this.#ventas.some(fila => fila[0] === nombre)) return false;

        for (let i = 0; i < 12; i++) {
            const element = Math.floor(Math.random() * (2000 - 500 + 1)) + 500
            aleatorios.push(element)
        }
        this.#ventas.push([nombre, ...aleatorios]);
        return true

    }

    mediaTienda(nombre) {
        let acumulador = 0
        let contador = 0
        for (let i = 0; i < this.#ventas.length; i++) {
            for (let j = 1; j < this.#ventas[i].length; j++) {
                if (this.#ventas[i][0] == nombre) {
                    acumulador += Number(this.#ventas[i][j])
                    contador++
                }
            }
        }

        return (acumulador / contador).toFixed(2)
    }

    mediaTotal() {
        let acumulador = 0
        let contador = 0
        for (let i = 0; i < this.#ventas.length; i++) {
            for (let j = 1; j < this.#ventas[i].length; j++) {
                acumulador += Number(this.#ventas[i][j])
                contador++
            }
        }

        return (acumulador / contador).toFixed(2)
    }

    eliminarTienda(nombre) {
        for (let i = 0; i < this.#ventas.length; i++) {

            if (this.#ventas[i][0] == nombre) {
                this.#ventas.splice(i, 1)
                return true
            }
        }
        return false
    }


    toHTML() {
        const tabla = document.createElement("table")
        const thead = document.createElement("thead")
        const tbody = document.createElement("tbody")
        const trhead = document.createElement("tr")
        //cabecera
        const th1 = document.createElement("th")
        th1.textContent = "NOMBRE"
        trhead.appendChild(th1)
        for (let i = 1; i <= 12; i++) {
            const th = document.createElement("th")
            th.textContent = "VENTA" + i
            trhead.appendChild(th)
        }
        const th2 = document.createElement("th")
        th2.textContent = "MEDIA"
        trhead.appendChild(th2)
        thead.appendChild(trhead)

        //body
        for (let i = 0; i < this.#ventas.length; i++) {
            const tr = document.createElement("tr")

            for (let j = 0; j < this.#ventas[i].length; j++) {

                const td = document.createElement("td")
                td.textContent = this.#ventas[i][j]
                tr.appendChild(td)
            }

            //añadimos la columna media
            const media = document.createElement("td")
            media.textContent = this.mediaTienda(this.#ventas[i][0])
            tr.appendChild(media)
            tbody.appendChild(tr)
        }

        //añadimos todo a la tabla
        tabla.appendChild(thead)
        tabla.appendChild(tbody)

        return tabla

    }

    toJSON(){
    return JSON.stringify(this.#ventas);
    }
    fromJSON(json){
        this.#ventas = JSON.parse(json)
    }

}