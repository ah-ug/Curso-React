const { getUser, getUsuarioActivo } = require("../../base-pruebas/05-funciones");

describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe de retornar un objeto ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papito1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    // getUsuarioActivo debe retornar un objeto
    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Juanito'

        const usuarioActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(usuarioActivoTest);
    
    })
})