const { shallow } = require("enzyme")
const { TodoListItem } = require("../../../componentes/08-useReducer/TodoListItem")
const { demoTodos } = require("../../fixtures/demoTodos")


describe('Pruebas en <TodoListItem />', () => {
    
    const index = 0
    const handleDelete = jest.fn(( todoId ) => {})
    const handleToggle = jest.fn(( todoId ) => {})

    const wrapper = shallow(
        <TodoListItem 
            todo = {demoTodos[0]}
            index = {index} 
            handleDelete = {handleDelete}
            handleToggle = {handleToggle}
        />
    )

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe de llamar la función borrar', () => {
        wrapper.find('.btn').simulate('click');

        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(1);
    })
    
    test('debe de llamar la función handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(1);
    })

    test('debe de mostrar el texto correctamente', () => {
        //  Contenido del parrafo
        expect(wrapper.find('p').text().trim()).toBe(`1. ${ demoTodos[0].desc}`)
    })

    test('debe de tener la clase complete si el TODO.done = true', () => {

        const todo = demoTodos[0]
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo = {demoTodos[0]}
                index = {index} 
                handleDelete = {handleDelete}
                handleToggle = {handleToggle}
            />
        )

        expect(wrapper.find('p').hasClass('complete') ).toBe(true);
    })
    
})
