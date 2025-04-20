//Las funciones en JavaScript tambien son objetos de primera clase

function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario 
let user = new U("Alejo");
console.log(user);

function of(Fn,arg){
    return new Fn(arg);

}

let user1 = of(Usuario, "alejo");
console.log(user1);

//Vamos retornarla dentro de otras funciones
function returned(){
    return function(){
        console.log("Hola Mundo");
    }
}
let saludo = returned();
saludo();
