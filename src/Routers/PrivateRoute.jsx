import { Navigate } from "react-router-dom";
import LoadingSpin from "../Components/Shared/LoadingSpin";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../Hooks/usePublicAxios";

import PropTypes from 'prop-types'
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
   return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};
PrivateRoute.propTypes={
    children:PropTypes.node
}

export default PrivateRoute;