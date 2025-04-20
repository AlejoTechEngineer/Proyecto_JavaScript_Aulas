let i = 2;
// while (i<2){
//     if(i%2==0)
//     {
//         console.log("El numero es par", i);
//     }
//     i++;
// }
// console.log("Saliendo del ciclo while");

// Lo que hace este operador es evaluar al final en ves de al comienzo comos e haría con el ciclo "while".

do {
    if(i%2==0)
        {
            console.log("El numero es par", i);
        }
        i++;
} while (i<2);

//Entonces lo que se puede ver es que en en el ciclo WHILE se evalua primero la condicion y si esta se cumple se ejecuta el codigo
//Mientras en el ciclo DO WHILE se ejecuta el codigo primero y luego se evalua la condición y si esta se cumple entonces vuelve a subir y se ejecuta de nuevo el codigo