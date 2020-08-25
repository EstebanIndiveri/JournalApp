import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import {firebase} from '../firebase/firabase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggIn, setIsLoggIn] = useState(false);
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(user?.uid){
                dispatch(login(user.uid,user.displayName));
                setIsLoggIn(true);
            }else{
                setIsLoggIn(false);
            }
            setChecking(false);
        })
    // eslint-disable-next-line
    },[dispatch,setChecking,setIsLoggIn]);

    if(checking){
        return(
            <h1>Espere...</h1>
        )
    }

    return ( 
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={isLoggIn} path="/auth" component={AuthRouter}/>
                    // eslint-disable-next-line
                    <PrivateRoute 
                    exact 
                    path="/" 
                    isAuthenticated={isLoggIn}
                    component={JournalScreen}
                    />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
     );
}
 
export default AppRouter;