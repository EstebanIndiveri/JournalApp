import React from 'react';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import RegisterScreen from '../../../components/authentication/RegisterScreen';
import { types } from '../../../types/types';

jest.mock('../../../actions/auth',()=>({
    startGoogleLogin:jest.fn(),
    startLoginEmailPassword:jest.fn(),

}))
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState={
    auth:{},
    ui:{
        loading:false,
        msgError:null
    }
};

let store = mockStore(initState);
// store.dispatch=jest.fn();

const wrapper=mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen/>
        </MemoryRouter>

    </Provider>
)

describe('pruebas en <RegisterScreen/>', () => {
    
    test('Mount Correctly', () => {
        expect(wrapper).toMatchSnapshot();
        
    });
    test('dispatch de la accion respectiva', () => {
        const emailField=wrapper.find('input[name="email"]');
        emailField.simulate('change',{
            target:{
                value:'',
                name:'email'
            }
        });
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:types.uiSetError,
            payload:'Email is not valid'
        });
    });
    test('debe de mostrar la caja de alerta con el error', () => {
        const initState={
            auth:{},
            ui:{
                loading:false,
                msgError:'Email incorrect'
            }
        };
        
        const store = mockStore(initState);
        
        const wrapper=mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
        expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);

    });
    
    
    
})
