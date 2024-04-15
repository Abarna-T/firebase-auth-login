import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBeYUC4YQm38xcodpKve_GzIXSnGQC5BZQ",
    authDomain: "auth-development-14a7b.firebaseapp.com",
    projectId: "auth-development-14a7b",
    storageBucket: "auth-development-14a7b.appspot.com",
    messagingSenderId: "82296002799",
    appId: "1:82296002799:web:2eda54aaa817338497a31a"
})

export const auth = app.auth()
export default app;