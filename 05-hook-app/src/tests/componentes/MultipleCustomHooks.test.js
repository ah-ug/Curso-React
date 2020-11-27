import React from 'react'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../componentes/03-examples/MultipleCustomHooks'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
    })

    test('debe de mostrarse correctamente', () => {
         
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow( <MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar la información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Arturo',
                quote: 'Hello World!'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow( <MultipleCustomHooks />);

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hello World!' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Arturo' );
    })
})
