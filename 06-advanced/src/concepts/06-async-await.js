import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponet = async (element) =>{

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';
    const id3 = '5d86371f25a058e5b1c8a65e';

    try {
        const hero1 = await findHero(id1);
        const {name} = await findHero(id2);
        const {name: theBest} = await findHero(id3);
    
        element.innerHTML = `${hero1.name}, ${name}, ${theBest}`;
        
    } catch (error) {
        element.innerHTML = error;
        
    }
};

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);

    if(!hero){
        throw `Hero with id: ${id} not found.`;
    }

    return hero;
};