
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentComponent = (element) => {

    //console.log(process.env);
    console.log(import.meta.env);

    const html = `
        variables
    `
    element.innerHTML = html;
};