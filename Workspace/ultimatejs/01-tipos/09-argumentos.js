function suma(a, b, c, d, e)// se pasan los parametros a,b,c,d,e
{
    console.log(arguments);
    return a+b+c+d+e;// en el caso que b fuera 2 sera un parametro es decir cuando colocamos valores dentro de las funciones son parametros
}

let resultado = suma(5,6,1,2,3);//5,6,1,2,3 son argumentos es decir los valores que le pasamos a la función son argumentos
console.log(resultado);
console.log(typeof suma);
