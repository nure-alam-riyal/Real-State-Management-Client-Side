import { Navigate } from "react-router-dom";
import LoadingSpin from "../Components/Shared/LoadingSpin";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../Hooks/usePublicAxios";


const PrivateRoute = ({children}) => {
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
    if(user&& user1?.role==='Customer')
        return children

    else
    <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;