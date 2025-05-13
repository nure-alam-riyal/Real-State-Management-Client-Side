import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import usePublicAxios from "../Hooks/usePublicAxios";
import LoadingSpin from "../Components/Shared/LoadingSpin";
import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types'
const AdminRoute = ({children}) => {
    const location=useLocation()
    // console.log(location)
    const axiosPublic=usePublicAxios()
    const {user,loading}=useAuth()
    const {data:user1={},isLoading}=useQuery({
        queryKey:[user?.email],
        queryFn:async () => {
          const data=  await axiosPublic.get(`/user/${user?.email}`)
          return data.data
        }
    })
    
    if(loading || isLoading) return <LoadingSpin></LoadingSpin>
    if(user&& user1?.role==='Admin')
        return children

    else
   return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};
AdminRoute.propTypes={
    children:PropTypes.node
}

export default AdminRoute;