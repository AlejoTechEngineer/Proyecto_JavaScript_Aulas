const user = {id: 1};

user.name = "nicolas";
user.guardar = function()
{
    console.log("guardando...", user.name);
}
user.guardar();

delete user.name;
delete user.guardar;
console.log(user);
// Por ende podemos hacer cambios de todas las propiedades y todo de la variable const user, pero lo que no podemos hacer es que deje de ser un objeto.

// Ahora si no queremos que este objeto creado no se puede modificar utilizamos object.freeze

// const user1 = Object.freeze({id: 1});
// user1.name = "nico";

// console.log(user1);

// Entonces como podemos ver no se puede cambiar el valor por ningun motivo, vamos a intentar entonces cambiar la propiedades
// const user1 = Object.freeze({id: 1});
// user1.name = "nico";
// user1.id = 2;
// console.log(user1);

//Ahora si queremos cambiarle el valor a las propiedades que ya tiene pero no agregarle o quitarle propiedades entonces utilizamos seal es decir que sus propiedades esten fijas
//pero cambiandole los valores entonces usamos seal
const user1 = Object.seal({id: 1});
user1.name = "nico";
user1.id = 2;
console.log(user1);



