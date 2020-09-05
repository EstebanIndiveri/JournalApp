import React from 'react';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import LoginScreen from '../../../components/authentication/LoginScreen';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin,startLoginEmailPassword } from '../../../actions/auth';

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
store.dispatch=jest.fn();

const wrapper=mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen/>
        </MemoryRouter>

    </Provider>
)

describe('pruebas en LoginScreen', () => {
    beforeEach(()=>{
        store = mockStore(initState);
        jest.clearAllMocks();
    });
    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe disparar action de StartGoogleLogin', () => {
        wrapper.find('.google-btn').prop('onClick')();
        expect(startGoogleLogin).toHaveBeenCalled();
    });
    test('debe disparar startlogin', () => {
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
    expect(startLoginEmailPassword).toHaveBeenCalledWith('','');
    });
    
    
    
})
