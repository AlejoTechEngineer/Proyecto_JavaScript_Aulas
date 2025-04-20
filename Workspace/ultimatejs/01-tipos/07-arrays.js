//Arrays = colección o arreglos
let animales = ["chanchito", "caballo"];//listado de dos animales
console.log(animales);

console.log(animales[0]);//accedo al primer elemento

animales[2] = "dragón";//se agrego dragon al array
console.log(animales[2]);

animales [10] = "pez";//se establece una logica del array de 11 pero con 7 valores vacios y el final es pez
console.log(animales);

console.log(animales[7]);//imprimo el valor del animal 7 que esta vacio

console.log(typeof animales);//indica que es un objeto porque los arrays son objetos

console.log(animales.length);//devuelve la cantidad de elementos dentro del arry y podemos ver que son 11