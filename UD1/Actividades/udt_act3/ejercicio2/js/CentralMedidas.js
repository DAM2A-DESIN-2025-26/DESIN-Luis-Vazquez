class CentralMedidas {
    #medidas;
    constructor(medidas = []) {
        this.#medidas = medidas;
    }

    insertaMedidas(ciudad, valores) {
        if (typeof ciudad !== "string" || !Array.isArray(valores) || valores.length !== 30) {
            alert("Datos incorrectos");
            return false;
        }

        if (this.#medidas.some(fila => fila[0] === ciudad)) {
            alert("La ciudad está repetida");
            return false;
        }

        this.#medidas.push([ciudad, ...valores]);
        return true;
    }

    insertaAleatorio(ciudad) {
        if (this.#medidas.some(fila => fila[0] === ciudad)) {
            alert("La ciudad está repetida");
            return false;
        }

        const valores = Array.from({length: 30}, () => Math.floor(Math.random() * 51) - 10);
        this.#medidas.push([ciudad, ...valores]);
        return true;
    }

    mediaMedidas(ciudad) {
        const fila = this.#medidas.find(f => f[0] === ciudad);
        if (!fila) return false;
        const sum = fila.slice(1).reduce((a,b)=>a+b,0);
        return (sum/30).toFixed(2);
    }

    mediaMedidasTotal() {
        if (this.#medidas.length === 0) return "0.00";
        const total = this.#medidas.reduce((sum,fila)=> sum + fila.slice(1).reduce((a,b)=>a+b,0), 0);
        return (total / (this.#medidas.length*30)).toFixed(2);
    }

    eliminaCiudad(ciudad) {
        const idx = this.#medidas.findIndex(f => f[0] === ciudad);
        if (idx === -1) return false;
        this.#medidas.splice(idx,1);
        return true;
    }

    toConsole() {
        console.table(this.#medidas);
    }

    toHTML() {
        const tabla = document.createElement("table");
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");

        trHead.appendChild(document.createElement("th")).textContent = "Ciudad";
        for (let i=1;i<=30;i++){
            trHead.appendChild(document.createElement("th")).textContent = "Día " + i;
        }
        trHead.appendChild(document.createElement("th")).textContent = "Media";
        thead.appendChild(trHead);
        tabla.appendChild(thead);

        const tbody = document.createElement("tbody");

        
        this.#medidas.forEach(fila => {
            const tr = document.createElement("tr");
            fila.forEach(dato => {
                const td = document.createElement("td");
                td.textContent = dato;
                tr.appendChild(td);
            });
            const tdMedia = document.createElement("td");
            tdMedia.textContent = this.mediaMedidas(fila[0]);
            tr.appendChild(tdMedia);
            tbody.appendChild(tr);
        });

        tabla.appendChild(tbody);

        const tablaDiv = document.getElementById("tabla");
        tablaDiv.innerHTML = "";
        tablaDiv.appendChild(tabla);
    }

    toJSON() {
        return JSON.stringify(this.#medidas);
    }

    fromJSON(json) {
        this.#medidas = JSON.parse(json);
    }
}