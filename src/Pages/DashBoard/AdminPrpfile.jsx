import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Profile from "../../Components/Shared/Profile";
import { Helmet } from "react-helmet";


const AdminPrpfile = () => {
    const axiosPublic=usePublicAxios()
    const {user}=useAuth()
    const {data:userr={} ,isLoading}=useQuery({
        queryKey:[user?.email],
        queryFn: async()=> {
            const data=await axiosPublic.get(`/user/${user.email}`)
            
               return data.data
}})
if(isLoading) return <div>
    <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
</div>
    return (
        <div>
             <Helmet>
        <title>Admin | Dream Nest Real Estate</title>
         </Helmet>
            
            <Profile user={userr}></Profile>
            
        </div>
    );
};

export default AdminPrpfile;