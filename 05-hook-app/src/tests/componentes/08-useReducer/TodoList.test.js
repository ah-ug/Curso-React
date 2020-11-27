const { shallow } = require("enzyme")
const { TodoList } = require("../../../componentes/08-useReducer/TodoList")
const { demoTodos } = require("../../fixtures/demoTodos")

describe('pruebas en <TodoList />', () => {
    
    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow(
        <TodoList 
            todos={demoTodos}
            handleDelete = {handleDelete}
            handleToggle = {handleToggle}
        />
    )

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de tener tods <TodoListItem />', () => {
        
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
    })
    
    
})
