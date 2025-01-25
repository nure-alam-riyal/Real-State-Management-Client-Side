import PropTypes from 'prop-types'
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Profile = ({ user }) => {
    const navigate=useNavigate()
    const { userName, image, role, email } = user || {}
    const {LogOut}=useAuth()
    const handlelogOut=()=>{
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
                LogOut().then(()=>{

                    Swal.fire({

                       
                        text: "LogOut Successed",
                        icon: "success"

                      });
                      navigate('/')
                }).catch(error=>toast.error(error.message))
                
             
            }
          });
    }
    return (
        <div  className='flex justify-center items-center h-[600px]'>
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
                <div className='flex justify-center'><button onClick={handlelogOut} className='px-3  py-1 rounded-2xl mb-5 bg-red-200'>Log Out</button></div>
            </div>

        </div>
    );
};
Profile.propTypes = {
    user: PropTypes.object
}
export default Profile;