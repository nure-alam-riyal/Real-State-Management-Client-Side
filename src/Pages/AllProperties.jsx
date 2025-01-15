import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../Hooks/usePrivetAxios";

import CardAllProperties from "../Components/CardAllProperties";


const AllProperties = () => {
    const axiosPrivate=usePrivetAxios()
    const {data:allProperties=[],refetch}=useQuery({
        queryKey:['allproperties'],
        queryFn:async () => {
          const data=  await axiosPrivate.get('/allProperties')
            return data.data
        }
    })
    console.log(allProperties)
    return (
        <div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-3 grid-cols-1">
                {
                       allProperties.map(property=><CardAllProperties key={property?._id} property={property}></CardAllProperties>)
                }
            </div>
            
        </div>
    );
};

export default AllProperties;