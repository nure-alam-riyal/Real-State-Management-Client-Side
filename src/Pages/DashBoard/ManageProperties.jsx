import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";


const ManageProperties = () => {
    const axiosPrivate=usePrivetAxios()
    const {data:allProperty=[],isLoading}=useQuery({
        queryKey:['property'],
        queryFn:async () => {
            const data=await  axiosPrivate('/property')
            return data.data
        }
    }) 
    console.log(allProperty)
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
    <td>{property?.minPrice}-{property?.maxPrice}</td>
    <td>
        <div className="space-x-3">
            <button className="btn ">Accept</button>
            <button className="btn ">Reject</button>
            
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