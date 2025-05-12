
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import LoadingSpin from '../../Components/Shared/LoadingSpin';
import usePrivetAxios from '../../Hooks/usePrivetAxios';

ChartJS.register(ArcElement, Tooltip, Legend);

 

const AgentOverAll = () => {
    const {user}=useAuth()
    const axiosPrivate=usePrivetAxios()
    const {data:AllData,isLoading,}=useQuery({
        queryKey:['customerOverWall',user],
        queryFn:async () => {
            const data=await axiosPrivate(`/AgentOverWall/${user?.email}`)
            return data.data
        }
    })
  
    const newData=AllData?.slice(0,AllData.length-1)
    console.log(newData)
    if(isLoading) return <LoadingSpin></LoadingSpin>
    const data = {
        labels: ['Added Property', 'Requested Property', 'Sold Property'],
        datasets: [
          {
            label: '# No',
            data: [...newData],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
             
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div className='flex flex-col justify-center items-center'>
                  <div className='flex '>
                  <div className='w-9/12 p-10 flex-1 '><Pie data={data} /></div>
                  <div className='flex-1 font-semibold flex flex-col justify-center '>
                  <p className='text-red-600'>Added Property :{AllData[0]}</p>
                  <p className='text-blue-300'>Requested Property :{AllData[1]}</p>
                  <p className='text-yellow-300'>Sold Property :{AllData[2]}</p>
                 
                </div>

                  </div>
                  <p className='text-green-500 text-4xl'>Tatal Revenue :<span className='text-red-800'>{AllData[3]}</span> taka</p>
               </div>
    );
};

export default AgentOverAll;