import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import usePrivetAxios from "../Hooks/usePrivetAxios";
import LoadingSpin from "../Components/Shared/LoadingSpin";


const CardDetails = () => {
    const {id}=useParams()
    const axiosPrivate=usePrivetAxios()
    const {data:property={},isLoading}=useQuery({
        queryKey:['id'],
        queryFn:async () => {
            const data=await axiosPrivate.get(`/Property/${id}`)
            return data.data
        }
    })
if(isLoading) return <LoadingSpin></LoadingSpin>
  const {}=property || {}
    return (
        <div>
            
        </div>
    );
};

export default CardDetails;