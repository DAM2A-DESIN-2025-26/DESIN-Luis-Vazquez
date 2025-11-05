class GestorNotas {
    #notas;

    constructor() {
        this.#notas = []
    }

    insertarAlumno(nombre, notas) {
        if (this.#notas.some(fila => fila[0] === nombre)) return false;
        if (!nombre || notas.length !== 3) return false;

        this.#notas.push([nombre, ...notas]);
        return true
    }

    mediaAlumno(nombre) {
        let acumulador = 0
        let contador = 0
        for (let i = 0; i < this.#notas.length; i++) {
            for (let j = 1; j < this.#notas[i].length; j++) {
                if (this.#notas[i][0] == nombre) {
                    acumulador += Number(this.#notas[i][j])
                    contador++
                }
            }
        }

        return (acumulador / contador).toFixed(2)
    }

    mediaClase() {
        let acumulador = 0
        let contador = 0
        for (let i = 0; i < this.#notas.length; i++) {
            for (let j = 1; j < this.#notas[i].length; j++) {
                acumulador += Number(this.#notas[i][j])
                contador++
            }
        }

        return (acumulador / contador).toFixed(2)
    }

    eliminarAlumno(nombre) {
        for (let i = 0; i < this.#notas.length; i++) {

            if (this.#notas[i][0] == nombre) {
                this.#notas.splice(i, 1)
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
        for (let i = 1; i <= 3; i++) {
            const th = document.createElement("th")
            th.textContent = "NOTA" + i
            trhead.appendChild(th)
        }
        const th2 = document.createElement("th")
        th2.textContent = "MEDIA"
        trhead.appendChild(th2)
        thead.appendChild(trhead)

        //body
        for (let i = 0; i < this.#notas.length; i++) {
            const tr = document.createElement("tr")

            for (let j = 0; j < this.#notas[i].length; j++) {

                const td = document.createElement("td")
                td.textContent = this.#notas[i][j]
                tr.appendChild(td)
            }

            //añadimos la columna media
            const media = document.createElement("td")
            media.textContent = this.mediaAlumno(this.#notas[i][0])
            tr.appendChild(media)
            tbody.appendChild(tr)
        }

        //añadimos todo a la tabla
        tabla.appendChild(thead)
        tabla.appendChild(tbody)

        return tabla

    }


}