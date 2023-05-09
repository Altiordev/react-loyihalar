import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBQHEirv5yQZfG0t6B19LIRoHoCFQUZKck",
    authDomain: "twitter-clone-10d09.firebaseapp.com",
    projectId: "twitter-clone-10d09",
    storageBucket: "twitter-clone-10d09.appspot.com",
    messagingSenderId: "165342497256",
    appId: "1:165342497256:web:9c1cc549b64ace6b1b7c5d"
});

const auth = app.auth();
export { auth };
export default app;