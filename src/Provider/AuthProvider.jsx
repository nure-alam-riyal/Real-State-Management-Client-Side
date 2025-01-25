import { createContext, useEffect, useState } from "react";
import PropTypes  from 'prop-types'
import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/FirebaseAuth";

import usePublicAxios from "../Hooks/usePublicAxios";
import toast from "react-hot-toast";
export const AuthContex = createContext('')
const AuthProvider = ({ children }) => {
    const [wait,setWait]=useState(false)
    const axiosPublic=usePublicAxios()
    const [user,setUser]=useState('')
    const [loading,SetLoading]=useState(true)
    const provider = new GoogleAuthProvider();

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
    const DeleteUser=()=>{
      return  deleteUser(user)
    }
    const signInGoogle = () => {
       SetLoading(true)
        return signInWithPopup(auth, provider)
    }
    const Updateprofile= async(name,photo)=>{
      return  updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo,
 })
    }
    useEffect(()=>{
       const unSubscribe=onAuthStateChanged(auth,(CurretUser=>{
                     setUser(CurretUser)
                     //console.log(CurretUser)
                     SetLoading(false)
                     if(CurretUser){
                        const userInfo={
                            email:CurretUser?.email,
                            userName:CurretUser?.displayName,
                            image:CurretUser?.photoURL,
                            role:'Customer',
                        }
                        //console.log(userInfo)
                      axiosPublic.post('/user',userInfo).then(res=>{
                        if(res.data.insertedId){
                                   toast.success("user login")
                        }
                       })
                     axiosPublic.post('/jwt',{ email:CurretUser?.email})
                     .then(res=>{
                        if(res.data.token){
                            localStorage.setItem('token',res.data.token)
                        }
                     })

                     }
                     else{
                        localStorage.removeItem('token')
                     }
       }))
       return ()=>unSubscribe()
    },[axiosPublic])
    const info = {
        createUser,
        signIn,
        LogOut,
        signInGoogle,
        Updateprofile,
        DeleteUser,
        user,
        loading,setWait

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