import React from 'react';
const { shallow } = require("enzyme")
const { GifExpertApp } = require("../GifExpertApp")

describe('Pruebas sobre <GifExpertApp />', () => {

    
    test('debe mostrarse correctamente', () => {
        
        const wrapper = shallow( <GifExpertApp /> )

        expect( wrapper ).toMatchSnapshot();
    });


    test('debe de mostrar una lsita de categorias', () => {

        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> )

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
})
