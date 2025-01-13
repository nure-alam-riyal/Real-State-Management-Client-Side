import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";


const useAuth = () => {
    const info=useContext(AuthContex)
    return info
};

export default useAuth;