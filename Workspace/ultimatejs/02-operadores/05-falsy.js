//short-circuit

//Valores que se evaluan el false porque cuando utilicemos valores Or o AND debemos evaluar


//Entonces || evalua primero el primer elemento que esta en true siempre y cuando todos hayan evaluado en true
//Entonces && evalua primero el ultimo elemento que esta en true siempre y cuando todos hayan evaluado en true

/**
 * Si utilizo || o OR devuelve el primero que evalua en true
 * Si utilizo && o AND devuelve el ultimo que evalua en true
 */

//Lo primero es determinar los valores en false
//EL primero que se devuelve en false es FALSE o false
//Luego 0
//Luego ""
//Luego null
//Luego undefined
//Finalmente Nan
//Todos estos valores sreciben el nombre de Falsy

let nombre = "Chanchito";
let username = nombre || "Anonimo";
console.log(username);

//En este caso como utilizo || el primer valor es Chanchito y por ende se muestra asi en Chrome

// Ahora el operador && se utiliza para poder ejecutar funciones siempre y cuando el primer operador haya evaludo en true
function fn1(){
    console.log("Soy función 1");
    return false;
}

function fn2()
{
    console.log("Soy función 2");
    return true;
}

let x = fn1() && fn2();