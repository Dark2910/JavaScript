
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element) =>{

/*     const myGenerator = myFirstGenerationFunction();
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next()); */


    const id = idGenerator();
    //console.log(id.next());

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const {value} = id.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton );
};

function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }
}
function* myFirstGenerationFunction() {
    yield '1st value';
    yield '2to value';
    yield '3th value';
    yield '4th value';

    return 'No more values';
}