

import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";



const LogIn = () => {
  const [eye,setEye]=useState(true)
const {signIn,signInGoogle}=useAuth()
    const handleUserData = (e) => {


        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email,password).then(user=>console.log(user))
        .catch(error=>console.log(error));
        
      
    }
    const handleGoogleLogIn=async()=>{
      await signInGoogle().
       then(Result=>console.log(Result.user))
       .catch(error=>console.log(error.message))
      }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUserData} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={`${eye ? 'password' : 'text'}`} name="password" placeholder="password" className="input input-bordered" required />
                <div onClick={() => setEye(!eye)} className="absolute right-4 top-12">{
                eye ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
              }</div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider divider-warning">OR</div>
            <div className="flex justify-center">
                    <div onClick={handleGoogleLogIn} className="bg-blue-500 btn my-4 w-2/3 mx-auto">LogIn With Google</div>
            </div>
            <p className="text-center my-3 ">Are you New? please<Link to={'/register'} className="text-blue-700"> Sign Up </Link></p>

          </div>
        </div>
      </div>
    );
};

export default LogIn;