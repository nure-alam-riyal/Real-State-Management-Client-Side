import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../Hooks/usePrivetAxios";

import CardAllProperties from "../Components/CardAllProperties";
import LoadingSpin from "../Components/Shared/LoadingSpin";
import { useState } from "react";


const AllProperties = () => {
    const [search,setSearch]=useState('')
    const axiosPrivate=usePrivetAxios()
    const {data:allProperties=[],isLoading}=useQuery({
        queryKey:['allproperties',search],
        queryFn:async () => {
          const data=  await axiosPrivate.get(`/allProperties?search=${search}`)
            return data.data
        }
    }) 
    if(isLoading) return <LoadingSpin></LoadingSpin>
    console.log(allProperties)
    return (
        <div>
            <div className="flex my-8">
                <div> <p>sorted by Price Range</p></div>
                <div className=" w-1/3 mx-auto"><input capture className="border px-3 w-full py-2 rounded-xl " type="text" defaultValue={search} onChange={(e)=>setSearch(e.target.value)} name="" placeholder="search by location" id="" /></div>
            </div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-3 grid-cols-1">
                {
                       allProperties.map(property=><CardAllProperties key={property?._id} property={property}></CardAllProperties>)
                }
            </div>
            
        </div>
    );
};

export default AllProperties;