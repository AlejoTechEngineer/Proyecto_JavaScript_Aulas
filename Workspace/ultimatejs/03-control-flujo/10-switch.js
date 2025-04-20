//Nos permite indicar al codigo explicitamente a donde se debe ir dependiendo del valor que tiene una variable


let accion ="listar";
switch(accion){
    case "listar":
        console.log("Accion de listar");
        break;
    case "guardar":
        console.log("Accion de guardar");
        break;
    default:
        console.log("Accion no reconocida");
}