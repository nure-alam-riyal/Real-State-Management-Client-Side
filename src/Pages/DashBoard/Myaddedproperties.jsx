import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import usePrivetAxios from "../../Hooks/usePrivetAxios";

import Card from "../../Components/Card";
import useAuth from "../../Hooks/useAuth";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { Helmet } from "react-helmet";


const Myaddedproperties = () => {
    const axiosPrivate=usePrivetAxios()
    const {user}=useAuth()
    const {data:allProperty=[],isLoading,refetch}=useQuery({
        queryKey:['property',user.eamil],
        queryFn:async () => {
            const data=await  axiosPrivate.get(`/property/${user?.email}`)
            return data.data
        }
    }) 
    //console.log(allProperty)
    if(isLoading) return <LoadingSpin></LoadingSpin>
    return (
        <div>
             <Helmet>
        <title>MY Added Properties | Dream Nest Real Estate</title>
         </Helmet>
            <SectionTitle head={"My Added Property"}></SectionTitle>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1">
                {
                        allProperty?.map(property=><Card key={property?._id} refetch={refetch} property={property}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Myaddedproperties;