import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase_config';
import { Link } from 'react-router-dom';
const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const auth = getAuth(app)


    const handleRegister = event => {
        setSuccess('')
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log( email , password)

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
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                event.target.reset();
                console.log(loggedUser)
                setSuccess('Successfully register.')
                setError('')
                handleEmailVarification(result.user)
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message)
            })

    }

    const handleEmailVarification = user =>{
        sendEmailVerification(user)
        .then(result =>{
            console.log(result.user)
        })
    }
    return (
        <>
            <form onSubmit={handleRegister} className="mx-5 form-control bg-slate-100 rounded-lg md:w-1/2 p-5 md:mx-auto mt-10">
                <h2 className='text-accent text-2xl font-semibold mb-5 text-center'>Register Form</h2>
                <label className="label">
                    <span className="label-text">User Name</span>
                </label>
                <input type="text" name='name' placeholder="username" className="input input-accent input-bordered" required />
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
                <button className='btn btn-accent w-full md:w-fit mx-auto mt-5 text-white'>Register</button>
                <p className='text-success mt-5 text-center'>{success}</p>
                <p className='text-error mt-5 text-center'>{error}</p>
                <p className='text-center'>Already have an account? Please <Link className='text-accent' to='/login'>Login</Link></p>
            </form>
        </>

    );
};

export default Register;