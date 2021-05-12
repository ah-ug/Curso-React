import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { AuthContext} from '../../../auth/AuthContext'
import { LoginScreen } from '../../../components/login/LoginScreen'
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../../types/types'


describe('Pruebas en <LoginScreen />', () => {
    
    const historyMock = {
        replace: jest.fn(),
    }
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        }
    }

    const wrapper = mount(
        <MemoryRouter>
                <AuthContext.Provider value = {contextValue}>
                        <LoginScreen history={historyMock} />
                </AuthContext.Provider>
        </MemoryRouter>
    )

    test('debe de mostrarse correctamente', () => {
        // snapshot
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el dispatch y la navegacion', () => {

        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith( { 
            type: types.login,
            payload: {
                name: 'Arturo'
            }
        });

        expect( historyMock.replace ).toHaveBeenCalled();
    })
    
    
})
