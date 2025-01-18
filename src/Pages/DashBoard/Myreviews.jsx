import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import { format } from "date-fns";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const Myreviews = () => {
    const {user}=useAuth()
    const axiosPrivate=usePrivetAxios()
    const {data:reviews=[],isLoading,refetch}=useQuery({
        queryKey:[user?.email,'review'],
        queryFn:async () => {
            const data=await axiosPrivate(`/myreview/${user?.email}`)
            return data.data
        }
    })
    if(isLoading) return <LoadingSpin></LoadingSpin>
    const handleDelete=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You want delete it",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: " delete"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosPrivate.delete(`/reviewDelete/${id}`).then((res)=>{
                if(res.data?.deletedCount){
                                        Swal.fire({
                                          title: "Deleted!",
                                          text: "Review has been Removed.",
                                          icon: "success"
                                        });
                                        refetch()
                                      }
                                      console.log(res)
            }
         
            )
            .catch(error=>toast.error(error.message));
            

        
        }
      });
    }
    console.log(reviews)
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2 xl:grid-cols-3">
           {
                reviews.map(review=><div key={review?._id}>
            <div className="card image-full  h-[350px] glass shadow-xl">
                    <figure>
                      <img className="h-full"
                        src={review?.image}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body rounded-2xl bg-black bg-opacity-30">
                    <div className='flex gap-2 font-bold items-center'><img className='h-8 w-8 rounded-full' src={review?.agentImage} alt="" /> <p>{review?.agentName}</p></div>
                      <div className="divider bg-yellow-200 h-1"></div>
                      <h2 className="card-title mt-3">{review?.propertyName}</h2>
                      <p>{review?.review.substring(0,120)} </p>
                      <div className="card-actions flex-1 mt-4 justify-between">
                       <div><p>{format(new Date(review?.reviewTime),"p")}</p>
                       <p>{format(new Date(review?.reviewTime),"P")}</p></div> <button onClick={()=>handleDelete(review?._id)} className="btn btn-primary">Delete</button>
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