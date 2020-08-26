import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeError,setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {
    const dispatch = useDispatch()
    const {msgError}=useSelector(state=>state.ui);

    /*
    {name:'fer',
    email:'122'
    pass:'123456'
    pass2:'123456'
    }
    */  
   const[formValue,handleInputChange]=useForm(
        {   
            name:'fer',
            email:'nando@gmail.com',
            password:'123456',
            password2:'123456'
        }
    );

    const{name,email,password,password2}=formValue;


   const handleRegister=(e)=>{
       e.preventDefault();
       if(isFormValid()){
           console.log('Formulario Correcto');
           dispatch(startRegisterWithEmailPasswordName(email,password,name))
       }

    }

    const isFormValid=()=>{
        if(name.trim().length===0){
            // console.log('name is required');
            dispatch(setError('name is required'));
            return false;
        }else if(!validator.isEmail(email)){
            // console.log('Email is not valid');
            dispatch(setError('Email is not valid'));
            return false;
        }else if(password !==password2 || password.length<5){
            // console.log('Password should be at least 6 characters and match each other');
            dispatch(setError('Password should be at least 6 characters and match each other'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return ( 
        <Fragment>
            <h3 className="auth__title">Register</h3>
            <form className="animate__animated animate__fadeIn animate__faster" onSubmit={handleRegister}>
             {   msgError&&
                (<div className="auth__alert-error">
                    {msgError}
                </div>)
            }
                <input
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />
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
                <input
                type="password"
                placeholder="Repeat Password"
                name="password2"
                className="auth__input"
                value={password2}
                onChange={handleInputChange}
                />
                <button
                className="btn btn-primary btn-block  mb-5"
                type="submit"
                >Register</button>
                <Link to="/auth/login" className="link">
                    Alredy register?
                </Link>
            </form>
        </Fragment>
     );
}
 
export default RegisterScreen;