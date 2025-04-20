//Vamos a listar las propiedades de un objeto que fue creado de manera dinamica

const punto = {
    x:10,
    y:15,
    dibujar(){
        console.log("Dibujando");
    }
};
//delete punto.dibujar;

if("dibujar" in punto){
    punto.dibujar();
}

// let keys = Object.keys(punto);
// console.log(Object.keys(punto));
//Acccedemos a la llave y el valor
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

//Otro metodo que podemos utilizar es:

for (let entry of Object.entries(punto)){
    console.log(entry);
}

//Otro metodo que podemos utilizar es:

for (let llave in punto){
    console.log(llave, punto[llave]);
}