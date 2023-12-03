
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent2 = async (element) =>{

    console.time();

/*     const value1 = await slowPormise();
    const value2 = await mediumPormise();
    const value3 = await fastPormise(); */

    const [value1, value2, value3] = await Promise.all([
        slowPormise(),
        mediumPormise(),
        fastPormise(),
    ]);

    element.innerHTML = `
        Value1: ${value1} <br/>
        Value2: ${value2} <br/>
        Value3: ${value3} <br/>
    `;

    console.timeEnd();
    

};

const slowPormise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('slowPormise')
    }, 2000);
});
const mediumPormise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('mediumPormise')
    }, 1500);
});
const fastPormise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('fastPormise')
    }, 1000);
});