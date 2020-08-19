import React from 'react';
import { Switch, Redirect,Route} from 'react-router-dom';
import LoginScreen from '../components/authentication/LoginScreen';
import RegisterScreen from '../components/authentication/RegisterScreen';

const AuthRouter = () => {
    return ( 
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen}/>
                    // eslint-disable-next-line
                    <Route exact path="/auth/register" component={RegisterScreen}/>
                    // eslint-disable-next-line

                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
          
        </div>
        );
}
 
export default AuthRouter;