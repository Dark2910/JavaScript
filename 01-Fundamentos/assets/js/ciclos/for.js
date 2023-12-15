
const heroes = ['batman','superman','mujer maravilla','aquaman'];

console.warn( 'for' );
for( let i = 0; i < heroes.length; i++){
    console.log( heroes[i] );
};

//En ECMAScript 6, este bucle itera sobre objetos iterables (arrays, cadenas, etc.) y proporciona el valor en lugar del índice.
console.warn( 'for of' );
for( let heroe of heroes ){
    console.log( heroe );
};

//Utilizado para iterar sobre las propiedades enumerables de un objeto. Cada iteración proporciona el nombre de una propiedad.
console.warn( 'for in' );
for( let i in heroes ){
    console.log( heroes[i] );
};

console.warn( 'foreach' );
heroes.forEach(element => {
    console.log(element)
});