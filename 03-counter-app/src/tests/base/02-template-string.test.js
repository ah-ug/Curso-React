import '@testing-library/jest-dom';

const { getSaludo } = require("../../base-pruebas/02-template-string");

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar hola fernando', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe( 'Hola ' + nombre);
    })
    
    // getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe de retornar hola Carlos', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos');
    })

})
