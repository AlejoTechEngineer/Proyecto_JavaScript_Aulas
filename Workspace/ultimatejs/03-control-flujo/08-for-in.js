//Sirve para iterar las propiedades de un objeto

let user = {
    id: 1,
    name: "chanchito feliz",
    age: 25,

    
};

for (let propiedad in user){

    console.log(propiedad, user[propiedad]);
}

let animales = ["chanchito feliz", "dragon", "canguro"];
for (let indice in animales){
    console.log(indice, animales[indice]);
}
