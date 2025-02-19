import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


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
           <Helmet>
        <title>Reveiws | Dream Nest Real Estate</title>
         </Helmet>
                    <form onSubmit={handleReview} className="card-body">
                      <div className="form-control">
                       
                        <textarea maxLength={120}  name="review" required placeholder="write your reviews(max laters 120)"  className="w-full rounded-xl p-4 border" rows="5"></textarea>
                      </div>
                      
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Reviews</button>
                      </div>
                    </form>
                    
                  </div>
    );
};

export default Reveiws;