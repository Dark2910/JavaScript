import {heroes} from '../data/heroes.js';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callBacksComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371fd55e2e2a30fe1ccb1';

    findHero(id1, (error, {name}) => {
        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error, hero2) => {
            if ( error ) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${ name } / ${ hero2.name }`;
        });
    });

    //element.innerHTML = hero?.name || 'No hay heroe';
    //element.innerHTML = hero.name;

    // Desestructuracion de arreglos
    /* findHero(id, ({about}) => {
        element.innerHTML = about;
    }); */
}; 

/**
 * Validacion de id 
 * @param {String} id 
 * @param {(error: String|Null, hero: object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);

    if(!hero){
        callback(`hero with id: ${id} not found`);
        return; //undefined
    };

    callback( null, hero);
};
