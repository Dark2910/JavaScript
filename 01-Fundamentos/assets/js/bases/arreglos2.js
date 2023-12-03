let juegos = ['god of war', 'Call of duty', 'Grant theft auto', 'Fifa'];
console.log( 'largo:', juegos.length );

let primero = juegos[ 0 ];
let ultimo = juegos[ juegos.length - 1 ];

console.log({ primero, ultimo });

juegos.forEach((value, index, array) => {
    console.log({ value, index, array });
});

let nuevoLongitud = juegos.push( 'Pokemon' );
console.log({ nuevoLongitud, juegos });

// Agregar al inicio del arreglo un nuevo elemento
nuevoLongitud = juegos.unshift( 'assassins creed' );
console.log({nuevoLongitud, juegos });

// Borrar ultimo elemento
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let pos = 1;
console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2); // Borrar elemento de un arreglo
console.log({ juegosBorrados, juegos });

// Buscar el indice de un elemento
let fifaIndex = juegos.indexOf( 'Fifa' );
console.log({ fifaIndex });