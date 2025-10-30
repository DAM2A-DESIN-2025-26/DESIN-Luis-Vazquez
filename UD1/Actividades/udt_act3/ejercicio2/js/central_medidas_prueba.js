// Referencias HTML
const ciudadInput = document.getElementById("ciudad");
const medidasInput = document.getElementById("medidas");
const manualRadio = document.getElementById("manual");
const aleatorioRadio = document.getElementById("aleatorio");
const botonGuardar = document.getElementById("botonGuardar");
const botonBorrar = document.getElementById("botonBorrar");

const tablaDiv = document.getElementById("tabla");
const tempMediaDiv = document.getElementById("tempMedia");
const erroresDiv = document.getElementById("errores");

// Instancia de la central
const central = new CentralMedidas();

// Cargar desde localStorage
if (localStorage.getItem("medidas")) {
    central.fromJSON(localStorage.getItem("medidas"));
    central.toHTML();
    tempMediaDiv.textContent = "Media total: " + central.mediaMedidasTotal();
}

// Manejo de radio buttons: limpiar textarea si cambia
manualRadio.addEventListener("change", () => medidasInput.value = "");
aleatorioRadio.addEventListener("change", () => medidasInput.value = "");

// Guardar ciudad y medidas
botonGuardar.addEventListener("click", () => {
    erroresDiv.textContent = "";
    const ciudad = ciudadInput.value.trim().toUpperCase();
    if (!ciudad) {
        erroresDiv.textContent = "Introduce una ciudad.";
        return;
    }

    let ok = false;

    if (aleatorioRadio.checked) {
        ok = central.insertaAleatorio(ciudad);
    } else {
        const raw = medidasInput.value.trim();
        if (!raw) {
            erroresDiv.textContent = "Introduce 30 valores separados por comas (modo manual).";
            return;
        }

        const parts = raw.split(",").map(s => s.trim()).filter(s => s !== "");
        const valores = parts.map(s => Number(s));

        if (valores.length !== 30) {
            erroresDiv.textContent = `Se requieren exactamente 30 valores. Has introducido ${valores.length}.`;
            return;
        }

        for (let i = 0; i < valores.length; i++) {
            const n = valores[i];
            if (!Number.isInteger(n)) {
                erroresDiv.textContent = `El valor "${parts[i]}" (posición ${i+1}) no es un entero válido.`;
                return;
            }
            if (n < -10 || n > 40) {
                erroresDiv.textContent = `El valor ${n} (posición ${i+1}) está fuera del rango [-10,40].`;
                return;
            }
        }

        ok = central.insertaMedidas(ciudad, valores);
    }

    if (!ok) {
        erroresDiv.textContent = "La ciudad ya existe o los datos no son correctos.";
        return;
    }

    // Actualizar tabla y media
    central.toHTML();
    tempMediaDiv.textContent = "Media total: " + central.mediaMedidasTotal();

    // Guardar en localStorage
    localStorage.setItem("medidas", central.toJSON());

    // Limpiar inputs
    ciudadInput.value = "";
    medidasInput.value = "";
});

// Borrar ciudad
botonBorrar.addEventListener("click", () => {
    erroresDiv.textContent = "";
    const ciudad = ciudadInput.value.trim().toUpperCase();
    if (!ciudad) {
        erroresDiv.textContent = "Introduce una ciudad para borrar.";
        return;
    }

    const ok = central.eliminaCiudad(ciudad);
    if (!ok) {
        erroresDiv.textContent = "La ciudad no existe.";
        return;
    }

    central.toHTML();
    tempMediaDiv.textContent = "Media total: " + central.mediaMedidasTotal();
    localStorage.setItem("medidas", central.toJSON());
    ciudadInput.value = "";
    medidasInput.value = "";
});