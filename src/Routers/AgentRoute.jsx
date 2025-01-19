import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../Components/Shared/LoadingSpin";
import useAuth from "../Hooks/useAuth";
import usePublicAxios from "../Hooks/usePublicAxios";
import { Navigate } from "react-router-dom";


const AgentRoute = ({children}) => {
    const axiosPublic=usePublicAxios()
    const {user,loading}=useAuth()
    const {data:user1={},isLoading}=useQuery({
        queryKey:[user.email],
        queryFn:async () => {
          const data=  await axiosPublic.get(`/user/${user.email}`)
          return data.data
        }
    })
    
    if(loading || isLoading) return <LoadingSpin></LoadingSpin>
    if(user&& user1?.role==='Agent'|| user&& user1?.role==='Fraud')
        return children

    else
    <Navigate to={'/login'}></Navigate>
};


export default AgentRoute;