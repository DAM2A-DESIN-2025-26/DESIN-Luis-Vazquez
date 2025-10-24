class CentralMedidas {

    #medidas;

    constructor(medidas = []) {
        this.#medidas = medidas;
    }



    insertaMedidas(ciudad, valores) {

        //comprobacion para saber si los datos vienen en el formato correcto
        if (typeof ciudad !== "string" || !Array.isArray(valores) || valores.length !== 30) {
            alert("algun dato introducido no está en el formato correcto")
            return false;
        }
        //comprobacion para saber si los valores están en el rango
        for (let i = 0; i < valores.length; i++) {
            const numero = valores[i];
            if (numero < -10 || numero > 40) {
                alert("el numero " + numero + " no está en el rango -10/40")
                return false;
            }
        }
        //comprobacion para saber si existe el nombre de la ciudad en la matriz
        for (let i = 0; i < this.#medidas.length; i++) {
            const element = this.#medidas[i][0];

            if (element == ciudad) {
                alert("La ciudad está repetida")
                return false;
            }
        }
        this.#medidas.push([ciudad, ...valores])
        console.table(this.#medidas)
    }


    insertaAleatorio(ciudad) {

        let numerosAleatorios = [];

        //comprobacion para saber si existe el nombre de la ciudad en la matriz
        for (let i = 0; i < this.#medidas.length; i++) {
            const element = this.#medidas[i][0];

            if (element == ciudad) {
                alert("La ciudad está repetida")
                return false;
            }
        }

        for (let i = 0; i < 30; i++) {
            let numero = Math.floor(Math.random() * 41);
            
            numerosAleatorios.push(numero);
        }

        this.#medidas.push([ciudad, ...numerosAleatorios])

    }

    mediaMedidas(ciudad) {
        let acumulador = 0;
        let cantidad = 30;
        let encontrada = false;
        for (let i = 0; i < this.#medidas.length; i++) {

            if (ciudad === this.#medidas[i][0]) {
                for (let j = 1; j <= 30; j++) {
                    acumulador += this.#medidas[i][j]
                    encontrada = true
                }
                break;
            }
        }

        if (!encontrada) {
            alert("la ciudad " + ciudad + " no existe")
            return false
        }
        return ((acumulador / cantidad).toFixed(2))

    }

    mediaMedidasTotal() {
        let acumulador = 0;
        let cantidad = this.#medidas.length * 30;

        for (let i = 0; i < this.#medidas.length; i++) {
            for (let j = 1; j <= 30; j++) {
                acumulador += this.#medidas[i][j]
                break;
            }
        }
        return ((acumulador / cantidad).toFixed(2))
    }

    eliminaCiudad(ciudad) {

        for (let i = 0; i < this.#medidas.length; i++) {
            //investigar como implementarlo con find() (si se puede)
            if (ciudad == this.#medidas[i][0]) {
                this.#medidas.splice(i, 1);
                return true
            }
        }

        return false
    }

    toConsole() {

        console.table(this.#medidas)
    }

    toHTML() {
        //añadimos una columna media al #medidas
        for (let i = 0; i < this.#medidas.length; i++) {
            let ciudad = this.#medidas[i][0]
            let mediaMes = this.mediaMedidas(ciudad)

            this.#medidas[i].push(mediaMes)
        }

        //creamos la tabla

        let tabla = document.createElement("table")

        //generamos el thead (cabecera)
        let thead = document.createElement("thead")
        let tr = document.createElement("tr")
        let th = document.createElement("th")
       
            th.textContent = "Ciudad"
            tr.appendChild(th)
       
        for (let i = 0; i < 30; i++) {
            let thBucle = document.createElement("th")

            thBucle.textContent = "Dia " + (i+1)
            tr.appendChild(thBucle)
        }

        let thMedia = document.createElement("th")
        thMedia.textContent = "Media"
        tr.appendChild(thMedia)

        thead.appendChild(tr)
        tabla.appendChild(thead)

        //generamos el tbody (groso de la tabla)
        let tbody = document.createElement("tbody")

        for (let i = 0; i < this.#medidas.length; i++) {
            let tr = document.createElement("tr")
            
            for (let j = 0; j < this.#medidas[i].length; j++) {
                let element = this.#medidas[i][j];
                let td = document.createElement("td")
                td.textContent = element
                tr.appendChild(td)
            }

            tbody.appendChild(tr)
        }
        tabla.appendChild(tbody)

        document.getElementById("contenedor").appendChild(tabla)
    }
}