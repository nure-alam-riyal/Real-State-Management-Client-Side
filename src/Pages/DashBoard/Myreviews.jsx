import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import { format } from "date-fns";


const Myreviews = () => {
    const {user}=useAuth()
    const axiosPrivate=usePrivetAxios()
    const {data:reviews=[],isLoading}=useQuery({
        queryKey:[user?.email,'review'],
        queryFn:async () => {
            const data=await axiosPrivate(`/myreview/${user?.email}`)
            return data.data
        }
    })
    if(isLoading) return <LoadingSpin></LoadingSpin>
    console.log(reviews)
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2 xl:grid-cols-3">
           {
                reviews.map(review=><div key={review?._id}>
            <div className="card image-full  h-72 glass shadow-xl">
                    <figure>
                      <img className=""
                        src={review?.image}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body rounded-2xl bg-black bg-opacity-30">
                    <div className='flex gap-2 font-bold items-center'><img className='h-8 w-8 rounded-full' src={review?.agentImage} alt="" /> <p>{review?.agentName}</p></div>
                      <h2 className="card-title mt-3">{review?.propertyName}</h2>
                      <p>{review?.review.substring(0,120)} ......</p>
                      <div className="card-actions flex-1 mt-4 justify-between">
                       <div><p>{format(new Date(review?.reviewTime),"p")}</p>
                       <p>{format(new Date(review?.reviewTime),"P")}</p></div> <button className="btn btn-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>)
            }
           </div>
        </div>
        
    );
};

export default Myreviews;