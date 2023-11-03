import { auth } from './config.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';


// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
    // Signed up 
    const user = res.user;
    console.log(user)
    window.location = 'login.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
})
