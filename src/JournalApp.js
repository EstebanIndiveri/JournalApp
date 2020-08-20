import React from 'react';
import AppRouter from './routes/AppRouter';
import {Provider} from 'react-redux';
import { store } from './store/store';
// import AppRouter from './routes/AppRouter';
// import AppRouter from './routes/AppRouter';
const JournalApp = () => {
    return ( 
        <Provider store={store}>
            <AppRouter/>
        </Provider>
     );
}
 
export default JournalApp;