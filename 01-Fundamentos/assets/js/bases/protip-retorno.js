// Un return puede retornan objetos
function crearPersona ( nombre, apellido ){
    return{ nombre, apellido }
}
const persona = crearPersona ( 'Eduardo', 'Herrera' );
console.log( persona );

// En el caso de una funcion flecha esta es su declaracion 
const crearPersona2 = ( nombre, apellido ) => ({ nombre, apellido });
const persona2 = crearPersona2 ( 'Eduardo', 'Herrera' );
console.log( persona2 );

// arguments es algo que esta de manera implicita en este tipo de arreglos, en los tipo flecha esto no existe
function imprimeArgumentos () {
    console.log( arguments );
}
imprimeArgumentos( 10, true, false, 'Eduardo', 'Hola' );

// Los tres puntos ... hacer referencia al parametro rest el cual indica que todos los argumentos que sean enviados al parametro arg sean alamcenados en un arreglo
const imprimeArgumentos2 = ( ...arg ) => arg;
console.log( imprimeArgumentos2(10, true, false, 'Eduardo', 'Hola') );

// Tambien podemos hacer que los valores retornados sean almacenados de manera individual
const [num, casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Eduardo', 'Hola');
console.log({num, casado, vivo, nombre, saludo});

/**
 * La razon por la que apellido esta entre llaves es porque crearPersona2 retorna un objeto y se extrae una sola porpiedad de todas las que posee este objeto (apellido)
 * para saber que propiedad es la que queremos extraer hay que mandarla a llamar
 */
const { apellido: nuevoApellido } = crearPersona2( 'Eduardo','Herrera');
console.log({ nuevoApellido });

// Objeto tony
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I','Mark V','Hulkbuster']

};

/* const imprimePropiedades = ( propiedades ) =>{
    console.log( propiedades.nombre );
    console.log( propiedades.codeName );
    console.log( propiedades.vivo );
    console.log( propiedades.edad );
    console.log( propiedades.trajes );
}; */

/**
 * Esto se conoce como desestructuracion de argumentos y la razon por la que edad esta igualada a 20 es porque
 * en caso de que edad no posea un valor al momento de extraer los datos... 20 sera el valor definido por defecto
 */
 const imprimePropiedades = ({ nombre, codeName, vivo, edad = 20, trajes }) =>{
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad } );
    console.log({ trajes });
};
imprimePropiedades( tony );
