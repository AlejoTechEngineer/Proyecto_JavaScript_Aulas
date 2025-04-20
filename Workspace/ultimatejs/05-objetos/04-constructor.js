//Cuando creamos funciones contrusctoras se coloca la primera letra en mayuscula del nombre de la función UpperCamelCase
//crear objejo que tenga id que va a tener valor de 1 y que tenga una funcion de nombre Recuperar Clave 
function Usuario(){
    this.id = 1;
    this.recuperarClave = function (){ //ahora se llama metodo en ves de funcion, por ende un metodo es una funcion asignada a un objeto
        console.log("Recuperar Clave...");
    }
}

//Entonces si queremos crear un objeto de usuario no solo debemos llamar la función debemos crear un usuario con New

let usuario = new Usuario(); //se crear un objeto, se vincula el prototipo de la funcion con el objeto, a this se le asigna el objeto, retorna this

console.log(usuario);
