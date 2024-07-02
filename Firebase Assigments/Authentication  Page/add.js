// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXpY4mGSbBYn_mrY6YfihYjzFlNQ9yLD0",
    authDomain: "smit-learning.firebaseapp.com",
    projectId: "smit-learning",
    storageBucket: "smit-learning.appspot.com",
    messagingSenderId: "734240451877",
    appId: "1:734240451877:web:e7b35be3e6645a67333ecc",
    measurementId: "G-FTJDX6BRE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


const signIn_email = document.getElementById('signIn_email');
const signIn_password = document.getElementById('signIn_password');
const signInBtn = document.getElementById('signInBtn');

const signUpBtn = document.getElementById('signUpBtn');

const signUpPage = document.getElementById('signUpPage');
const lignInPage = document.getElementById('lignInPage');

const user_container = document.getElementById('user_container');
const auth_container = document.getElementById('auth_container');

const signUp_email = document.getElementById('signUp_email');
const signUp_password = document.getElementById('signUp_password');
const signUpRegisterBtn = document.getElementById('signUpRegisterBtn');

const user_email = document.getElementById('user_email');
const logout_btn = document.getElementById('logout_btn');

signUpBtn.addEventListener('click', changingLoginPage);

signUpRegisterBtn.addEventListener('click', createUserAccount);

signInBtn.addEventListener('click' , userLogin);

logout_btn.addEventListener('click' , logout);

onAuthStateChanged(auth, (user) => {
    if (user) {
        user_email.innerText = user.email;
        // console.log(user.email);
        auth_container.style.display = "none";
        user_container.style.display = "block";
        const uid = user.uid;
        // console.log('user login');
    } else {
        // User is signed out
        // ...
        alert('Please! Create Your Account');
       
        auth_container.style.display = 'block';
        user_container.style.display = 'none';
    };
});

function changingLoginPage() {
    signUpPage.style.display = 'block';
    lignInPage.style.display = 'none';
};

function createUserAccount() {
    // console.log(signUp_email.value);
    // console.log(signUp_password.value);
    createUserWithEmailAndPassword(auth, signUp_email.value, signUp_password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
};

function userLogin() {
    // console.log(signIn_email.value);
    // console.log(signIn_password.value);
    signInWithEmailAndPassword(auth, signIn_email.value, signIn_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
};

function logout() {
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
};