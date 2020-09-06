import React from 'react';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';
import SideBar from '../../../components/journal/Sidebar';

jest.mock('../../../actions/auth',()=>({
    startLogout:jest.fn(),

}))

jest.mock('../../../actions/notes',()=>({
    startNewNote:jest.fn(),

}))
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState={
    auth:{
        uid:'1',
        name:'Fernando'
    },
    ui:{
        loading:false,
        msgError:null
    },
    notes:{
        active:null,
        notes:[]
    }
};

let store = mockStore(initState);
store.dispatch=jest.fn();

const wrapper=mount(
    <Provider store={store}>
            <SideBar/>
    </Provider>
)


describe('pruebas en sidebar', () => {
    test('mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        
    });

    test('llamar al logout', () => {
        wrapper.find('button').prop('onClick')();
        expect(startLogout).toHaveBeenCalled();
        
    });

    test('startNewNote', () => {
        //action de startnewnote
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect(startNewNote).toHaveBeenCalled();
    })
    
    
    
})
