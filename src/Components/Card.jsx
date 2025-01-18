
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import usePrivetAxios from '../Hooks/usePrivetAxios';

const Card = ({property,refetch}) => {
   const axiosPrivate=usePrivetAxios()
    const {image,propertyName,location,agentName,agentImage,
        varifyStatus,maxPrice,minPrice,_id}=property || {}
        console.log(property)
        const handleDeleteProperty=id=>{
          Swal.fire({
            title: "Are you sure?",
            text: "You want remove it",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "DELETE"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPrivate.delete(`/propertyDelete/${id}`).then((res)=>{
                  
                      if(res.data?.deletedCount){
                        Swal.fire({
                          title: "Deleted!",
                          text: "Property has been Delete.",
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
        <div className="card glass shadow-xl">
  <figure className="relative">
    <img
      src={image} referrerPolicy='no-referrer'
      alt="Shoes" 
      className="h-60 w-full"/>
      <div className="inline rounded-badge px-2 py-1 top-1 right-2 bg-slate-50 absolute">
        {varifyStatus}
      </div>
  </figure>
  <div className="card-body">
    <div className='flex gap-2 font-bold items-center'><img referrerPolicy='no-referrer' className='h-8 w-8 rounded-full' src={agentImage} alt="" /> <p>{agentName}</p></div>
    <h2 className="card-title">{propertyName}</h2>
    <p>{location}</p>
    <p>${minPrice}-${maxPrice}</p>
    
    <div className="card-actions justify-end">
      <button className='btn bg-yellow-100'>Update</button>
      <button onClick={()=>handleDeleteProperty(_id)} className="btn bg-red-200">Delete</button>
    </div>
  </div>
</div>
    );
};
Card.propTypes={
    property:PropTypes.object,
    refetch:PropTypes.func
}
export default Card;