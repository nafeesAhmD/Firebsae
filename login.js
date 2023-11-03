import { auth } from './config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const iform = document.getElementById("iform")
const iemail = document.getElementById("iemail")
const ipassword = document.getElementById("ipassword")

iform.addEventListener('submit', (event) => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, iemail.value, ipassword.value)
  .then((res) => {
    // Signed in 
    const user = res.user;
    console.log(res)
    window.location = 'home.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

})
