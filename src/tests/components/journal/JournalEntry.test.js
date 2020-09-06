import React from 'react';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import JournalEntry from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState={};

let store = mockStore(initState);
store.dispatch=jest.fn();

const nota={
    id:10,
    date:0,
    title:'hola',
    body:'mundo',
    url:'http://image.com/foto.jpg'
}

const wrapper=mount(
    <Provider store={store}>
            <JournalEntry {...nota}/>
    </Provider>
)



describe('pruebas en JorunalEntry', () => {
    
    test('match con el snap', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('activa la nota', () => {
        
        wrapper.find('.journal__entry').prop('onClick')();

        expect(store.dispatch).toHaveBeenCalledWith(
            activeNote(nota.id,{...nota})
        );


    })
    
    
})
