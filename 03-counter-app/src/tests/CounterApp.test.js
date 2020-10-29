import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'

import CounterApp from '../CounterApp'

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp />);

    beforeEach( () => {
        wrapper = shallow( <CounterApp />);
    });

    // Debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot) y sus valores por defecto
    test('debe de mostrar <CounterApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe de mostrar el valor por defecto de 100 ', () => {
    
        const value = 10;
        
        const wrapper = shallow( <CounterApp value={value} /> );

        const valorContador = parseInt(wrapper.find('h2').text()); //Se pudo haber utilizado el metodo trim para eliminar espacios
        expect(valorContador).toBe(value);
    })

    test('debe de incrementar con el boton +1', () => {
                
        wrapper.find('button').at(0).simulate('click');

        const valorContador = parseInt(wrapper.find('h2').text()); //Se pudo haber utilizado el metodo trim para eliminar espacios

        expect(valorContador).toBe(11);
        
    })

    test('debe de decrementar con el boton -1', () => {
                
        wrapper.find('button').at(1).simulate('click');

        const valorContador = parseInt(wrapper.find('h2').text()); //Se pudo haber utilizado el metodo trim para eliminar espacios

        expect(valorContador).toBe(9);
        
    })

    test('debe de colocar el valor por defecto con el boton reset', () => {
                
        const wrapper = shallow( <CounterApp value={105} /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');

        const valorContador = parseInt(wrapper.find('h2').text()); //Se pudo haber utilizado el metodo trim para eliminar espacios

        expect(valorContador).toBe(105);
        
    })
    
    
})

