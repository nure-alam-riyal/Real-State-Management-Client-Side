import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Profile from "../../Components/Shared/Profile";
import { Helmet } from "react-helmet";


const UserProfile = () => {
    const axiosPublic=usePublicAxios()
    const {user}=useAuth()
    const {data}=useQuery({
        queryKey:[user?.email],
        queryFn: async()=> {
            const data=await axiosPublic.get(`/user/${user.email}`)
            
               return data.data
}})

    return (
        <div>
             <Helmet>
        <title>Customer | Dream Nest Real Estate</title>
         </Helmet>
            <Profile user={data}></Profile>
            
        </div>
    );
};

export default UserProfile;