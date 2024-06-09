import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject)=>{
    
//     setTimeout(() => {
//        const heroe = getHeroeById(2);
//        resolve(heroe);
//        //reject('No se pudo encontrar el heroe'); 
//     }, 2000);
// });

// promesa.then((heroe) =>{
//     console.log('heroe', heroe);
// })
// .catch(error =>console.warn(error));

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           const heroe = getHeroeById(id);
           if(heroe){
            resolve(heroe);
           }else{
            reject('No se pudo encontrar el heroe'); 
           }
        }, 2000);
    });
}

getHeroeByIdAsync(212)
    .then( heroe => console.log(heroe))
    .catch(error =>console.warn(error));
