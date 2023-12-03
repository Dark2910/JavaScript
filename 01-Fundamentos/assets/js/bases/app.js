document.write('Hola mundo HTML.');

// Declaracion de variables
 var a = 10;

 let x = 33.33,
    y = 33.33,
    z = 33.33,
    txt1 = 'Hola ',
    txt2 = 'Kratos'
    resultado = x + y + z;

/**
 * Para la declaracion de constantes en multiples lenguajes de programacion se pide que estas se declaren capitalizadas en mayusculas
 * pero en el caso de java no, a no ser que estas constantes sean variables de entorno es decir cuando sean declaradas de manera global en la aplicacion.
 * 
 * Otra cosa a mencionar es que para concatenar cadenas de texto se utiliza el simbolo + 
 */
const saludo = txt1 + txt2; 

// Informacion
console.info( {saludo} );
// Mensajes por consola
console.log( {resultado} );
// Warning
console.warn('Warning message');
// Error
console.error('Error message');
// Tambien existe una forma en la que podemos imprimir multiples variables
console.table( {a, x, txt1, txt2} );

/**
 * Actualemente no se recomienda utilizar var para hacer la declaracion de variables en js
 * En js existe algo llamado window, vamos a decir que es nuestra hoja principal donde existe cierta informacion y
 * variables que pueden llegar a ser modificadas por error y es por este motivo que no es recomendable hacer la declaracion de variables de esta manera 
 */

// var outerWidth = 420;
// var outerHeight = 620;

let outerWidth = 420;
let outerHeight = 620;