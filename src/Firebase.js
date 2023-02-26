import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCRtt6OoVBlUGWL9cTerNBTxXoHuyCF6nI",
  authDomain: "authproject-c6181.firebaseapp.com",
  projectId: "authproject-c6181",
  storageBucket: "authproject-c6181.appspot.com",
  messagingSenderId: "662214772446",
  appId: "1:662214772446:web:25593c5c766ba5bd75644f",
  measurementId: "G-HV9WEJMPEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = ()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        //console.log(result)
            const name = result.user.displayName
            const email = result.user.email
            const profilePic = result.user.photoURL 
            
            localStorage.setItem("name",name)
            localStorage.setItem("email",email)
            localStorage.setItem("profilePic",profilePic)
    }).catch((error )=>{
        console.error();
    });
}
