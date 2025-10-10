var sedes = ["Ayuntamiento","Polideportivo","Instituto","Mercado", "Colegio"]
var partidos = ["PV", "OV", "VpSI", "UPV"]


var tabla = []
tabla[0] = []
tabla[0][0] = "Sede"
//creamos la primera fila de la tabla con los nombres de los partidos
for (let i = 0; i < partidos.length; i++) {
    tabla[0][i+1] = partidos[i]
}

for (let i = 0; i < sedes.length; i++) {    
    //añadimos a la primera columna los nombres de las sedes
    tabla[i+1] = []
    tabla[i+1][0] = sedes[i]
    for (let j = 0; j < partidos.length +1; j++) {
         tabla[i+1][j+1] = Math.floor(Math.random()*6) +5;
    }
    
}

console.table(tabla)
