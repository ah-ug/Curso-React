import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
// import { render } from '@testing-library/react'
const { default: PrimeraApp } = require("../PrimeraApp")

describe('Pruebas en <PrimeraApp />', () => {
    /* Este utiliza Jest
    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
        
        const saludo = 'Hola, soy Goku';

        const {getByText} = render( <PrimeraApp saludo={saludo} /> )

        expect(getByText(saludo)).toBeInTheDocument();
    })
     */
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Goku'
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> )

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Goku'
        const subTitulo = 'Soy un subtitulo'

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo = { subTitulo }
            /> 
        );
        
        const textoParrafo = wrapper.find('p').text();

        console.log(textoParrafo);

        expect(textoParrafo).toBe(subTitulo);
        

    })
    
    
})
