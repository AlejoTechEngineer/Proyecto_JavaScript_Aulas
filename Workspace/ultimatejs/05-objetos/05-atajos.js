//Cuando definimos un objeto creamos una variable
let obj = {}; //este es un atajo para llamar al constructor de objetos
let obj2 = new Object();

/**
 * new Array(); crea un array []
 * new String(); crea un String
 * new number(); crea un number 
 * new Boolean(); crea un boolean
 */

function Usuario(){
    this.name = "Chachito Feliz";
}

let user = new Usuario();
console.log(user.constructor);