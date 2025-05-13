

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
            <div className='flex flex-col justify-center'>
            <div className='  p-10'><Doughnut data={data} /></div>
            <div className=' font-semibold  items-center flex flex-col  justify-between gap-2'>
                  
                  
                   <div className='flex justify-center text-xl text-red-300 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                        <p className=''>Review </p>
                       <p className=''> {AllData[0]}</p>
                    </div>
                   <div className='flex justify-center text-xl text-blue-300 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''>WishList Property </p>
                       <p className=''> {AllData[1]}</p>
                    </div>
                   <div className='flex justify-center text-xl text-yellow-200 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''>Offer Property </p>
                       <p className=''> {AllData[2]}</p>
                    </div>
                   <div className='flex justify-center text-xl text-green-500 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''>Buy Property </p>
                       <p className=''> {AllData[3]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientOverAll;