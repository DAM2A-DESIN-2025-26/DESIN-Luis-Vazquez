/*devuelve: Un número que es el índice del primer elemento fuera de orden dentro
de dicho array.
Por ejemplo, si recibe el array [1,2,3,7,4] debería devolver el número 3
(es la posición donde hay un elemento fuera de orden
Si todos los elementos están en orden se devuelve un -1 */
var arr1 = [1, 2, 3, 5, 6]
var arr2 = [1, 3, 4, 5]
var arr3 = [1, 2, 3, 4, 5, 6]


function numerosCorrectos(arrayNum) {

    for (let i = 0; i < arrayNum.length; i++) {

        if (arrayNum[i]<arrayNum.length) {
            if (arrayNum[i] + 1 != arrayNum[i + 1]) {
                return i + 1
            }
        }

    }
    return -1;

}

var primeraPrueba = numerosCorrectos(arr1);
var segundaPrueba = numerosCorrectos(arr2);
var terceraPrueba = numerosCorrectos(arr3);

console.log(primeraPrueba + "\n" + segundaPrueba + "\n" + terceraPrueba + "\n")



