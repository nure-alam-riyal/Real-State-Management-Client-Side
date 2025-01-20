import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import useAuth from "../../Hooks/useAuth";
import SectionTitle from "../../Components/Shared/SectionTitle";



const Mysoldproperties = () => {
    const {user}=useAuth()
    const axiosPrivate=usePrivetAxios()
    const {data:MyPayments=[],isLoading}=useQuery({
        queryKey:['payment',user?.email],
        queryFn:async () => {
            const data=await axiosPrivate.get(`/payment/${user?.email}`)
            return data.data
        }
    })
    
    if(isLoading) return <LoadingSpin></LoadingSpin>
    console.log(MyPayments)
    return (
        <div>
 <SectionTitle head={'MY Sold Property'}></SectionTitle>
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
        <th>Sold Price</th>
      </tr>
    </thead>
    <tbody>
      {MyPayments.map((payment,index)=><tr key={payment._id}>
        <th>{index+1}</th>
        <td>{payment?.propertyName}</td>
        <td>{payment?.location}</td>
        <td>{payment?.buyerName}</td>
        <td>{payment?.buyerEmail}</td>
        <td>{payment?.totalPrice}</td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>)
};

export default Mysoldproperties;