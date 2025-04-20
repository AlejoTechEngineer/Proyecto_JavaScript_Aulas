/**
 * Crear un array de longitud N
 * Sus elementos son de 1 hasta N
 */
let longitud = 9;

function crearArray(n){
    if (n <= 0) {
        return [];
    }
    let arr = [];
    for (let i = 0; i<n; i++){
        arr[i] = i+1;
    }
    return arr;

}
let resultado = crearArray(longitud);
console.log(resultado);
