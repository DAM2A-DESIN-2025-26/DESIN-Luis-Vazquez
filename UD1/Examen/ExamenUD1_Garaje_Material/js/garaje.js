class Garaje {
    _coches;
    _numMaxCoches;

    constructor(numMaxCoches) {
        this._coches = []
        this._numMaxCoches = numMaxCoches
    }

    getNumeroCoches() {

        return this._coches.length;
    }

    getCoche(matricula) {
        //TODO matricula da igual minusculas o mayusc
        //si la matricula coincide con la que pasamos, recuperamos el coche
        for (let i = 0; i < this._coches.length; i++) {
            if (matricula == this._coches[i].Matricula()) {
                const coche = this._coches[i]
                return coche
            }
        }


    }
    eliminaCoche(matricula) {
        //TODO matricula da igual minusculas o mayusc
        //si la matricula coincide con la que pasamos, eliminamos el coche
        let contador = 0
        this._coches.forEach(coche => {
            contador ++
             if (matricula == coche.Matricula) {
                this._coches.splice(contador,1);

                return true
            }
        });
        return false
    }
    existeCoche(matricula) {
        //TODO matricula da igual minusculas o mayusc
        //si la matricula coincide con la que pasamos, devolvemos true
        this._coches.forEach(coche => {
             if (matricula === coche.Matricula) {
                return true
            }
        });

        return false

    }

    addcoche(marca, modelo, matricula, color) {
        //comprobamos que no existe la matricula en el array de coches
        if (this.existeCoche(matricula)) {
            return false
        }
        //comprobamos tamaño maximo de coches
        if (this._coches.length>= this._numMaxCoches) {
            return false
        }

        const coche = new Coche(modelo, marca, matricula, color);
        this._coches.push(coche)

        return true
    }
}

