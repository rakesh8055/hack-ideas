import  { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYM2_hWyPg95t67XEA638bZxEF27cKuhI",
    authDomain: "hack-ideas-459ce.firebaseapp.com",
    projectId: "hack-ideas-459ce",
    storageBucket: "hack-ideas-459ce.appspot.com",
    messagingSenderId: "959917197224",
    appId: "1:959917197224:web:52ba3e6094cfefdba4bf9d"
  };

  const app = initializeApp(config);

  export const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => signInWithPopup(auth, provider);
  
