import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = (element) =>{

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    };

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h2> ${hero1.name} </h2>
            <h2> ${hero2.name} </h2>
        `;
    };
    
    const renderError = (error) => {
        element.innerHTML = `
            <h2>Error:</h2>
            <h3>${ error }</h3>
        `;
    };

    const id1 = '5d86371f233c9f2425f16916';
    const id2 = '5d86371f9f80b591f499df32';

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch( renderError );

    
    //! Forma 2
    // let hero1;
    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero2 => {
    //         renderTwoHeroes( hero1, hero2 );
    //     })
    //     .catch( renderError );

    //! Forma 1
    // findHero( id1 )
    //     .then( (hero1) => {
  
    //         findHero( id2 )
    //             .then( hero2 => {
    //                 renderTwoHeroes(hero1, hero2)
    //             })
    //             .catch( renderError );
    //     })
    //     .catch( renderError );

};

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => new Promise((resolve, reject) => {
    const hero = heroes.find(hero => hero.id === id);

    if(hero){
        resolve(hero);
        return;
    }

    reject(` Heroe with id: ${ id } not found`);
});

/* const findHero = ( id ) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);

        if(hero){
            resolve(hero);
            return;
        }

        reject(` Heroe with id: ${ id } not found`);

    });
}; */
