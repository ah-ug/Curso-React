import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../componentes/09-useContext/HomeScreen';
import { UserContext } from '../../componentes/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {
    
    const user = {
        name: 'Arturo',
        email: 'arturo@gmail.com'
    }
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider> 
    );
    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })
    
})
