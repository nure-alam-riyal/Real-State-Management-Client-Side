

import {  useQuery } from '@tanstack/react-query';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import usePrivetAxios from '../../Hooks/usePrivetAxios';
import useAuth from '../../Hooks/useAuth';
import LoadingSpin from '../../Components/Shared/LoadingSpin';

ChartJS.register(ArcElement, Tooltip, Legend);


const ClientOverAll = () => {
    const{user}=useAuth()
    const axiosPrivate=usePrivetAxios()
    const {data:AllData,isLoading}=useQuery({
        queryKey:['customerOverWall',user],
        queryFn:async () => {
            const data=await axiosPrivate(`/customerOverWall/${user?.email}`)
            return data.data
        }
    })
    if(isLoading) return <LoadingSpin></LoadingSpin>
    // console.log(AllData,user)
    const data = {
        labels: ['Review', 'WishList Property', 'Offer Property', 'Buy Property'],
        datasets: [
          {
            label: 'NO',
            data: [...AllData],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-center'>
            <div className='flex-1  p-10'><Doughnut data={data} /></div>
            <div className='flex-1 font-semibold flex items-center flex-col justify-center '>
                  <p className='text-red-300'>Review :{AllData[0]}</p>
                  <p className='text-blue-300'>Wishlish Property :{AllData[1]}</p>
                  <p className='text-yellow-200'>Offer Property :{AllData[2]}</p>
                  <p className='text-green-500'>Buy Property :{AllData[3]}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientOverAll;