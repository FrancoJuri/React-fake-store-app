import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../createContext';
import useForm from '../../hooks/useForm';
import { types } from '../../types/types';
import validator from 'validator';
import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';


const LoginScreen = () => {

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    })

    const {email, password} = formValues;

    const {dispatchAuth, dispatchUi, stateUi} = useContext(context);
    const {loading, msgError} = stateUi;

    
    const handleLogin = (e) => {
        e.preventDefault();

        if(isFormValid()){
            dispatchUi({
                type: types.uiStartLoading,
            })
            firebase.auth().signInWithEmailAndPassword(email, password) 
            .then(({user}) => {
                dispatchAuth({
                    type: types.login,
                    payload: {
                        uid: user.uid,
                        displayName: user.displayName,
                    }
                })
            })
            .catch(err => {
                Swal.fire(
                    'Error',
                    err.message,
                    'error',
                )
            }).finally(() => {
                dispatchUi({
                    type: types.uiFinishLoading,
                })
            })
        }
    }

    const handleGoogleLogin = () => {
        dispatchUi({
            type: types.uiStartLoading,
        })
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatchAuth({
                    type: types.login,
                    payload: {
                        uid: user.uid,
                        displayName: user.displayName,
                    }
                }) 
                
            }).finally(() => {
                dispatchUi({
                    type: types.uiFinishLoading,
                })
            })
    }

    const isFormValid = () => {
        
        if(!validator.isEmail(email)){
            dispatchUi({
                type: types.uiSetError,
                payload: 'Email is not valid'
            })
            return false;
        } else if(password.trim() === ''){
            dispatchUi({
                type: types.uiSetError,
                payload: 'Password is not valid'
            })
            return false;
        }
        
        dispatchUi({
            type: types.uiUnSetError,
        })

        return true;
    }

    useEffect(() => {
        if(msgError){
            Swal.fire(
                'Error',
                msgError,
                'error'
            )
        }
        return () => {
            dispatchUi({
                type: types.uiUnSetError,
            })
        }
    }, [msgError, dispatchUi]);

    
    return (
        <div className='form-container'>

            <form className='p-4 p-md-5 bg-light border rounded' onSubmit={handleLogin}>

                <h2 className='text-center'>Login</h2>

                <div className="mb-3 mt-4">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={email} onChange={handleInputChange} autoComplete='off' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div>
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={password} onChange={handleInputChange} />
                </div>

                <div className='social-networks mb-3'>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>Sign up</button>

                <Link to='/auth/register' className='link mt-3'>
                    don't you have an account?
                </Link>
                
            </form>

        </div>
    )
}

export default LoginScreen;
