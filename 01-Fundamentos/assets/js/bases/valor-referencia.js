/**
 * En javaScript todos los primitivos son pasados por valor y todos los objetos son pasados por referencia
 */

// Primitivo
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Objeto
let juan = { nombre: 'Juan' };
let ana = {...juan};
ana.nombre = 'Ana';

/**
 * Al imprimir las variables se espera que cada una tenga su nombre correspondiente, pero no es asi ya
 * que los valores son pasados por referencia es decir el valor apunta a la misma unidad de memoria
 * 
 * let juan = { nombre: 'Juan' };
 * let ana = juan;
 * ana.nombre = 'Ana';
 * 
 * Para solucionarlo hay que declarar que el valor recibido es un objeto y adjuntar el operador spread. Este operador indica al 
 * primitivo que almacene el nuevo valor en otro espacio de memoria
 *
 */
console.log({juan, ana});

// Es el mismo caso para los objetos, solo que hay que adicionar las llaves porque estas mandando un objeto como parametro
const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Pete' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });

// Arreglos
/**
 * Para este caso es exactamente lo mismo, solo que en lugar de agregar llaves, son corchetes porque es un arreglo
 * 
 * const frutas = [ ' manzana', 'pera', 'papaya' ];
 * const otrasFrutas = frutas;
 * 
 */
// 

const frutas = [ ' manzana', 'pera', 'papaya' ];
const otrasFrutas = [...frutas];

otrasFrutas.push( 'guayaba' );

console.table({ frutas, otrasFrutas });

