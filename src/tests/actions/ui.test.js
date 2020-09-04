const { setError, removeError, startLoading, finishLoading } = require("../../actions/ui")
import '@testing-library/jest-dom';
import { types } from '../../types/types';

describe('pruebas en ui-actions', () => {

    test('todas actiones se crean', () => {
        const action=setError('Error!');
        expect(action).toEqual({
            type:types.uiSetError,
            payload:'Error!'
        });

        const removeErrorAction=removeError();
        const startLoadingAction=startLoading();
        const FinishLoadingAction=finishLoading();

        expect(removeErrorAction).toEqual({
            type:types.uiRemoveError
        })
        expect(startLoadingAction).toEqual({
            type:types.uiStartLoading
        })
        expect(FinishLoadingAction).toEqual({
            type:types.uiFinishLoading
        })

    })
    
})
