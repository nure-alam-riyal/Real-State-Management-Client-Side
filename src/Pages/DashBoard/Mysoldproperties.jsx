import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import useAuth from "../../Hooks/useAuth";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { Helmet } from "react-helmet";
import  html2pdf  from 'html2pdf.js';
// import html2canvas from "html2canvas";
import html2canvas from "html2canvas-pro";
import { useRef } from "react";
import { jsPDF } from "jspdf";



const Mysoldproperties = () => {
  

  const printRef=useRef()
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
      const element=printRef.current

   
   const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  // Step 3: Add image to PDF
  pdf.addImage(imgData, 'PNG', 0, 10, imgWidth, imgHeight);

  // Step 4: Save
  pdf.save('document.pdf');
   
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
            <div className="overflow-x-auto force-print-colors" id="riyal" ref={printRef} style={{
    color: '#000',
    backgroundColor: '#fff',
    borderColor: '#000',
  }}  >
   <table className="table table-zebra text-center" style={{ backgroundColor: '#fff', color: '#000' }}>
    {/* head */}
    <thead style={{ backgroundColor: '#fff', color: '#000' }}>
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
  <div className="my-20" >
<p className="font-bold text-center text-3xl">My sold propety`s Total amount :{totalAmout}</p>
</div>
</div>


        </div>)
};

export default Mysoldproperties;