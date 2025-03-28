import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import usePrivetAxios from "../Hooks/usePrivetAxios";
import LoadingSpin from "../Components/Shared/LoadingSpin";
import { format } from "date-fns";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


const CardDetails = () => {
    const { id } = useParams()
    const {user}=useAuth()
    const axiosPrivate = usePrivetAxios()
    const { data: property = {}, isLoading } = useQuery({
        queryKey: ['id'],
        queryFn: async () => {
            const data = await axiosPrivate.get(`/oneproperty/${id}`)
            return data.data
        }
    })
    const { data: reviews =[], isLoading:loading } = useQuery({
        queryKey: ['id','review'],
        queryFn: async () => {
            const data = await axiosPrivate.get(`/review/${id}`)
            return data.data
        }
    })
    const handleWishlist=async()=>{
        const info={customerEmail:user?.email,
            propertyId:id
        }
        //console.log(info)
        await axiosPrivate.post('/added-wishlist',info)
        .then((result)=>{
        if(result?.data?.insertedId)
        {toast.success('Wishlist aded successfuly')}
        else{
            toast.error(result?.data?.message)
        }
        })
        
        .catch(err=> toast.error(err.message))
    }
    //console.log(property)
    if (isLoading || loading) return <LoadingSpin></LoadingSpin>
    const { image, agentImage, agentName,_id, propertyName,location, varifyStatus,description,agentEmail, maxPrice, minPrice } = property || {}
    return (
        <div>
             <Helmet>
        <title>Details  | Dream Nest Real Estate</title>
         </Helmet>
            <div className="card lg:card-side lg:h-[450px] bg-base-100 shadow-xl">
                <figure className="lg:w-1/2 h-full ">
                    <img className="h-full w-full"
                        src={image}
                        alt={propertyName} 
                        referrerPolicy='no-referrer'/>
                </figure>
                <div className="card-body lg:w-1/2">
                <div className='flex gap-2 font-bold items-center'>
                        <img className='h-8 w-8 rounded-full' referrerPolicy="no-referrer" src={agentImage} alt="" />
                      <div>
                        <p>{agentName}</p>
                        <p>{agentEmail}</p>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2">
                        <h2 className="card-title">{propertyName}</h2>
                        <div className="rounded-badge px-2  py-1 border border-yellow-100">{varifyStatus}</div>
                    </div>
                       <div>${minPrice}-${maxPrice}</div>
                       <div>
                        {location}
                       </div>
                   <br />
                    <p>{description}</p>
                    <br />
                    <div className="card-actions flex gap-3 justify-end">
                        <button onClick={handleWishlist} className="btn btn-primary">Add Wishlist</button>
                        <Link to={`/allProperties/review/${_id}`} className="btn btn-primary">Add Review</Link>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                  <h1 className="text-3xl font-bold">All Reviews</h1>
                  <div className="divider"></div>
                  {
                    reviews?.map(review=><div key={review?._id}>

                      <div className="border my-3 rounded-xl p-4">
                      <h3 className="font-bold text-xl my-2">{format(new Date(review?.reviewTime),"Pp")},</h3>
                      <p>{review?.review}</p>
                      </div>

                    </div>)
                  }

            </div>
        </div>
    );
};

export default CardDetails;