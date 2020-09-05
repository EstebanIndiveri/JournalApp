import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { login, logout, startLogout, startLoginEmailPassword } from '../../actions/auth';
import { types } from '../../types/types';
import createMockStore from 'redux-mock-store';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState={};

let store = mockStore(initState);



describe('pruebas con acciones de auth', () => {

    beforeEach(()=>{
        store = mockStore(initState);
    });

    test('Login y logout crean accion respectiva', () => {
       const uid='abc123';
       const displayName='Fernando';

        const loginAction=login(uid,displayName);
        const logoutAction=logout();
    
        expect(loginAction).toEqual({
            type:types.login,
            payload:{
                uid,
                displayName
            }
        });
        expect(logoutAction).toEqual({type:types.logout});

    });
    

    test('Debe de realizar el startLogout', async () => {
        await store.dispatch(startLogout());
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:types.logout
        });
        expect(actions[1]).toEqual({
            type:types.notesLogoutCleaning
        });
    });
    
    test('debe de iniciar el startloginwithEmailPassowrd', async() => {
        await store.dispatch(startLoginEmailPassword('test@test.com','123abc'));
        const actions=store.getActions();
        expect(actions[1]).toEqual({
            type:types.login,
            payload:{
                uid:'zF40why2YaUZTolNRL6J0emLokD3',
                displayName:null
            }
        });
    });
    

})
