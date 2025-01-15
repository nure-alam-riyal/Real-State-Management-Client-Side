import PropTypes from 'prop-types'
const Profile = ({ user }) => {
    const { userName, image, role, email } = user || {}
    return (
        <div >
            <div className="card bg-base-100 w-1/2 mx-auto shadow-xl">
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
            </div>

        </div>
    );
};
Profile.propTypes = {
    user: PropTypes.object
}
export default Profile;