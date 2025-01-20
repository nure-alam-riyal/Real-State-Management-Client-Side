import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import BoughtCard from "../../Components/BoughtCard";
import SectionTitle from "../../Components/Shared/SectionTitle";


const Propertybought = () => {
    const axiosPrivate=usePrivetAxios()
    const {user}=useAuth()
    const {data:myofferProperty=[],isLoading,refetch}=useQuery({
        queryKey:['offermyProperty',user?.email],
        queryFn:async () => {
            const data=await  axiosPrivate.get(`/offer/${user?.email}`)
            return data.data
        }
    }) 
    console.log(myofferProperty)
    if(isLoading) return <LoadingSpin></LoadingSpin>
    return (
       <div>
        <SectionTitle head={"My Bought Property"}></SectionTitle>
                   <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1">
                       {
                               myofferProperty.map(property=><BoughtCard key={property?._id} refetch={refetch} property={property}></BoughtCard>)
                       }
                   </div>
                   
               </div>
    );
};

export default Propertybought;