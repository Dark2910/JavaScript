const autos = ['supra','nsx','gtr r34'];
let i = 0;

console.warn( 'While' );

/* while( i < autos.length ){
    console.log( autos[i] );
    i++;
}; */

// Undefined
// Null
// false

while( autos[i] ){
    console.log( autos[i] );
    i++;
};

/**
 * A diferencia del while el do while tiene que primero se ejecuta el bloque de código y despues se verifica la parada
 */

console.warn( 'Do While' );
let j = 10;

do{
    console.log( autos[i] );
    j++;

}while( autos[i] );