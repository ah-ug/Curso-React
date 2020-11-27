const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm")

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Arturo',
        email: 'arturo.urgmes@gmail.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ values, handleInputChange, reset ] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toEqual('function');
        expect(typeof reset).toEqual('function');
    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange] = result.current;

        act( () => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Arturo Urra'
                }
            });
        });
        const [ values ] = result.current
        expect( values ).toEqual({...initialForm, name: 'Arturo Urra'});
    });
    
    test('debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        
        act( () => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Arturo Urra'
                }
            });
        });

        act( () => {
            reset();
        });

        const [ values ] = result.current;
        expect(values).toEqual(initialForm);
    })
    

})
