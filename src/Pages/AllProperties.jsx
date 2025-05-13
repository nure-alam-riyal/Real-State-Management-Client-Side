import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../Hooks/usePrivetAxios";

import CardAllProperties from "../Components/CardAllProperties";
import LoadingSpin from "../Components/Shared/LoadingSpin";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const AllProperties = () => {
    const [count,setCount]=useState(1)
const {user}=useAuth()
const navigate=useNavigate()
if(!user){
navigate('/login')
}
    // const [max,setMax] =useState('')
    const [min,setMin] =useState('')
    // const [range,setRange] =useState('')
    const [allProperty, setAllProperty] = useState([])
    const [search, setSearch] = useState('')
    const axiosPrivate = usePrivetAxios()
    const { data: allProperties = [], isLoading } = useQuery({
        queryKey: ['allproperties',min],
        queryFn: async () => {
            const data = await axiosPrivate.get(`/allProperties?max=${min}&min=${min}&range=${min}&skip=${(count*8)-8}&limit=${count*8}`)
            return setAllProperty(data.data)
        }
    })
    //console.log(min)
    useEffect(() => {
        axiosPrivate.get(`/allProperties?search=${search}`).then(res => setAllProperty(res.data))
    }, [axiosPrivate, search])
    if (isLoading) return <LoadingSpin></LoadingSpin>
    //console.log(allProperties)
    return (
        <div>
             <Helmet>
        <title>All Properties | Dream Nest Real Estate</title>
         </Helmet>
            <div className="flex my-8 items-center">
                <div> <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 flex items-center text-2xl">Sort By <RiArrowDropDownLine className="text-3xl" /> </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li className="btn bg-red-200" onClick={()=>setMin('max')}>Max Price(descending)</li>
                        <li className="btn bg-blue-300" onClick={()=>setMin('min')}>Min Price(ascending)</li>
                        <li className="btn bg-yellow-300" onClick={()=>setMin('range')}>Price Range(mix)</li>
                    </ul>
                </div></div>
                <div className=" w-2/3 mx-auto"><input capture className="border px-3 w-full py-4 rounded-xl " type="text" defaultValue={search} onChange={(e) => setSearch(e.target.value)} name="" placeholder="search by location" id="" /></div>
            </div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-3 grid-cols-1">
                {
                    allProperty.map(property => <CardAllProperties key={property?._id} property={property}></CardAllProperties>)
                }
            </div>
            <div className="w-full flex justify-center items-center my-5">
                <div className="join w-full flex gap-0">
  <button  disabled={count===1} onClick={()=>setCount(count-1)} className="join-item btn">Previous Page({count-1})</button>
  <button disabled={allProperties?.length<(count-1)*8} onClick={()=>setCount(count)} className="join-item btn">Page {count}</button>
  <button disabled={allProperties?.length<(count+1)*8} onClick={()=>setCount(count+1)} className="join-item btn">Next Page({count+1})</button>
</div>
            </div>

        </div>
    );
};

export default AllProperties;