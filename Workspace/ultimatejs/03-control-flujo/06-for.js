//for nos sirve también para crear loops a diferencia del while contiene todo dentro de una sola linea

// let i = 2;
// while (i<2){
//     if(i%2==0)
//         {
//             console.log("El numero es par", i);
//         }
//         i++;
// }
// console.log("Saliendo del ciclo While");

//for se compone de 3 expresiones
//la primera es la incialización
//la seguna es una comparación
//la tercera es una expresión que se ejecuta al terminar la iteración
for(let i = 3; i<10; i++){
        if(i%2==0)
            {
                console.log("El numero es par", i);
            }
            else{
                console.log("El numero es impar", i);
            }

}
console.log("Saliendo del ciclo for");