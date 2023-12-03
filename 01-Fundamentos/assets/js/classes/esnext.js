class Rectangulo{
    #area = 0;  // Utilizando numeral el tipo de dato de vuelve privado

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }
    set setBase(base){
        this.base = base;
    }
    set setAltura(altura){
        this.altura = altura;
    }
    
    get getBase(){
        return this.base;
    }
    get getAltura(){
        return this.altura;
    }
    get getArea(){
        return this.#area = this.base * this.altura;
    }

}

const rectangulo = new Rectangulo(30,20);
console.log(rectangulo);

rectangulo.setAltura = 40;
rectangulo.setBase = 60;
console.log(`Altura: ${rectangulo.getAltura}\nBase: ${rectangulo.getBase}\nÁrea: ${rectangulo.getArea}`);

