import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import useAuth from '../../Hooks/useAuth';
import usePrivetAxios from '../../Hooks/usePrivetAxios';
import { useQuery } from '@tanstack/react-query';
import LoadingSpin from '../../Components/Shared/LoadingSpin';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

 


const AdminOverAll = () => {
  const {user}=useAuth()
    const axiosPrivate=usePrivetAxios()
    const {data:AllData,isLoading,refetch}=useQuery({
        queryKey:['customerOverWall',user],
        queryFn:async () => {
            const data=await axiosPrivate(`/AdminOverWall`)
            return data.data
        }
    })
    if(isLoading) return <LoadingSpin></LoadingSpin>
    const data = {
        labels: ['Admin', 'Agent','Fraud', 'Customer' ],
        datasets: [
          {
            label: '# of Votes',
            data: AllData?.user,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div>
            <div>
                
                <div className='flex justify-center items-center'>
                 <div className='flex-1 p-10  '><PolarArea  data={data}></PolarArea>
                 
                 </div>
                <div className='flex-1 font-semibold flex flex-col justify-center '>
                  <p className='text-red-300'>Admin :{AllData?.user[0]}</p>
                  <p className='text-blue-300'>Agent :{AllData?.user[1]}</p>
                  <p className='text-yellow-200'>Fraud :{AllData?.user[2]}</p>
                  <p className='text-green-500'>Customer :{AllData?.user[3]}</p>
                </div>

                </div>
                <h2 className='text-center font-extrabold text-5xl
                 '>All Users</h2>
            </div>
        </div>
    );
};

export default AdminOverAll;