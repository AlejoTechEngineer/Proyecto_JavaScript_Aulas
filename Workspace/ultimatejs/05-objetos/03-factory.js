//Con estas funciones creamos objetos de manera sencilla y no repetititva

function crearUsuario(name,email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log("Recuperando Clave...");
        },
    };
}

let user1 = crearUsuario("Nicolas","alejo@hotmail.com");
let user2 = crearUsuario("Felipe","fel@hotmail.com");
console.log(user1,user2);