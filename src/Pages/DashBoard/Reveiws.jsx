import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import toast from "react-hot-toast";


const Reveiws = () => {
    const {user}=useAuth()
      const { id } = useParams()
      const axiosPrivate=usePrivetAxios()
      const handleReview= async (e) => {
        e.preventDefault()
        const review=e.target.review.value 
 const reviewInfo={
 reviewerName:user?.displayName,
 reviewerEmail:user?.email,
 reviewTime:new Date(),
 reviewerImage:user?.photoURL,
 propertyId:id,
 review
 }
 await axiosPrivate.post('/review',reviewInfo).then(()=>{
    toast.success('Thanks For Your Comment')
 }).catch(err=>toast.error(err.message))

      }
    return (
         <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <form onSubmit={handleReview} className="card-body">
                      <div className="form-control">
                       
                        <textarea  name="review" required placeholder="write your reviews"  className="w-full rounded-xl p-4 border" rows="5"></textarea>
                      </div>
                      
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Reviews</button>
                      </div>
                    </form>
                    
                  </div>
    );
};

export default Reveiws;