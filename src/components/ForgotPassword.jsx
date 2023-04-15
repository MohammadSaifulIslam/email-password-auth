import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase_config';

const ForgotPassword = () => {
    const emailRef = useRef();
    const auth = getAuth(app)

    const handleForgotPassword = () => {
        event.preventDefault()
        const email = emailRef.current.value
        sendPasswordResetEmail(auth, email)
            .then(result => {
            })
            .catch(error => {
                console.error(error.message);
            })
        Swal.fire(
            'To reset password',
            'Please, check your email',
            'success'
        )
        event.target.reset();
    }
    return (
        <form onSubmit={handleForgotPassword} className="mx-5 form-control bg-slate-100 rounded-lg md:w-1/2 p-5 md:mx-auto my-10">
            <h2 className='text-accent text-2xl font-semibold mb-5 text-center'>Forgot Password? </h2>
            <label className="label mt-5">
                <span className="label-text">User Email</span>
            </label>
            <input type="email" ref={emailRef} name='email' placeholder="useremail@gmail.com" className="input input-accent input-bordered" required />
            <button className='btn btn-link text-center'> Reset Password</button>
            <p className='text-center'>Back to <Link className='text-accent' to='/login'>Login</Link></p>
        </form>
    );
};

export default ForgotPassword;