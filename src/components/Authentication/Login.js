import React, { useState, useContext, Fragment } from 'react';
import {  useHistory } from "react-router-dom";
import AuthContext from '../../store/auth-context';
import LoadingSpinner from '../UI/LoadingSpinner';

import './Login.css';


function Login() {
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const [signIn, setSignIn] = useState(true);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsTouched, setEmailIsTouched] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsTouched, setPasswordIsTouched] = useState(false);

    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = emailIsTouched && !enteredEmailIsValid;
    const enteredPasswordIsValid = enteredPassword.trim().length > 5;
    const passwordInputIsInvalid = passwordIsTouched && !enteredPasswordIsValid;

    let formIsValid = false;

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    }
    const emailBlurHandler = () => {
        setEmailIsTouched(true);
    }
    const passwordBlurHandler = () => {
        setPasswordIsTouched(true);
    }
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        setisLoading(true);
        const url=signIn ? "http://localhost:5000/api/auth/login":"http://localhost:5000/api/auth/createuser";

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            console.log(data);
            setisLoading(false);
            if(!data.success){
                throw new Error(data.error)

            }
          
            authCtx.login(enteredEmail);
           
            history.replace('/');
        } catch (error) {
            setIsError(error.toString());
        }
        

        setEnteredEmail('');
        setEnteredPassword('');
        setEmailIsTouched(false);
        setPasswordIsTouched(false);
    }

    const loginSwitchHandler = () => {
        setSignIn((prevState) => !prevState);
        setEmailIsTouched(false);
        setPasswordIsTouched(false);
        setEnteredEmail('')
        setEnteredPassword('');
        setIsError(null);
    }

    const emailInputClasses = `credentials__input ${emailInputIsInvalid ? 'invalid__input' : ''}`
    const passwordInputClasses = `credentials__input ${passwordInputIsInvalid ? 'invalid__input' : ''}`

    return (
        <Fragment>
            {isLoading && <LoadingSpinner />}
            {!isLoading && <div className='login'>
                <div className='login__container'>
                    <h1>{signIn ? "Sign-In" : "Sign-Up"}</h1>
                    {isError && <div className="error-text">{isError}</div>}

                    <form onSubmit={formSubmitHandler}>
                        <label className="label__" htmlFor="email">Email</label>

                        <input className={emailInputClasses} id='email' type="text" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
                        {emailInputIsInvalid && <p className="error-text">Email must contain @</p>}

                        <label htmlFor="password">Password</label>
                        <input className={passwordInputClasses} id="password" type="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordBlurHandler} />
                        {passwordInputIsInvalid && <p className='error-text'>Password must have atleast 6 characters</p>}


                        <button disabled={!formIsValid} type='submit' className='login__mainButton'>{signIn ? "Sign In" : "Sign Up"}</button>
                    </form>
                    <p>
                        By signing-in you agree to the MyShopify Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button onClick={loginSwitchHandler} className='login__alternateButton'>{signIn ? "New User? Create your MyShopify Account" : "Existing user? Login"}</button>
                </div>
            </div>}
        </Fragment>
    )
}

export default Login;
