import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

const LoginScreen = () => {
    const dispatch = useDispatch()
    const[formValue,handleInputChange]=useForm({
        email:'',
        password:''
    });

    const{email,password}=formValue;

    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(login(123,'esteban'));
    }

    return ( 
        <Fragment>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />
                <input
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                value={password}
                onChange={handleInputChange}
                />
                <button
                className="btn btn-primary btn-block"
                type="submit"
                >Login</button>
                <div className="auth__social-networks">
                    <p>Login with Social Networks</p>
                        <div 
                            className="google-btn"
                        >
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                </div>
                <Link to="/auth/register" className="link">
                    Create New Account
                </Link>
            </form>
        </Fragment>
     );
}
 
export default LoginScreen;