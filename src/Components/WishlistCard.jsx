import { Link } from "react-router-dom";
import usePrivetAxios from "../Hooks/usePrivetAxios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import PropTypes from 'prop-types'

const WishlistCard = ({property,refetch}) => {
   const axiosPrivate=usePrivetAxios()
    const {propertyName,location,agentName,agentImage,propertyId,
        varifyStatus,maxPrice,minPrice,_id}=property || {}
        //console.log(property)
        const handleRemoveWishlist=(id)=>{
          Swal.fire({
            title: "Are you sure?",
            text: "You want remove it",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: " remove"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPrivate.delete(`/wishlistDelete/${id}`).then((res)=>{
                  
                      if(res.data?.deletedCount){
                        Swal.fire({
                          title: "Deleted!",
                          text: "Review has been Removed.",
                          icon: "success"
                        });
                        refetch()
                      }
                }
             
                )
                .catch(error=>toast.error(error.message));
                

            
            }
          });
        }
    return (
        <div className="card glass  shadow-xl">
        
        <div className="card-body">
          <div className='flex gap-2 font-bold items-center'><img referrerPolicy='no-referrer' className='h-8 w-8 rounded-full' src={agentImage} alt="" /> <p>{agentName}</p></div>
          <div className="divider h-1 bg-green-200"></div>
         <div className="flex justify-between items-center"> <h2 className="card-title">{propertyName}</h2> <div className="inline px-2 py-1 rounded-badge border border-yellow-700">{varifyStatus}</div></div>
          <p>{location}</p>
          <p>${minPrice}-${maxPrice}</p>
          
          <div className="card-actions gap-3 items-center justify-end">
            <Link to={`/dashboard/wishlist/offer/${propertyId}`} className='btn bg-yellow-100'>Make an Offer</Link>
            <button onClick={()=>handleRemoveWishlist(_id)} className="btn bg-yellow-100">Remove</button>
          
          </div>
        </div>
      </div>
    );
};
WishlistCard.propTypes={
  property:PropTypes.object,
  refetch:PropTypes.func
}
export default WishlistCard;