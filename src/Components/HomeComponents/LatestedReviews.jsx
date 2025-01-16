import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../Hooks/usePublicAxios";
import LoadingSpin from "../Shared/LoadingSpin";


const LatestedReviews = () => {
    const   axiosPublic=usePublicAxios()
    const {data:latestReviewa=[],isLoading}=useQuery({
        queryKey:['latestreview'],
        queryFn:async () => {
            const data=await axiosPublic('/latestreview')
            return data.data;
        }
    })
    if(isLoading) return <LoadingSpin></LoadingSpin>
    console.log(latestReviewa)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
            {
                latestReviewa?.map(review=><div key={review?._id}>
                    <div className="card image-full   shadow-xl">
                            {/* <figure>
                              <img className=""
                                src={review?.image}
                                alt="Shoes" />
                            </figure> */}
                            <div className="card-body flex flex-col bg-slate-200 bg-opacity-20 rounded-2xl ">
                            <div className='flex gap-2 font-bold items-center'><img className='h-8 w-8 rounded-full' src={review?.reviewerImage} alt="" /> <div><p>{review?.reviewerName}</p>
                            {/* <p><p>{review?.reviewerEmail}</p></p> */}
                            </div>
                            </div>
                             <div className="flex-1">
                             <div className="divider h-1 bg-yellow-700"></div>
                            <h3 className="my-3 font-bold text-2xl">{review?.propertyName}</h3>
                             <p>{review?.review.substring(0,120)}</p>
                             </div>
                              {/* <div className="card-actions flex-1 mt-4 justify-between">
                               <button className="btn btn-primary">Delete</button>
                              </div> */}
                            </div>
                          </div>
                        </div>)
            }
        </div>
    );
};

export default LatestedReviews;