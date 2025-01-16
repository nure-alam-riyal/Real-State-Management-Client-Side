import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";


const Managereviews = () => {
    const axiosPrivate=usePrivetAxios()
    const {data:allReviews=[],isLoading}=useQuery({
        queryKey:['allreview'],
        queryFn:async () => {
            const data=await axiosPrivate('/allreview')
            return data.data
        }
    })
    if(isLoading) return <LoadingSpin></LoadingSpin>
    return (
        <div className="">
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
                                   <button className="btn btn-primary">Delete</button>
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