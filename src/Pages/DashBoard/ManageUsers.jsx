import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";


const ManageUsers = () => {
    const axiosPrivate=usePrivetAxios()
    const {data:allUser,isLoading}=useQuery({
        queryKey:['alluser'],
        queryFn:async () => {
            const data=await axiosPrivate.get('/alluser')
            return data.data
        }
    })
    console.log(allUser)
    if(isLoading) return <LoadingSpin></LoadingSpin>
    return (
        <div>

            <div className="overflow-x-auto">
  <table className="table table-zebra text-center">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {allUser.map((user,index)=><tr key={user._id}>
        <th>{index+1}</th>
        <td>{user?.userName}</td>
        <td>{user?.email}</td>
        <td>{user?.role}</td>
        <td>
            <div className="space-x-3">
                <button className="btn ">Make Admin</button>
                <button className="btn ">Make Agent</button>
                <button className="btn ">I am agent</button>
            </div>
        </td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;