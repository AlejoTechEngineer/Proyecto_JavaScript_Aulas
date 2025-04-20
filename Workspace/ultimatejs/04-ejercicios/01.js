function cualEsMayor(a,b){
    if (a>b){
        return a;
    }else{
        return b;
    }
}
let a = 10;
let b = 5;

let mayor = cualEsMayor(a,b);
console.log(mayor);

//Ó

let c = 10;
let d = 5;

let mayorNumero = c>d ? c : d;
console.log(mayorNumero);
