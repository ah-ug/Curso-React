import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { AuthContext} from '../../../auth/AuthContext'
import { Navbar } from '../../../components/ui/NavBar'
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types'


describe('Pruebas en <Navbar />', () => {
    
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        create: jest.fn(),
        createHref: jest.fn(),
    }
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true, 
            name: 'Pedro'
        }
    }

    const wrapper = mount(
        <MemoryRouter>
                <AuthContext.Provider value = {contextValue}>
                    <Router history={historyMock}>
                        <Navbar />
                    </Router>
                </AuthContext.Provider>
        </MemoryRouter>
    )

    afterEach(() =>{
        jest.clearAllMocks();
    })
    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Pedro')

    })
    
    test('debe de llamar el logout y usar history', () => {
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        })

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    })
})
