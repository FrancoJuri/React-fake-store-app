import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import { context } from '../../createContext';
import useForm from '../../hooks/useForm';
import { types } from '../../types/types';
import { firebase } from '../../firebase/firebase-config';


const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const {name, email, password, password2} = formValues;

    const {dispatchAuth, dispatchUi, stateUi} = useContext(context);
    const {msgError} = stateUi;
    

    const handleRegister = (e) => {
        e.preventDefault();
        
        if(isFormValid()) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(async ({user}) => {
                    await user.updateProfile({displayName: name});
                    
                    dispatchAuth({
                        type: types.login,
                        payload: {
                            uid: user.uid,
                            displayName: user.displayName,
                        }
                    }) 
                }).catch(err => {
                    Swal.fire(
                        'Error',
                        err.message,
                        'error',
                    )
                })
        }
    } 

    const isFormValid = () => {

        if(name.trim().length === 0){
            dispatchUi({
                type: types.uiSetError,
                payload: 'Name is required'
            })
            return false;
        } else if(!validator.isEmail(email)){
            dispatchUi({
                type: types.uiSetError,
                payload: 'Email is not valid'
            })
            return false;
        } else if(!validator.equals(password, password2) || !validator.isStrongPassword(password, [{minLenght:5}])){
            dispatchUi({
                type: types.uiSetError,
                payload: 'Password should be at least 6 characters and match each other',
            })
            return false;
        }

        dispatchUi({
            type: types.uiUnSetError,
        });

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

            <form className='p-4 p-md-5 bg-light border rounded' onSubmit={handleRegister}>
                
                <h2 className='text-center'>Register</h2>

                <div className="mb-3 mt-4">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" autoComplete='off' name='name' value={name} onChange={handleInputChange} />
                </div>

                <div className="mb-3 mt-4">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={email} onChange={handleInputChange} autoComplete='off' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className='mb-3'>
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={password} onChange={handleInputChange} />
                </div>

                <div>
                    <label className="form-label">Confirm password</label>
                    <input type="password" className="form-control" name='password2' value={password2} onChange={handleInputChange} />
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-3" disabled={false}>Register</button>

                <Link to='/auth/login' className='link mt-3'>
                    Already register?
                </Link> 
            </form>

        </div>
    )
}

export default RegisterScreen;
