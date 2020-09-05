import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote, startLoadingNotes, startSaveNote, startUploading } from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/firabase-config';
import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';
jest.mock('../../helpers/fileUpload',()=>({
    fileUpload:jest.fn(()=>{
        return 'https://hola-mundo.com/image.jpg';
    })
}))
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
window.scrollTo = jest.fn();
const initState={
    auth: {
        uid: 'TestUID'
    },
    notes:{
        active:{
            id:'47TDDNDmHULnQKpQDzM4',
            title:'Hola',
            body:'Mundo'
        }
    }
}

let store = mockStore(initState);

describe('pruebas con actions notes', () => {
    beforeEach( () => {

        store = mockStore(initState);

    });
    
    test('startNewNotes', async () => {
        await store.dispatch( startNewNote() );

        const actions = store.getActions();

        // console.log(actions);
        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });
        //docid
        const docId=actions[0].payload.id;
        await db.doc(`/TestUID/journal/notes/${docId}`).delete();
    });
  test('StartLoadingNotes debe cargar notas', async () => {

      await store.dispatch(startLoadingNotes('TestUID'));
      const actions=store.getActions();
      expect(actions[0]).toEqual({
          type:types.notesLoad,
          payload:expect.any(Array)
      });
      const expected={
          id:expect.any(String),
          title:expect.any(String),
          body:expect.any(String),
          date:expect.any(Number)
      }
      expect(actions[0].payload[0]).toMatchObject(expected);
  })
  test('StasrsaveNote actualiza la nota', async () => {
      const note={
          id:'47TDDNDmHULnQKpQDzM4',
          title:'titulo',
          body:'body'
      };
      await store.dispatch(startSaveNote(note));
      const actions=store.getActions();
    //   console.log(actions);
    expect(actions[0].type).toBe(types.notesUpdated);
    const docRef=await db.doc(`/TestUID/journal/notes/${note.id}`).get();
    expect(docRef.data().title).toBe(note.title);
  });
      
    test('startUploading debe de actualizar el url del entry', async () => {
        const file= new File([],'foto.jpg');
        await store.dispatch(startUploading(file));
        const docRef=await db.doc(`/TestUID/journal/notes/47TDDNDmHULnQKpQDzM4`).get();
        expect(docRef.data().url).toBe('https://hola-mundo.com/image.jpg');
    })
    

});
