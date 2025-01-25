import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../Components/Shared/LoadingSpin";
import useAuth from "../Hooks/useAuth";
import usePublicAxios from "../Hooks/usePublicAxios";
import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types'
const AgentRoute = ({children}) => {
    const location=useLocation()
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
   return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};
AgentRoute.propTypes={
    children:PropTypes.node
}

export default AgentRoute;