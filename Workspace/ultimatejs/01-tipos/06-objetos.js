// Personaje de TV

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 17;

let personaje = {
    nombre: "Juan", //se cambia el nombre por el let
    anime: "Demon Slayer",
    edad: 17,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);//se elijio la propiead anime

personaje.edad = 13;
let llave = "edad";
personaje[llave] = 13;

delete personaje.anime;//se elimna la propiead para que no muestre anime
console.log(personaje);
