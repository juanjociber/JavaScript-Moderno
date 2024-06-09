import {heroes,owners} from "../data/heroes";

//Método find (Solo recibe un resultado)
export const getHeroeById = (id)=> heroes.find( heroe => heroe.id === id);
//console.log(getHeroeById(3));

//Método filter (Recibe uno o varios resultados)
export const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner);
// console.log(getHeroesByOwner('DC'));
// console.log(getHeroesByOwner('Marvel'));
// console.log(owners);
