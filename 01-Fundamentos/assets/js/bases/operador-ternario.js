/**
 * Días de semana abrimos a las 9
 * pero los fines de semana abirmos a las 11
 * 
 */
// Entrar a un sitio web, para consultar si esta abierto hoy

const dia = 1;
const horaActual = 12;

let horaApertura;
let mensaje;   // Esta abierto, cerrado, hoy abrimos a las XX

/*  // if ( dia === 0 || dia == 6 ){
 if ( [0,6].includes( dia ) ){
    console.log('Fin de semana');
    horaApertura = 9;

 }else{
    console.log('Día de semana');
    horaApertura = 11;
    
};

if (horaActual >= horaApertura) {
     mensaje = 'Abierto';
     
    } else {
     mensaje = `Cerrado, abrimos a las ${horaApertura}`;
    
 } */

// operador ternario
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'abierto' : `Cerrado, abrimos a las ${horaApertura}`;

console.log({ horaActual, horaApertura, mensaje });
