const { shallow } = require("enzyme")
const { TodoAdd } = require("../../../componentes/08-useReducer/TodoAdd")

describe('pruebas en <TodoAdd />', () => {
    
    const handleAddTodo = jest.fn()

    const wrapper = shallow( 
        
        <TodoAdd 
            handleAddTodo={handleAddTodo}
        />
    )

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('NO debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault(){} })

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);

    })

    test('debe de llamar la funcion handleAddTodo', () => {
        // con un argumento - called
        const value = 'Hola'
        const input = wrapper.find('input');
        input.simulate('change', {
            target: {
                name: 'description',
                value: value
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit({ preventDefault(){} })
        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ); // { }
        expect( handleAddTodo ).toHaveBeenCalledWith( {
            id: expect.any(Number),
            desc: value,
            done: false
        });
        
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    
    
})
