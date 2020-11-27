import React from 'react';
const { shallow } = require("enzyme")
const { RealExampleRef } = require("../../componentes/04-useRef/RealExampleRef")

// jest.mock()
describe('Pruebas en <RealExampleRef />', () => {

    const wrapper = shallow( <RealExampleRef /> )

    test('Debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
    })

    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
        
        wrapper.find('.btn').simulate('click')

        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
    })
    
    
})
