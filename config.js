import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7w16H6NTTEog3P-1o4VLQpB_apg9e4R0",
  authDomain: "smit-d17b9.firebaseapp.com",
  projectId: "smit-d17b9",
  storageBucket: "smit-d17b9.appspot.com",
  messagingSenderId: "439874692567",
  appId: "1:439874692567:web:a97e57efca9d668c9b9792",
  measurementId: "G-64FR7E591B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);