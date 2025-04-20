// and, or, not

// and &&
let mayor = false;
let suscrito = true;
// console.log(true && true); evalua lo que se encuentra a su izquierda y a su derecha es true y si es asi imprime true sino imprime false
// console.log(false && true); evalua lo que se encuentra a su izquierda es false y a su derecha es true y si es asi imprime true sino imprime false
console.log("operador and",mayor&&suscrito);

//or
//Este operador evalua si uno de los dos es true y devuelve true, si los dos son false devuelve false
console.log("operador or",mayor||suscrito);

//not
//Cambia o invierte el valor de false a true o viceversa
console.log("operador not",!mayor);

let soloCatalogoInfantil = !mayor;