/** 
 * Cuando quiero detener la ejecución de un loop (while, for, for each, for in, do while ) porque estaba buscando un elemento y lo encontre o hice un calculo y ya lo determine
 * Y ya no es necesario continuar con el loop
 */

// Break nos permite salir del loop

// Continue nos permite saltar la iteracion

let i = 0;
while (i<6){
    i++;
    if (i===2){ //Aca se da la instrucción de que salte el 2 y continue con el resto
        continue;
    }
    console.log(i);
}
let a = 0;
while (a<6){
    a++;
    if (a===5){ //Aca se da la instrucción de que finalice en el 2 y cierre el ciclo
        break;
    }
    console.log(a);
}