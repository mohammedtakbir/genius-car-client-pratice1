import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { createContext } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //* create an user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //* login an user
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //* user sign out
    const userSignOut = () => {
        localStorage.removeItem('genius-token-practice1')
        return signOut(auth);
    };

    //* login with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //* get currently sign-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        userLogin,
        createUser,
        userSignOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;