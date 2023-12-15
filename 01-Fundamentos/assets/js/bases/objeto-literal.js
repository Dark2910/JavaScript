// Todo lo que esta dentro del objeto personaje son sus propiedades
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V','Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },

    /**
     * Esta propiedad se decralara como una cadena por la razón del espacio que lleva, 
     * por sintaxis es recomendable utilizar un guión -, pero tambien esta permitido utilizar el signo de dollar $ o uno guión bajo _
     */
    'Ultima-pelicula': 'Infinity War'
};

console.log( personaje );

console.log( 'Nombre', personaje.nombre );
console.log( 'Nombre', personaje['nombre'] );
console.log( 'Edad', personaje['edad'] );

console.log( 'Coords', personaje.coords );
console.log( 'Lat', personaje.coords.lat );

console.log( 'No. Trajes', personaje.trajes.length);
console.log( 'Ultimo traje', personaje.trajes[ personaje.trajes.length - 1 ] );

const x = 'vivo';
console.log( 'Vivo',personaje[x] );

console.log( 'Última película',personaje['Ultima-pelicula'] );

// Mas detalles

delete personaje.edad;
console.log( personaje );

// Podemos hacer que este objeto funcione como un arreglo, es decir que cada una de las propiedades tenga una posicion
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

personaje.dinero = 1000000000000000000;
personaje.casado = false;

// Con este método congelamos muestro objeto y se evita hacer cambios, pero no congela los arreglos u objetos que tenga dentro, es decir aun se pueden hacer ediciones en en estos
Object.freeze( personaje );
personaje.dinero = 1;
personaje.casado = true;
// Cambio en el objeto ubicacion
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

// Mostrar propiedades y valores
const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( propiedades, valores);