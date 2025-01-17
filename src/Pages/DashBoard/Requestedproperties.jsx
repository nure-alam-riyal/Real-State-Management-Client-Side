import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";


const Requestedproperties = () => {
    const axiosPrivate=usePrivetAxios()
    const {data:offerProperty=[],isLoading,refetch}=useQuery({
        queryKey:['offer'],
        queryFn:async () => {
            const data=await  axiosPrivate('/offer')
            return data.data
        }
    })
    if(isLoading) return <LoadingSpin></LoadingSpin>
    const handleOfferStatus=async (id,status)=> {
        
    }
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
    <th>Buyer Name</th>
    <th>Buyer Email</th>
    <th>Price Range</th>
    <th>
        Action
    </th>
  </tr>
</thead>
<tbody>
  {offerProperty.map((property,index)=><tr key={property._id}>
    <th>{index+1}</th>
    <td>{property?.propertyName}</td>
    <td>{property?.location}</td>
    <td>{property?.customerName}</td>
    <td>{property?.customerEmail}</td>
    <td>${property?.offerRange}</td>
    <td>
        <div className="space-x-3 flex gap-3">
           {/* {
            property?.varifyStatus==='verified' ?
             <button className="btn bg-yellow-200 ">Verified</button>
             :
             <button onClick={()=>handleVarifyStatus(property._id,"verified")} className="btn bg-yellow-200 ">Accept</button>
           } 
           {
            property?.varifyStatus==='verified'|| <button disabled={ property?.varifyStatus=='rejected'} onClick={()=>handleVarifyStatus(property._id,"rejected")} className="btn  bg-red-400">Reject</button>
           } */}
              <button onClick={()=>handleOfferStatus(property._id,"verified")} className="btn bg-yellow-200 ">Accept</button>
              <button disabled={ property?.varifyStatus=='rejected'} onClick={()=>handleOfferStatus(property._id,"rejected")} className="btn  bg-red-400">Reject</button>
        </div>
    </td>
  </tr>)}
  
  
</tbody>
</table>
</div>
    </div>
    );
};

export default Requestedproperties;