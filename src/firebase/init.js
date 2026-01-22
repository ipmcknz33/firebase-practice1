// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgs9_VAe4h8BOffuiN2tIZMj0eTkb8rq0",
  authDomain: "fir-practice-221ed.firebaseapp.com",
  projectId: "fir-practice-221ed",
  storageBucket: "fir-practice-221ed.firebasestorage.app",
  messagingSenderId: "932461413541",
  appId: "1:932461413541:web:d44e94cc66441503cf794c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

