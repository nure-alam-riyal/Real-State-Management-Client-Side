import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/FirebaseAuth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
export const AuthContex = createContext('')
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
    const Updateprofile=(name,photo)=>{
 return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo,
 })
    }
    useEffect(()=>{
       const unSubscribe=onAuthStateChanged(auth,(CurretUser=>{
                     setUser(CurretUser)
                     console.log(CurretUser)
                     SetLoading(false)
       }))
       return ()=>unSubscribe()
    },[])
    const info = {
        createUser,
        signIn,
        LogOut,
        SignInWithGoogle,
        Updateprofile,
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
    children: PropTypes.any
}
export default AuthProvider;