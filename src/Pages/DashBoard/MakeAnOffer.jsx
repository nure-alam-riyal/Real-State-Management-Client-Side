import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import { useState } from "react";
import toast from "react-hot-toast";


const MakeAnOffer = () => {
    
    const {id}=useParams()
    const {user}=useAuth()
    const axiosPrivate=usePrivetAxios()
    const { data: property = {}, isLoading } = useQuery({
        queryKey: ['id'],
        queryFn: async () => {
            const data = await axiosPrivate.get(`/Property/${id}`)
            return data.data
        }
    })
    const {  agentName,_id, propertyName,location, varifyStatus,description,agentEmail, maxPrice, minPrice } = property || {}
    const [offerRange,setOfferRange]=useState(minPrice)
    // const [offerRange2,setOfferRange2]=useState('')
    
    // console.log(property)
    if(isLoading) {return <LoadingSpin></LoadingSpin>}
    
   if(maxPrice<offerRange)
   {
    setOfferRange(maxPrice)
    //   setOfferRange2('out of range')
   }
   else if(minPrice>offerRange)
   {
    setOfferRange(minPrice)
    //  setOfferRange2('out of range')
   }
   else{
    // setOfferRange2(null)
   }

    

    const handleUdateProperty=async e=>{
        e.preventDefault()
         const formdata=new FormData(e.target)
                const data= Object.fromEntries(formdata.entries())
              const  { offerprice, ...newdata}=data 
              const offerRange1=parseFloat(offerprice)
              if(offerRange1>maxPrice || offerRange1<minPrice){
                return toast.error('out of range')
              }
             const info={
                ...newdata,
                offerRange:offerRange1,
                buyingStatus:'Pending For Buy',
                propertyId:id,

             }
            //  console.table(info)
             await axiosPrivate.post('/offer',info).then((res)=>{
                console.log(res)
                if(res.data?.insertedId)
                    toast.success('offer succeed')
                })
                .catch(er=>toast.error(er.message))
            }
           
   

    return (
        
         
        <div className= " flex justify-center">
            <div className="card bg-base-100 w-11/12 md:w-full mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleUdateProperty} className="card-body">
                 
                        <div className="lg:flex gap-5" >
                            <div className="flex-1">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Property Name</span>
                                    </label>
                                    <input type="text" defaultValue={propertyName} readOnly name="propertyName" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="text" name="location" defaultValue={location} readOnly placeholder="Location of the property" className="input input-bordered" required />
                                </div>
                            </div>

                        </div>
                       
                  
                    <div className="lg:flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" name="customerEmail" defaultValue={user?.email} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="customerName" defaultValue={user?.displayName} readOnly className="input input-bordered" required />
                       
                    </div>
                    </div>
                    <div className="lg:flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Agent Email</span>
                        </label>
                        <input type="email" name="agentEmail" defaultValue={agentEmail} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Agent Name</span>
                        </label>
                        <input type="text" name="agentName" defaultValue={agentName} readOnly className="input input-bordered" required />
                       
                    </div>
                    </div>
                    <div className="lg:flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Offer Price</span>
                        </label>
                        <input type="number" name="offerprice" onChange={(e)=>setOfferRange(e.target.value)} value={offerRange} className="input input-bordered" required />
                        {
                            // offerRange2?<p className="text-red-500">{offerRange2}</p>:<p>riyal</p>
                        }
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" defaultValue={new Date()} placeholder={`${new Date()}`} name="offerDate" className="input input-bordered" required />
                       
                    </div>
                    </div>
                    {/* <div>
                        <textarea name="description" id="" cols={3}  rows="3" required className="w-full border rounded-2xl p-3" placeholder="Describe the property"></textarea>
                    </div> */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Offer Now</button>
                    </div>
                </form>
            </div>


        </div>


    
    );
};

export default MakeAnOffer;