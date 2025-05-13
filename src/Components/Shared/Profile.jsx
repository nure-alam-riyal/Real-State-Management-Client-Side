import PropTypes from 'prop-types'
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { imageURL } from '../../Utillits.js/ImageCreate';
import { Helmet } from 'react-helmet';
const Profile = ({ user }) => {
    const navigate = useNavigate()
   
    const { userName, image, role, email } = user || {}
    const [img,setImg]=useState('')
    const { LogOut } = useAuth()
    const handlelogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You wnat LogOut!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout"
        }).then((result) => {

            if (result.isConfirmed) {
                LogOut().then(() => {

                    Swal.fire({


                        text: "LogOut Successed",
                        icon: "success"

                    });
                    navigate('/')
                }).catch(error => toast.error(error.message))


            }
        });
    }
    const handleUpdateProfile=async(e)=>{
        e.preventDefault()
                   const from=e.target 
                   const name=from.name.value 
                   const pic=from.image.files[0]
                //    console.log(name,img)
                   if(pic){
                    const Photo=await imageURL(pic)
                    setImg(Photo)
                   }
                   else{
                    setImg(image)
                   }
                   document.getElementById('my_modal_5').close()

                   
    }
    return (
        <div className='flex justify-center items-center h-[600px]'>
            
            <div className="card bg-base-100 md:w-1/2 w-11/12 mx-auto shadow-xl">
                <figure className="">
                    <img
                        src={image}
                        alt={userName}
                        className=" w-60 h-60 object-cover rounded-full" />
                </figure>
                <div className='flex justify-center text-center my-3 font-semibold text-xl'> <div className='w-[200px] bg-yellow-100 rounded-badge'>{role}</div></div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{userName}</h2>
                    <p>{email}</p>

                </div>
                <div className='flex justify-between w-10/12 mx-auto'>
                    <div onClick={handlelogOut} className='px-3  py-1 rounded-2xl mb-5 bg-red-200'>Log Out</div>
                    <div onClick={() => document.getElementById('my_modal_5').showModal()} className='px-3  py-1 rounded-2xl mb-5 bg-green-300'>UPdate Your Profile</div>
                </div>
            </div>


            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                   <form onSubmit={handleUpdateProfile} className='space-y-4 ' action="">
                    <div>
                        <label htmlFor="name" className='mt-2 block'> Enter Your Name</label>
                        <input type="text" defaultValue={userName} name='name' className='input w-full border border-b-amber-600'  placeholder='Enter Your Name'/>
                    </div>
                    <div>
                        <label className='mt-2 block' htmlFor="image"> Take Your Photo</label>
                        <input type="file" name='image' />
                    {image&&(<p className='text-green-800 ml-5'>
                          {`${img.slice(0,20)}.......${img.slice(img.length-6,img.lenght)}`}

                    </p>)}
                    </div>
                    
            

                            <button   className="btn">Close</button>
                        
                   
                   </form>
                    
                </div>
            </dialog>

        </div>
    );
};
Profile.propTypes = {
    user: PropTypes.object
}
export default Profile;