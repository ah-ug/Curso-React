import { mount } from 'enzyme'
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <DashboardRoutes />', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true, 
            name: 'Pedro'
        }
    }

    const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value = {contextValue}>
                <DashboardRoutes />
            </AuthContext.Provider>
        </MemoryRouter>
    );

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
   
    
})
