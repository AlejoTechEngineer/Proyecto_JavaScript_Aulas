//Cuando queremos ejecutar una porcion de codigo mas de una vez, para esto utilizamos los loops y son 5:
// while
// Do while
// For
// For in
// for of
// Vamos a empezsar con el ciclo while

let a = 0;
while (a<10){
    console.log(a);
    a++;
}

//Ejecutamos logica para poder imprimir cuales son los numeros pares

let i = 0;
while (i<10)
    {
        if(i%2==0)
            {
            console.log("Numero es Par", i);
        }
        i++;
}

console.log("Fuera del while");


