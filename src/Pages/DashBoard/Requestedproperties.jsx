import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import { useState } from "react";
import toast from "react-hot-toast";


const Requestedproperties = () => {

  const axiosPrivate = usePrivetAxios()
  const { data: offerProperty = [], isLoading, refetch } = useQuery({
    queryKey: ['offer'],
    queryFn: async () => {
      const data = await axiosPrivate('/offer')
      return data.data
    }
  })
  if (isLoading) return <LoadingSpin></LoadingSpin>
  const handleOfferStatus = async (id, customerEmail,status) => {
    axiosPrivate.patch(`/offerStatusChange`, { id, customerEmail,status })
      .then(res => {
        
        if(res.data.modifiedCount){
          toast.success('Request updated')
          console.log(res.data.modifiedCount)
        }
        else{
          
          toast('Request Failed')
        }

        refetch()
      })
      .catch(eror => toast.error(eror.message))
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
            {
              offerProperty.map((property, index) => <tr key={property._id}>
                <th>{index + 1}</th>
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
                    {
                     property?.buyingStatus === 'Pending For Buy' ? <button onClick={() => handleOfferStatus(property?.propertyId, property?.customerEmail, "accepted")} className="btn bg-yellow-200 ">Accept</button>:''}
                    {property?.buyingStatus === 'Pending For Buy' ? <button onClick={() => handleOfferStatus(property._id, property?.customerEmail, "rejected")} className="btn  bg-red-400">Reject</button>:""}
                    {property?.buyingStatus !== 'Pending For Buy' && <button className="btn  bg-slate-200">{property?.buyingStatus}</button>}
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