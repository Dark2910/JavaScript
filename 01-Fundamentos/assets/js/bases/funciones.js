//  Esta es la funcion que suelo usar... la tradicional
function saludar( nombre ){
    console.log( arguments );
    console.log( 'Hola ' + nombre );
}
// Funcion anonima
const saludar2 = function( nombre ){
    console.log( 'Hola ' + nombre );
}
// Funcion de flecha
const saludarFlecha = () => {
    console.log( 'Hola flecha' );
}

const saludarFlecha2 = (nombre ) => {
console.log( 'Hola ' + nombre );
}

saludar( 'Eduardo', 40, false, 'CDMX' );
saludar2( 'Isable' );

saludarFlecha();
saludarFlecha2( 'Brenda' );


function sumar( a, b ){
    return a + b;
}

/**
 * La funcion suma2 tiene algo especial y es que podemos decir que esta resumida
 * cuando en una funcion solo se retorna un valor es recomendable reducir el codigo lo mas posible
 * 
 * const suma2 = (a, b) => {
 *   return a + b;
 * }
 */
const suma2 = (a, b) => a + b;

function getAleatorio (){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( suma2( 2, 3) );
console.log( getAleatorio2() );



