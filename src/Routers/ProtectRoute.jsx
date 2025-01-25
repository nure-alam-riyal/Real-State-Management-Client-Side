
import useAuth from "../Hooks/useAuth";

import LoadingSpin from "../Components/Shared/LoadingSpin";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const ProtectRoute = ({children}) => {
    const location =useLocation()
        
        const {user,loading}=useAuth()
        
        if(loading) return <LoadingSpin></LoadingSpin>
        if(user)
            return children
        else
       { return <Navigate to={'/login'} state={location?.pathname}></Navigate>}
    };
  ProtectRoute.propTypes={
        children:PropTypes.node
    }

export default ProtectRoute;