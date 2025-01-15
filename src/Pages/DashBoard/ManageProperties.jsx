import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import toast from "react-hot-toast";
import { useState } from "react";


const ManageProperties = () => {
  
    const axiosPrivate=usePrivetAxios()
    const {data:allProperty=[],isLoading,refetch}=useQuery({
        queryKey:['property'],
        queryFn:async () => {
            const data=await  axiosPrivate('/property')
            return data.data
        }
    }) 
   
    const handleVarifyStatus=async(id,Vstatus)=>{
         axiosPrivate.patch(`/property-varification/${id}`,
          {varification:Vstatus}
         ).then(()=>{
            toast.success(`This property is ${Vstatus}`)
            if(Vstatus==='verified'){
          refetch()
            }
          }
         )
         .catch(()=>{
              toast.error('varification failed')
         }
         

         )
    }
    if(isLoading) return <LoadingSpin></LoadingSpin>
    return (
        <div>

        <div className="overflow-x-auto">
<table className="table table-zebra text-center">
{/* head */}
<thead>
  <tr>
    <th>#</th>
    <th>Property Title</th>
    <th>Location</th>
    <th>Agent Name</th>
    <th>Agent Email</th>
    <th>Price Range</th>
    <th>
        Action
    </th>
  </tr>
</thead>
<tbody>
  {allProperty.map((property,index)=><tr key={property._id}>
    <th>{index+1}</th>
    <td>{property?.propertyName}</td>
    <td>{property?.location}</td>
    <td>{property?.agentName}</td>
    <td>{property?.agentEmail}</td>
    <td>${property?.minPrice}-${property?.maxPrice}</td>
    <td>
        <div className="space-x-3 flex gap-3">
           {
            property?.varifyStatus==='verified' ?
             <button className="btn bg-yellow-200 ">Verified</button>
             :
             <button onClick={()=>handleVarifyStatus(property._id,"verified")} className="btn bg-yellow-200 ">Accept</button>
           } 
           {
            property?.varifyStatus==='verified'|| <button disabled={ property?.varifyStatus=='rejected'} onClick={()=>handleVarifyStatus(property._id,"rejected")} className="btn  bg-red-400">Reject</button>
           }
            
            
        </div>
    </td>
  </tr>)}
  
  
</tbody>
</table>
</div>
    </div>
    );
};

export default ManageProperties;