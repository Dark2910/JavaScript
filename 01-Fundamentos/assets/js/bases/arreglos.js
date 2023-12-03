/* 
// Arreglo estático
const arr = new Array (10);
// Arreglo dinámico
const arr2 = [];
console.log( arr2 ); */

let videojuegos = ['Call Of Duty','Grand Theft Auto','Mario'];
console.log({ videojuegos }); 
console.log( videojuegos[0] );

let arrCosas = [
    true,
    'Fernanda',
    98707, 
    1 + 2,
    function (){},  // Funcion
    () => {},   // Funcion de flecha
    { a: 1 }, // Objeto literal
    ['X','Megaman','Zero','Dr. Light',[
        'Nemo',
        'Dory',
        'Pequeñin'
    ]]  // Arreglo con otro arreglo
];
console.log({ arrCosas }); 
console.log( arrCosas[7][3] ); 
console.log( arrCosas[7][4][2] ); 


