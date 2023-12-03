
const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

/**
 * dia = 0 -> Asignacion
 * dia == '0' -> No importa el tipo de dato, solo tiene que conincidir
 * dia === 0 -> Ademas de verificar que sean iguales, comprueba que tipo de dato sea el mismo
 */
if ( dia === 0 ){
    console.log('Es domingo');
    
}else if ( dia === 1 ){
    console.log('Es lunes');
    
}else if ( dia === 2 ){
    console.log('Es martes');
    
}else{
    console.log('No es domingo');

};

const diaLetra = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes','sábado',];

const dialetra2 = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miércoles',
    4:'jueves',
    5:'viernes',
    6:'sábado',

};

console.log( diaLetra[dia] );
console.log( dialetra2[dia] );

//Podemos agregar codigo al objeto
const dialetra3 = {
    0:() => 'domingo',
    1:() =>{ console.log( 'hoy es:'); return 'lunes'},
    2:() =>{ console.log( 'hoy es:'); return 'martes'},
    3:() =>{ console.log( 'hoy es:'); return 'miércoles'},
    4:() =>{ console.log( 'hoy es:'); return 'jueves'},
    5:() =>{ console.log( 'hoy es:'); return 'viernes'},
    6:() =>{ console.log( 'hoy es:'); return 'sábado'},
    
};
console.log( dialetra3[dia]() );
