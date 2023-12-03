const esMayor = (a,b) => (a > b) ? a : b;
console.log( esMayor( 10, 20 ) );

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';
console.log( tieneMembresia(true));

const amigo = true;
const amigosArr = [
    'Petes',
    'Tony',
    'Dr. Stranger',
    (amigo) ? 'Thor' : 'loki',
    esMayor( 50, 45 ),
    // (() => 'Nick Fury')()
]

console.log( amigosArr );

const nota = 82;
const grado = (nota >= 95) ? 'A+' :
              (nota >= 90) ? 'A'  :
              (nota >= 85) ? 'B+' :
              (nota >= 80) ? 'B'  :
              (nota >= 75) ? 'C+' :
              (nota >= 70) ? 'C'  : 'F';

console.log({ nota, grado });