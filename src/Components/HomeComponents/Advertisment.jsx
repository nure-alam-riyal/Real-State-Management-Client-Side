import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../Hooks/usePublicAxios";
import LoadingSpin from "../Shared/LoadingSpin";
import CardAllProperties from "../CardAllProperties";


const Advertisment = () => {
    const axiosPublic=usePublicAxios()
    const {data:allProperties=[],isLoading}=useQuery({
        queryKey:['advertise'],
        queryFn:async () => {
          const data=  await axiosPublic.get('/advertise')
            return data.data
        }
    }) 
    if(isLoading) return <LoadingSpin></LoadingSpin>
    //console.log(allProperties)
    return (
        <div>
             <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-3 grid-cols-1">
                {

                   allProperties.reverse().slice(0,4).map(property=><CardAllProperties key={property?._id} property={property}></CardAllProperties>)

                }
            </div>
        </div>
    );
};

export default Advertisment;