import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import useAuth from "../../Hooks/useAuth";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { Helmet } from "react-helmet";
import  html2pdf  from 'html2pdf.js';



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
    const handleDownload=async()=>{
       const element = window.querySelector('#riyal')
        if(element){
 console.log("riyal")

    }

console.log("first")
html2pdf(element)
  html2pdf()
    .set({
      margin: 10,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    })
    .from(element)
    .save();
   
   
    }
    if(isLoading) return <LoadingSpin></LoadingSpin>

    const totalAmout=MyPayments.reduce((sum,payment)=>(sum+payment?.totalPrice),0)
    //console.log(totalAmout)
    return (
        <div>
           <Helmet>
        <title>My sold Properties | Dream Nest Real Estate</title>
         </Helmet>
 <div className="flex justify-between items-center" >
  
 <div className="flex-1"> <SectionTitle head={'MY Sold Property'}></SectionTitle></div>
 <div>
  <button onClick={handleDownload} className="btn ">Download the list of sold property</button>
 </div>
 </div>
            <div className="overflow-x-auto" id="riyal"  >
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

<div className="my-20" >
<p className="font-bold text-center text-3xl">My sold propety`s Total amount :{totalAmout}</p>
</div>
        </div>)
};

export default Mysoldproperties;