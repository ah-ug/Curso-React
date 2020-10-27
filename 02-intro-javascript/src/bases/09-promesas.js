//Promesas
//import {getHeroeById, getHeroesByOwner} from './bases/08-imp-exp'
import {getHeroeById} from '../bases/08-imp-exp'

/* 
const promesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
       
        const p1 = getHeroeById(2);
        //console.log(heroe)
        resolve(p1)
        //reject('No se pudo encontrar el heroe')
    }, 2000)
});

promesa.then( (heroe) => {
    console.log('Heroe: ', heroe)
}).catch( err => console.warn( err) )
 */


const getHeroeByIdAsync = (id) => {
    
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
        
            const p1 = getHeroeById(id);
            //console.log(heroe)
            if (p1 === undefined){
                reject('No se pudo encontrar')
            }
            resolve(p1)
            //reject('No se pudo encontrar el heroe')
        }, 2000)
    });
} 

getHeroeByIdAsync(4)
    .then( console.log )
    .catch( console.warn)