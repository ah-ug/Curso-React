import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import { GifGridItem } from '../components/GifGridItem'


describe('Pruebas con GifGridItem', () => {
    
    let wrapper = shallow( <GifGridItem /> );

    beforeEach( () => {
        wrapper = shallow( <GifGridItem /> );
    })


    test('Debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})
