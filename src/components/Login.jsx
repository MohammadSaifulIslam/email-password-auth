import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase_config';
const Login = () => {
    const auth = getAuth(app)
    const handleLogin = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name,email)

        // firebase user create 
        createUserWithEmailAndPassword(auth, email , password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.error();
        })

    }
    return (
        <form onSubmit={handleLogin} className="mx-5 form-control bg-slate-100 rounded-lg md:w-1/2 p-5 md:mx-auto mt-10">
            <label className="label">
                <span className="label-text">User Name</span>
            </label>
            <input type="text" name='name' placeholder="username" className="input input-accent input-bordered" required/>
            <label className="label mt-5">
                <span className="label-text">User Email</span>
            </label>
            <input type="email" name='email' placeholder="useremail@gmail.com" className="input input-accent input-bordered" required />
            <label className="label mt-5">
                <span className="label-text">User Password</span>
            </label>
            <input type="password" name='password' placeholder="your password" className="input input-accent input-bordered" required />

            <label className="cursor-pointer label mt-5 flex gap-5">
                <input type="checkbox"  className="checkbox checkbox-accent" required />
                <span className="label-text">Accept terms and conditions</span>
            </label>
            <button className='btn btn-accent w-full md:w-fit mx-auto mt-5'>Login</button>
        </form>

    );
};

export default Login;