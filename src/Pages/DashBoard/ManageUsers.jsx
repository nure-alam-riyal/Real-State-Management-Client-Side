import { useQuery } from "@tanstack/react-query";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import LoadingSpin from "../../Components/Shared/LoadingSpin";

import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";


const ManageUsers = () => {
  const {DeleteUser}=useAuth()
    const axiosPrivate=usePrivetAxios()
    const {data:allUser,isLoading ,refetch}=useQuery({
        queryKey:['alluser',axiosPrivate],
        queryFn:async () => {
            const data=await axiosPrivate.get('/alluser')
            return data.data
        }
    })
    console.log(allUser)
    if(isLoading) return <LoadingSpin></LoadingSpin>
    const handleDeleteUser=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You want remove it",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "DELETE"
      }).then((result) => {
        if (result.isConfirmed) {
          // DeleteUser().
          // then(() => {
            axiosPrivate.delete(`/user/${id}`).then((res)=>{
              
              if(res.data?.deletedCount){
                Swal.fire({
                  title: "Deleted!",
                  text: "Property has been Delete.",
                  icon: "success"
                });
                refetch()
              }
        }
     
        )
        .catch(error=>toast.error(error.message));
            
          // }).catch((error) => {
          //   // An error ocurred
          //   console.log(error)
          // });
           
            

        
        }
      });
    }
    const handleUserRole=async(id,role)=>{
      Swal.fire({
        title: "Are you sure?",
        text: `This User will be ${role}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `${role}`
      }).then((result) => {
        if (result.isConfirmed) {

            axiosPrivate.patch(`/userUpdate/${id}`,{role:role}).then((res)=>{
               console.log(res)
                  if(res.data?.modifiedCount){
                    refetch()
                    Swal.fire({
                      title: `${role}`,
                      text: `This user is ${role} now !`,
                      icon: "success"
                    });
                   
                  }
            }
         
            )
            .catch(error=>toast.error(error.message));
            

        
        }
      });

    }
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
            <div className="space-x-3 flex gap-3">
                <button onClick={()=>handleUserRole(user?._id,'Admin')}  className={`btn ${user?.role==="Fraud"?'hidden':''} `}>Make Admin</button>
                
                {
                  user?.role==="Agent"? <button  onClick={()=>handleUserRole(user?._id,'Fraud')} className="btn ">Mark As Fraud</button>:<button  onClick={()=>handleUserRole(user?._id,'Agent')} className={`btn ${user?.role==="Fraud"?'hidden':''} `}>Make Agent</button>
                }
            </div>
        </td>
        <td>
        <button onClick={()=>handleDeleteUser(user?._id)}  className="btn bg-red-400">Delete</button>
        </td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;