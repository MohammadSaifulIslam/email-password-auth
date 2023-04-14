import React from 'react';

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(name,email)
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

            <label className="cursor-pointer label mt-5 flex gap-5">
                <input type="checkbox"  className="checkbox checkbox-accent" />
                <span className="label-text">Accept terms and conditions</span>
            </label>
            <button className='btn btn-accent w-full md:w-fit mx-auto mt-5'>Login</button>
        </form>

    );
};

export default Login;