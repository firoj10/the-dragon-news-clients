import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';



const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoding]= useState(true)

    const createUser = (email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password);
    }
    const singIn = (email, password)=>{
      return signInWithEmailAndPassword(auth, email, password);
    
    }
    const logout = ()=>{
        return signOut(auth);
    }

    //observe auth change
    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth, currentser =>{
            console.log('auth state change', currentser)
            setUser(currentser)
            setLoding(false)
       
           
        })
        return ()=>{
            unsubsribe();
        }
   
    }, [])
    const authInfo = {
        user,
        createUser,
        singIn,
        logout,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
{children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;