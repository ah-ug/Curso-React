import heroes from '../../data/heroes';

const { getHeroeById, getHeroesByOwner } = require("../../base-pruebas/08-imp-exp");

describe('Pruebas en funciones de Heroes', () => {

    test('Should be return a hero by id ', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
        // console.log(heroe);
    })

    test('Debe retornar un undefined si heroe no existe ', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);
        // console.log(heroe);
    })
    
    // Debe retornar un arreglo con los heroes de DC
    // Owner
    // toEqueal al arreglo filtrado
    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const arregloHeroes = getHeroesByOwner(owner);

        const arregloDC = heroes.filter( h => h.owner === owner )
        
        expect(arregloHeroes).toEqual(arregloDC);
    })


    // Debe retornar una arreglo con los heroes de Marvel
    // length = 2 // toBe
    test('Debe retornar una arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const arregloHeroes = getHeroesByOwner(owner);

        const arregloMarvel = heroes.filter( h => h.owner === owner )
        
        expect(arregloHeroes.length).toBe(arregloMarvel.length);
    })
})
