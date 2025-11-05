class CentralMedidas {
    #medidas;

    constructor() {
        this.#medidas = []
    }

    insertaMedidas(ciudad, valores) {

        if (this.comprobarSiExiste(ciudad) == false && valores.length == 30 && !valores.some(valor => valor < -10 || valor > 40)) {
            this.#medidas.push([ciudad, ...valores])
        }
        console.log("algun valor no cumple con los parametros o la ciudad ya existe")

    }

    insertaAleatorio(ciudad) {
        let valores = []
        if (!this.comprobarSiExiste(ciudad)) {
            for (let i = 0; i < 30; i++) {
                let temp = Math.floor(Math.random() * 51) - 10;
                valores.push(temp)
            }

            this.#medidas.push([ciudad, ...valores])
        } else {
            console.log("La ciudad ya existe")
        }

    }

    mediaMedidas(ciudad) {
        let acumulador = 0
        let contador = 0
        const fila = this.#medidas.find(fila => (fila[0] === ciudad))

        for (let i = 1; i < fila.length; i++) {
            acumulador += fila[i]
            contador++
        }

        return (acumulador / contador).toFixed(2);

    }

    mediaMedidasTotal() {
        let acumulador = 0
        let contador = 0

        for (let i = 0; i < this.#medidas.length; i++) {

            for (let j = 1; j < this.#medidas[i].length; j++) {

                acumulador += this.#medidas[i][j]
                contador++
            }
        }

        return (acumulador / contador).toFixed(2);
    }

    eliminaCiudad(ciudad) {
        if (this.comprobarSiExiste(ciudad)) {
            for (let i = 0; i < this.#medidas.length; i++) {

                if (this.#medidas[i][0] === ciudad) {
                    this.#medidas.splice(i, 1)
                    return true;
                }

            }

        } else
            return false
    }

    toConsole() {
        console.table(this.#medidas)
    }

    toHTML() {
        const tabla = document.createElement("table")
        const trhead = document.createElement("tr")

        //rellenar cabecera
        const th1 = document.createElement("th")
        th1.textContent = "CIUDAD"
        trhead.appendChild(th1)
        for (let i = 1; i < 31; i++) {
            const th = document.createElement("th")
            th.textContent = "Dia " + i
            trhead.appendChild(th)
        }
        const thfinal = document.createElement("th")
        thfinal.textContent = "MEDIA"
        trhead.appendChild(thfinal)
        tabla.appendChild(trhead)
        //rellenar body
        this.#medidas.forEach(fila => {
            const trbody = document.createElement("tr")
            fila.forEach(element => {
                const td = document.createElement("td")
                td.textContent = element
                trbody.appendChild(td)

            });
            //añadir media
            const tdMedia = document.createElement("td");
            tdMedia.textContent = this.mediaMedidas(fila[0]);
            trbody.appendChild(tdMedia);
            tabla.appendChild(trbody)
            const tablaDiv = document.getElementById("tabla");
            tablaDiv.innerHTML = "";
            tablaDiv.appendChild(tabla);
        });



    }

    comprobarSiExiste(ciudad) {
        const key = ciudad.toUpperCase()
        this.#medidas.some((fila) => {
            fila.some((elemento) => {
                if (elemento === key) {
                    return true
                }
            })
        })
        return false;
    }
}