import { Navigate } from "react-router-dom";
import LoadingSpin from "../Components/Shared/LoadingSpin";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    if(loading) return <LoadingSpin></LoadingSpin>
    if(user)
        return children

    else
    <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;