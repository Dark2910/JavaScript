// Esta es la manera más optima
class Persona{

    static conteo = 0;
    static get getConteo(){
        return Persona.conteo + ' instancias'
    }
    static mensaje(){
        console.log('Hola, soy un método estático');
    }
 
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        Persona.conteo++;
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${this.codigo} es: ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);

    }
    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`);

    }

}

const spiderman = new Persona('Peter Parker','Spider-man','Soy tu amigable hombre araña');
const ironman = new Persona('Tony Stark','Ironman','Yo soy Ironman');

console.log(ironman);
ironman.quienSoy();
ironman.miFrase();

ironman.setComidaFavorita = 'Hamburguesas';
// forma incorrecta -> ironman.comida = 'papas';

console.log(ironman);
console.log(ironman.getComidaFavorita);

// Las propiedades estaticas con nos ayudan a definir valores sin necesidad de crear una nueva instancia
Persona.propiedadExterna = 'Hola propiedad externa'; // Una propiedad externa por default se declara como estatica
console.log(Persona.propiedadExterna);
console.log(Persona.getConteo);
Persona.mensaje();
