import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    
    signOut as firebaseSignOut
 } from "firebase/auth";
 import { auth } from "./firebase"


 export async function signup(email, password){
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        );
        return { user: userCredential.user, error: null}
    }
    catch (error) {
        return { user: null, error: error.message}
    }
 }

 export async function login(email, password){
    try{
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
    );
    return { user: userCredential.user, error: null}
    }
    catch (error) {
    return { user: null, error: error.message}
    }
 }

 export async function logout(){
    try {
        await firebaseSignOut(auth);
        return { error: null}
    }
    catch (error){
        return { error: error.message}
    }
 }