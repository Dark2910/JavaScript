// Forma mas basica
const isa = {
    nombre: 'Isabel',
    edad: 22,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

const ed = {
    nombre: 'Eduardo',
    edad: 22,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

isa.imprimir();
ed.imprimir();

/**
 * Para hacer mas optimo el codigo de arriba podemos hacer un funcion que nos permita crear instancias y es por ello que se anota en mayuscula 
 * Se llama instancia a todo objeto que derive de algún otro. 
 * 
 * Es una forma un poco mas optima de resolver el problema de arriba, pero existen mejores
 */
function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${nombre}\nEdad: ${edad}`)
    }
}

const isabel = new Persona('Isabel','22');
isabel.imprimir();

const eduardo = new Persona('Eduardo','22');
eduardo.imprimir();
