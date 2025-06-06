import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


const Managereviews = () => {
    const axiosPrivate=usePrivetAxios()
    const {data:allReviews=[],isLoading,refetch}=useQuery({
        queryKey:['allreview'],
        queryFn:async () => {
            const data=await axiosPrivate('/allreview')
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
                }
             
                )
                .catch(error=>toast.error(error.message));
                

            
            }
          });
    }
    return (
        <div className="mt-14">
           <Helmet>
        <title>Manage Reviews | Dream Nest Real Estate</title>
         </Helmet>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                       {
                            allReviews.map(review=><div key={review?._id}>
                        <div className="card image-full  h-[350px] w-full   glass shadow-xl">
                                {/* <figure>
                                  <img className=""
                                    src={review?.image}
                                    alt="Shoes" />
                                </figure> */}
                                <div className="card-body flex flex-col rounded-2xl bg-black bg-opacity-30">
                                <div className='flex gap-2 font-bold items-center'><img className='h-8 w-8 rounded-full' src={review?.reviewerImage} alt="" /> <div><p>{review?.reviewerName}</p>
                                <p><p>{review?.reviewerEmail}</p></p></div></div>
                                 <div className="">
                                 <div className="divider h-1 bg-yellow-700"></div>
                                 <p>{review?.review.substring(0,120)}</p>
                                 </div>
                                  <div className="card-actions  mt-4 justify-between">
                                   <button onClick={()=>handleDelete(review?._id)} className="btn btn-primary">Delete</button>
                                  </div>
                                </div>
                              </div>
                            </div>)
                        }
                       </div>
        </div>
    );
};

export default Managereviews;