import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store=mockStore({
    auth:{
        uid:'TestUID'
    }
})

describe('pruebas con actions notes', () => {
    test('startNewNotes', async() => {
        await store.dispatch(startNewNote());
    });
    
})
