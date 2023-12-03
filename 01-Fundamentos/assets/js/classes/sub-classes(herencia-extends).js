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

class Heroe extends Persona {
    clan = '';
    
    constructor(nombre,codigo,frase, clan){
        super(nombre,codigo,frase);
        
        this.clan = clan
    }
    quienSoy(){
        super.quienSoy();
        console.log(`Me llaman ${this.codigo}, pertenezco a: ${this.clan}`);
    }

}

const ironman = new Heroe('Tony Stark','Ironman','Yo soy Ironman','Los Vengadores');
ironman.quienSoy();




