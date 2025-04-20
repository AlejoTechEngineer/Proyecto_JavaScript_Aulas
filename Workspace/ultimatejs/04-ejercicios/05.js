// let array = [2,5,7,15,-5,-100,55]

// function getMenorMayor(arr){

//     let maximo = Math.max(2,5,7,15,-5,-100,55);
//     let minimo = Math.min(2,5,7,15,-5,-100,55);
//     return [minimo, maximo];

// }
// let numeros = getMenorMayor(array);
// console.log(numeros);

//Ó
let array = [2,5,7,15,-5,-100,55]

function getMenorMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];

    for (numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }

    return [menor, mayor];
}
let numeros = getMenorMayor(array);
console.log(numeros);

