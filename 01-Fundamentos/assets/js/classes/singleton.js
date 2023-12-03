// Con un singleton apuntamos una instancia al mismo espacion de memoria sin importat el numero de objetos

class Singleton{
    static instancia;
    nombre = '';

    constructor(nombre = ''){        
/*         const a = undefined;
        console.log(a);
        console.log(!a);
        console.log(!!a); */

        if(!!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

console.log(`Nombre de la instancia: ${instancia1.nombre}`);
console.log(`Nombre de la instancia: ${instancia2.nombre}`);
console.log(`Nombre de la instancia: ${instancia3.nombre}`);

