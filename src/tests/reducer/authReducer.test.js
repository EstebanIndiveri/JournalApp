import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('pruebas en authReducer',()=>{
    test('debe de realizar el login ', () => {
        const initState={};

        const action={
            type:types.login,
            payload:{
                uid:'abc',
                displayName:'aaa'
            }
        };

        const state=authReducer(initState,action);
        expect(state).toEqual({
            uid:'abc',
            name:'aaa'
        })
    });

    test('debe de realizar el logout ', () => {
        const initState={
            uid:'abc',
            name:'aaa'
        };

        const action={
            type:types.logout,
        };

        const state=authReducer(initState,action);
        expect(state).toEqual({})
    });
    
      test('debe de realizar el login ', () => {
        const initState={};

        const action={
            type:types.login,
            payload:{
                uid:'abc',
                displayName:'aaa'
            }
        };

        const state=authReducer(initState,action);
        expect(state).toEqual({
            uid:'abc',
            name:'aaa'
        });
    });

    test('no registra cambios ', () => {
        const initState={uid:'abc',name:'aaa'};

        const action={
            type:'error',
        };

        const state=authReducer(initState,action);
        expect(state).toEqual(initState);
    });
});