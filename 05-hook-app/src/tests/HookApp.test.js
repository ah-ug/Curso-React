import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import { HookApp } from '../HookApp';


describe('Pruebas con GifGridItem', () => {

    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow( <HookApp /> );
        expect( wrapper ).toMatchSnapshot();
    })
    
})
