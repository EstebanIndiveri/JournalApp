import React from 'react';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import LoginScreen from '../../../components/authentication/LoginScreen';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';


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
    });
    
    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
        
    })
    
})
