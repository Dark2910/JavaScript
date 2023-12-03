class Persona {
    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais)
    }
    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getinfo(){
        console.log(`nombre: ${this.nombre} ${this.apellido}, pais: ${this.pais}`);
    }

}

// Variables
const nombre1 = 'Isabel',
      apellido1 = 'Diaz',
      pais1 = 'Mexico';

// Objeto
const fer = {
    nombre: 'Fer',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}

const persona1 = new Persona(nombre1,apellido1,pais1);
const persona2 = Persona.porObjeto(fer);

persona1.getinfo();
persona2.getinfo();