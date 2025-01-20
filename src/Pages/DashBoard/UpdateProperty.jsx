import { useQueries, useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import { imageURL } from "../../Utillits.js/ImageCreate";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";


const UpdateProperty = () => {
    
    const { user } = useAuth()

    const { id } = useParams()
    const axiosPrivate = usePrivetAxios()
    const { data = {}, isLoading } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const data = await axiosPrivate.get(`/user/${user?.email}`)
            return data.data
        }
    })
    console.log(data)
    const { data: propety = {}, isLoading: loading ,refetch} = useQuery({
        queryKey: ['oneproperty', id],
        queryFn: async () => {
            const data = await axiosPrivate.get(`/oneproperty/${id}`)
            return data.data
        }
    })
    
    const {maxPrice,minPrice,propertyName,location,description,varifyStatus,image}=propety || {}
    const [pic,setPic]=useState(image)
    const handleProperty = async e => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const data = Object.fromEntries(formdata.entries())
        const { image, maxprice, minprice, ...newdata } = data
        const maxPrice = parseFloat(maxprice)
        const minPrice = parseFloat(minprice)
         if(image.size){
            const photo = await imageURL(image)
       
            setPic(photo)
         }
       else{
        setPic(image)
       }
        const PROPERTYInfo = {
            maxPrice,
            minPrice,
            ...newdata,
            
            image: pic,
            agentImage: user?.photoURL,
            varifyStatus: varifyStatus
        }
        console.log(PROPERTYInfo)
        await axiosPrivate.put(`/propertyUpdate/${id}`, PROPERTYInfo)
            .then(result => {
                if(result.data.matchedCount){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your property has been updated",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            })
            .catch(error => console.log(error.meassage))



    }
    console.log(propety)
    if (isLoading || loading) return <LoadingSpin></LoadingSpin>
    return (
        <div>
            <SectionTitle head={'Update Your Property'}></SectionTitle>
            <div className=" flex justify-center">
                <div className="card bg-base-100 w-11/12 md:w-full mx-auto shrink-0 shadow-2xl">
                    <form onSubmit={handleProperty} className="card-body">
                        <div className="md:flex justify-between gap-5 space-y-3 items-center">
                            <div className="flex-1" >
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Property Name</span>
                                        </label>
                                        <input defaultValue={propertyName} type="text" name="propertyName" placeholder="Property Name" className="input input-bordered" required />
                                    </div>
                                </div>

                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Location</span>
                                        </label>
                                        <input type="text"defaultValue={location} name="location" placeholder="Location of the property" className="input input-bordered" required />
                                    </div>
                                </div>

                            </div>
                            <div className="form-control border w-60 h-40  rounded-2xl justify-center items-center flex-wrap">
                                <label className="label">
                                    <span className="label-text">Give A Picture</span>
                                </label>
                                <div className="mx-auto w-[90%]"> <input  type="file" name="image" placeholder="Take a Picture"  /></div>
                            </div>
                        </div>
                        <div className="lg:flex gap-5">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Agent Email</span>
                                </label>
                                <input type="email" name="agentEmail" defaultValue={user?.email} readOnly className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Agent Name</span>
                                </label>
                                <input type="text" name="agentName" defaultValue={user?.displayName} readOnly className="input input-bordered" required />

                            </div>
                        </div>
                        <div className="lg:flex gap-5">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Min Price</span>
                                </label>
                                <input type="number" name="minprice"  defaultValue={minPrice} className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Max Price</span>
                                </label>
                                <input type="number" defaultValue={maxPrice} name="maxprice" className="input input-bordered" required />

                            </div>
                        </div>
                        <div>
                            <textarea name="description" defaultValue={description} id="" cols={3} rows="3" required className="w-full border rounded-2xl p-3" placeholder="Describe the property"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={data?.role === "Fraud" ? 'true' : ''} className="btn btn-primary">Update Property</button>
                            {
                                data?.role === "Fraud" && (<span className="text-red-500 text-2xl inline-block px-2  py-1 text-center">You are Fraud</span>)
                            }
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default UpdateProperty;