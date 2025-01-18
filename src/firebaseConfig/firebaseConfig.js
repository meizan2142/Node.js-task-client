import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {
    apiKey: "AIzaSyCClTGQlw-HMvmn-ZQxfPNQdcH9NGatH9w",
    authDomain: "nodejs-task-1.firebaseapp.com",
    projectId: "nodejs-task-1",
    storageBucket: "nodejs-task-1.appspot.com",
    messagingSenderId: "740791493328",
    appId: "1:740791493328:web:88f373f6509d7bc72bb4d5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };