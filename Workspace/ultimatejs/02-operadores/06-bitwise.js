//Decimal: 0,1,2,3,4,5,6,7,8,9
//Binario: 0,1
//Un bit es un digito en binario 0 1
//Byte son 8 bits
//Byte: 00000000 -> 0
//Byte: 00000001 -> 1
//Byte: 00000010 -> 2
//Byte: 00000011 -> 3
//Byte: 00000100 -> 4
//Byte: 00000101 -> 5
//Byte: 00000110 -> 6
//Byte: 00000111 -> 7

//Utilizamos el operador OR |
console.log(1 | 3); // Entonces el numero 1 es 00000001 y termina en 1 entonces tomamos este numero 
// y por otra parte tenemos el numero 3 que termina tambien en 1 pero tiene antes un 1 entonces colocamos 11
// y luego ambos numeros representados en bytes son solo 0 entonces rellenamos con ceros y queda el resultado entonces de 00000011
// y por ende el resultado final en este caso sera el numero 3 que es el valor del resultado.

console.log(1 | 4); //00000101 y por ende el resultado final es 5
//Entonces sel operador bitwise lo que hace es tomar cada numero convertirlo a byte y va a crear un nuevo byte con la concatenación de ambos
//Y por ende lo va a transmitir como el resultado final.

console.log(3|5); //00000111 y por ende el resultado es 7

//Ahora utilizamos el operador BitWise de AND &
console.log(1 & 3); //En este caso necesitamos que ambos bytes sean 1 para que marque como 1 entonces:
//El ultimo bit de 1 es 1 ya que 1 es 00000001 y de igual manera es 1 para 3 ya que 3 es 00000011, entonces marcamos como ultimo bit 1
//Ahora el penultimo bit para 1 es 0 ya que 1 es igual a 00000001 y para 3 es uno ya que 3 es 00000011, por ende:
//En este caso como 1 es 0 y 3 es 1 se marca como 0 y el resto de bit para completador en los dos numeros son 0 entonces se rellena la respuesta con 0
//Por ende la respuesta final es 00000001 que en este caso sería 1
console.log(1 & 4); //00000000 entonces aca la respuesta es 0
console.log(1 & 5); //00000001 entonces la respuesta es también 1