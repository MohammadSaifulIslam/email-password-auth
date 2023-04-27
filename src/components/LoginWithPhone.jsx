import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react';
import app from '../firebase/firebase_config';
import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css'
import * as firebaseui from 'firebaseui';
import { initializeApp } from "firebase/app";

const LoginWithPhone = () => {


    const firebaseConfig = {
        apiKey: "AIzaSyBs2Nt1YrkfBk_YYhB2rIomZF04KO8D_b0",
        authDomain: "email-password-auth-dd50b.firebaseapp.com",
        projectId: "email-password-auth-dd50b",
        storageBucket: "email-password-auth-dd50b.appspot.com",
        messagingSenderId: "197465909939",
        appId: "1:197465909939:web:91284d9c445fe9b0ba1ec6"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

        ui.start('#otp-container', {
            signInOptions: [
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
        })
    })

    return (
        <div id='otp-container' className='my-container'>
            login with phone
        </div>
    );
};

export default LoginWithPhone;