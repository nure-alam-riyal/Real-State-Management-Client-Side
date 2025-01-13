import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/FirebaseAuth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
export const AuthContex = createContext(null)
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState('')
    const [loading,SetLoading]=useState(true)
    const provider = new GoogleAuthProvider()
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, passwod) => {
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, passwod)
    }
    const LogOut = () => {
        SetLoading(true)
        return signOut(auth)
    }
    const SignInWithGoogle = () => {
        SetLoading(true)
        return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
       const unSubscribe=onAuthStateChanged(auth,(CurretUser=>{
                     setUser(CurretUser)
                     SetLoading(false)
       }))
       return ()=>unSubscribe()
    },[])
    const info = {
        createUser,
        signIn,
        LogOut,
        SignInWithGoogle,
        user,
        loading

    }
    return (
        <div>
            <AuthContex.Provider value={info} >
                {children}
            </AuthContex.Provider>

        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;