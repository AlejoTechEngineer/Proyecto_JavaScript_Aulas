//Pasar el array y el indice
//El valor de indice no puede ser menor que 0
//El elemetno tiene que existir en el array sino debe indicar que el elemento no existe.

function getbyIdx(arr, idx){
    if (idx<0 || arr.length <= idx){
        return "El elemento no existe";
    }

    return arr[idx];
}



let resultado = getbyIdx([1,2,3,4,5,6,7],3)
console.log(resultado);