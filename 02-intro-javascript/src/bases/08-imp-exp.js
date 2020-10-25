//import { heroes } from './data/heroes' //-> Las llaves son cuando la exportacion tienen un nombre y si es default no es necesario
//import  { heroes, owners }  from '../data/heroes'
import  { heroes}  from '../data/heroes'

//console.log( owners )


//console.log( heroes )

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

//console.log(getHeroeById(2));

//find = devuelve el primer valor. || filter = devuelve todos los valores que coinciden con la busqueda.
const getHeroesByOwner = ( owner ) => heroes.filter(heroe => heroe.owner === owner);

//console.log(getHeroesByOwner('DC'))

export {
    getHeroeById,
    getHeroesByOwner
}