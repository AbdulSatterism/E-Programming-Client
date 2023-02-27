import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const UserContext = createContext();
const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)

    // create user with email and pasword 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //log out 
    const logOut = () => {
        return signOut(auth);
    }
    // get user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            }
        });
        return () => unsubscribe();
    }, [])


    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut
    }

    return (
        <div>
            <UserContext.Provider value={authInfo}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthContext;