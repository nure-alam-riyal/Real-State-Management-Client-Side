import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import WishlistCard from "../../Components/WishlistCard";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { Helmet } from "react-helmet";


const WishListPages = () => {
    const {user}=useAuth()
    const axiosPrivate= usePrivetAxios()
    const {data:wishlist=[],isLoading,refetch}=useQuery({
        queryKey:['myWishlist',user?.email],
        enabled:!!user?.email,
        queryFn:async () => {
            const data= await axiosPrivate.get(`/myWishlist/${user.email}`)
            return data.data
        }
    })
    if(isLoading) return <LoadingSpin></LoadingSpin>
  
    return (
        <div>
             <Helmet>
        <title>WishList | Dream Nest Real Estate</title>
         </Helmet>
            <SectionTitle head={"My WishList"}></SectionTitle>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {
                wishlist.map(list=><WishlistCard key={list?._id} property={list} refetch={refetch}></WishlistCard>)

                
            }
           </div>
        </div>
    );
};

export default WishListPages;