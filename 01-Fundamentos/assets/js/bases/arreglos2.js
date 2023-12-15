let juegos = ['god of war', 'Call of duty', 'Grant theft auto', 'Fifa'];
console.log( 'largo:', juegos.length );

let primero = juegos[ 0 ];
let ultimo = juegos[ juegos.length - 1 ];

console.log({ primero, ultimo });

juegos.forEach((value, index, array) => {
    console.log({ value, index, array });
});

// Adjunta(agrega) un nuevo elemento al final del arreglo
let nuevoLongitud = juegos.push( 'Pokemon' );
console.log({ nuevoLongitud, juegos });

// Agregar al inicio del arreglo un nuevo elemento
nuevoLongitud = juegos.unshift( 'assassins creed' );
console.log({nuevoLongitud, juegos });

// Borrar primer elemento
let primerJuego = juegos.shift();
console.log(primerJuegoBorrado);

// Borrar ultimo elemento
let ultimojuego = juegos.pop();
console.log({ ultimojuego, juegos });

//Elimina elementos de un arreglo y, si es necesario, inserta nuevos elementos en su lugar, devolviendo los elementos eliminados.
let pos = 1;
console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2); 
console.log({ juegosBorrados, juegos });

// Buscar el indice de un elemento
let fifaIndex = juegos.indexOf( 'Fifa' );
console.log({ fifaIndex });