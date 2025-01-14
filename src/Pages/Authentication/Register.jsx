import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";

import { imageURL } from "../../Utillits.js/ImageCreate";



const Register = () => {
  const  axiosPublic=usePublicAxios()
  const {createUser,Updateprofile}=useAuth()
  const handleUser= async e=>{
    e.preventDefault()
    const name=e.target.name.value
    const photo=e.target.photo.files[0]
    const email=e.target.email.value
    const password=e.target.password.value
    const image=await imageURL(photo)
  const  info={userName:name,image,email,role:"Customer"}
  console.log(info)
   await createUser(email,password).then(
     await Updateprofile(name,image).then(async()=>{

     
      
      await axiosPublic.post('/user',info).then(res=>console.log(res.data))

      }).catch(error=>console.log(error))
    )
    .catch()
   }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name"  placeholder="Enter Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="file" name="photo"  placeholder="Take your Photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;