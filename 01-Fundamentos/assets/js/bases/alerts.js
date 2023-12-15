// Instrucciones bloqueantes
alert('Hola mundo');

let nombre = prompt('¿Cual es tu nombre?');
/**
 * En js existen variables vacias
 * Las variables vacias no tiene ningun dato almacenado pero,
 * no quiere decir que sean nulas... la siguiente impresion en pantalla lo explica mejor
 * 
 * si no anotamos ningun nombre solo se mostraran los asteriscos indicando que es una variable vacia, pero si cancelamos se mostrara un null
 */
console.log( '**' + nombre + '**' );

let seleccion = confirm('¿Estas seguro de lo que quieres hacer?');
console.log( seleccion );

 // console.log( global );