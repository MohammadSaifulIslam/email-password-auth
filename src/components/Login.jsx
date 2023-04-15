import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase_config';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'


const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const auth = getAuth(app)


    const handleLogin = event => {
        setSuccess('')
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

        setError('')

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('password must have a uppercase')
            return
        } else if (!/(?=.*[a-z])/.test(password)) {
            setError('password must have a lowercase')
            return
        } else if (!/(?=.*\d)/.test(password)) {
            setError('password must have a number')
            return
        } else if (!/(?=.*[-\!\@\#\$\.\%\&\*])/.test(password)) {
            setError('password must have a special character')
            return
        }
        else if (password.length < 6) {
            setError('password must be at least 6 characters')
            return
        }

        // firebase user create 
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                if (!loggedUser.emailVerified) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please varify your email',
                    })
                    return
                }

                event.target.reset();
                setSuccess('Successfully login.')
                setError('')
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message)
            })
    }
    const googleProvider = new GoogleAuthProvider()
    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                Swal.fire(
                    'Logged in!',
                    'You successfully logged in',
                    'success'
                )

            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <form onSubmit={handleLogin} className="mx-5 form-control bg-slate-100 rounded-lg md:w-1/2 p-5 md:mx-auto my-10">
            <h2 className='text-accent text-2xl font-semibold mb-5 text-center'>Login Form</h2>
            <label className="label mt-5">
                <span className="label-text">User Email</span>
            </label>
            <input type="email" name='email' placeholder="useremail@gmail.com" className="input input-accent input-bordered" required />
            <label className="label mt-5">
                <span className="label-text">User Password</span>
            </label>
            <input type="password" name='password' placeholder="your password" className="input input-accent input-bordered" required />

            <label className="cursor-pointer label mt-5 flex justify-normal gap-5">
                <input type="checkbox" className="checkbox checkbox-accent" required />
                <span className="label-text">Accept terms and conditions</span>
            </label>
            {success && <p className='text-success mt-5 text-center'>{success}</p>}
            {error && <p className='text-error mt-3 text-center'>{error}</p>}
            <button className='btn btn-accent w-full md:w-fit mx-auto mt-5'>Login</button>
            <p className='text-center mt-2'>or login with</p>
            <div className='text-center flex justify-center my-1'>
                <figure onClick={handleLoginWithGoogle} className='w-8 h-8 flex justify-center items-center cursor-pointer rounded-full bg-white'> <img className='h-6 w-6 object-center' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="google logo" /></figure>
            </div>
            <Link to='/forgot_password' className='inline-block w-fit mx-auto text-center'> <button className='btn btn-link'>Forgot Password?</button></Link>
            <p className='text-center'>haven't an account? Please <Link className='text-accent' to='/register'>Register</Link></p>
        </form>
    );
};

export default Login;