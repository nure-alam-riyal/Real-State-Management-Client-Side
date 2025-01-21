import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import toast from "react-hot-toast";


const AdverticesProperty = () => {
    const axiosPrivate=usePrivetAxios()
    const {data:allProperties=[],isLoading,refetch}=useQuery({
        queryKey:['allproperties'],
        queryFn:async () => {
          const data=  await axiosPrivate.get(`/allProperties?ew=`)
            return data.data
        }
    }) 
    const handleAdvertise=async(id,count)=>{
     await axiosPrivate.put(`/allProperty1/${id}`,{
        activity:"advertise",
        count:count
     }).then(res=>{
        
        if(res.data?.modifiedCount){

            toast.success("advertise added")
        }
        refetch()
     })
     .catch(error=>toast.error(error.message))
    }
    if(isLoading) return <LoadingSpin></LoadingSpin>
    return (
        <div>
        <div className="flex my-8">
            
        </div>
        <div className="">
            
                   <div >
                    <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Property Name</th>
        <th>Agent Name</th>
        <th>Price Range</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="w-full">
      {/* row 1 */
      allProperties.map((property,idex)=><tr key={property?._id}>
        <th>
          {idex+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={property?.image}
                  alt={property?.propertyName} />
              </div>
            </div>
            <div>
        <div className="font-bold">{property?.propertyName}</div>
             
            </div>
          </div>
        </td>
        <td>
         {property?.agentName}
        </td>
        <td>${property?.minPrice}-{property?.maxPrice}</td>
        <th>
          <button onClick={()=>handleAdvertise(property?._id,property?.count)} className="btn btn-ghost btn-xs">Advertise</button>
        </th>
      </tr>
     
      )}
    </tbody>
    
    
  </table>
</div>
                   </div> 
            
        </div>
        
    </div>
    );
};

export default AdverticesProperty;