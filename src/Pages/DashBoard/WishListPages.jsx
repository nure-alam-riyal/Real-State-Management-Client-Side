import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import WishlistCard from "../../Components/WishlistCard";


const WishListPages = () => {
    const {user}=useAuth()
    const axiosPrivate=usePrivetAxios()
    const {data:wishlist=[],isLoading}=useQuery({
        queryKey:[user?.email],
        queryFn:async () => {
            const data= await axiosPrivate.get(`/myWishlist/${user.email}`)
            return data.data
        }
    })
    if(isLoading) return <LoadingSpin></LoadingSpin>
  
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {
                wishlist?.map(list=><WishlistCard key={list?._id} property={list}></WishlistCard>)
            }
           </div>
        </div>
    );
};

export default WishListPages;