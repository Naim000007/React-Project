import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCB6_tOmQuMVvGn3f2_XJwi3Ik7q2TQNNY",
    authDomain: "nextwave-1082a.firebaseapp.com",
    projectId: "nextwave-1082a",
    storageBucket: "nextwave-1082a.appspot.com",
    messagingSenderId: "332740658581",
    appId: "1:332740658581:web:0a84b11718e9a081d2a29c"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "Local",
            email,
        })
    }
    catch (error) {
        console.log(error);
        alert(error)
    }
}

const login = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
        console.log(error);
        alert(error)
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signUp, logout }