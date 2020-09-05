import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/firabase-config';
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
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:types.notesActive,
            payload:{
                id:expect.any(String),
                title:'',
                body:'',
                date:expect.any(Number)
            }
        });
        expect(actions[1]).toEqual({
            type:types.notesAddNew,
            payload:{
                id:expect.any(String),
                title:'',
                body:'',
                date:expect.any(Number)
            }
        });
        //docid
        const docId=actions[0].payload.id;
        await db.doc(`/TestUID/journal/notes/${docId}`).delete();
    });
    
})
