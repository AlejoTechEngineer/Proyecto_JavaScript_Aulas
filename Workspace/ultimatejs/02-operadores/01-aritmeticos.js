/**
 * Expression = es cualquier linea de codigo que evalue en un valor ejm 4+6 = 10, o x= 4, o mifuncion(), cada vez que el codigo hace algo y se obtiene un valor de este es un expression. Se le peude hacer un console.log
 * Declaration = creas algo que se referencia en un futuro viene con Let, function, const, async function, class, export, import. No se les puede hacer un console.log
 * Statement = declaracion que no se utiliza en un futuro y puedo realizar tareas o escribir logica son: if, for, else, switch. No se les puede hacer un console.log
 */
 /**
  * Tipos de operadores:
  * Aritmeticos
  * Asignacion
  * Comparacion
  * Logicos
  * Bitwise
 */
//OPERADORES ARITMETICOS
let a = 5;
let b = 7;//ESTA ES UNA EXPRESIÓN

// console.log(a+b, "adición");//suma ESTA ES UNA DECLARACIÓN
// console.log(a-b, "resta");//resta
// console.log(a*b, "multiplicación");//multiplicación
// console.log(a/b, "división");//división
// console.log(a%b, "modulo");//módulo corresponde a lo que sobra de una división Ejm 7/5 da como resultado 2 porque 5 cabe una vez en 7 y faltan 2
// console.log(a**b, "potencia");//potencia entonces a elevado a la b o 5 elevado a 7

//Incrementar
console.log(a);// ver valor de a
console.log(++a);// incrementa el valor de a en 1
console.log(a++);// imprime el valor de a, y luego le suma 1
console.log(a);// ver el valor final de a

//Decrementar
console.log(a);// ver valor de a
console.log(--a);// incrementa el valor de a en 1
console.log(a--);// imprime el valor de a, y luego le suma 1
console.log(a);// ver el valor final de a