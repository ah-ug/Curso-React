import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../componentes/09-useContext/LoginScreen';
import { UserContext } from '../../componentes/09-useContext/UserContext';

describe('Pruebas en <LoginScreen />', () => {
    
    const setUser = jest.fn()

    const user = {
        id: 123,
        name: 'Arturo'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider> 
    );
    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de ejecutar el setUser con el argumento esperado', () => {
        const button = wrapper.find('.btn')
        button.simulate('click')

        expect( setUser ).toHaveBeenCalledWith(user)
    })
    
})
