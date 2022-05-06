import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }



    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }




    return (
        <div className='form-container'>

            <div>
                <h2 className='form-title'>Login Pls...</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className='input-group'>

                        <input onBlur={handleEmailBlur} type='email' name='email' placeholder='email' required />
                    </div>
                    <div className='input-group'>

                        <input onBlur={handlePasswordBlur} type='password' name='password' placeholder='password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading....</p>
                    }
                    <input className='form-submit' type='submit' value='Login' />

                </form>
                <p>
                    New to Book's Store? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </div>

        </div>
    );
};

export default Login; 