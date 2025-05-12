
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
    const {data:AllData,isLoading}=useQuery({
        queryKey:['customerOverWall',user],
        queryFn:async () => {
            const data=await axiosPrivate(`/AdminOverWall`)
            return data.data
        }
    })
    const {data:PropertyData,isLoading:r}=useQuery({
        queryKey:[],
        queryFn:async () => {
            const data=await axiosPrivate(`/adminOverAll`)
            return data.data
        }
    })
    console.log(PropertyData)
    const {PropertyNum,paymentNum, wishListNum,reviewNum,sum}=PropertyData || {}
    if(isLoading||r) return <LoadingSpin></LoadingSpin>
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
                <div className='flex-1 font-semibold flex gap-2 flex-col justify-center '>
                   <div className='flex justify-center text-xl text-red-300 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''>Admin  </p>
                       <p className=' text-xl'>{AllData?.user[0]}</p>
                    </div>
                   <div className='flex justify-center text-blue-300 text-xl rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''>Agent   </p>
                       <p className=' text-xl'>{AllData?.user[1]}</p>
                    </div>
                   <div className='flex justify-center text-xl text-yellow-200 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''>Fraud   </p>
                       <p className=' text-xl'>{AllData?.user[2]}</p>
                    </div>
                   <div className='flex justify-center text-xl text-green-500 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''>Customer  </p>
                       <p className=' text-xl'>{AllData?.user[3]}</p>
                    </div>
                 
                </div>

                </div>
                <div className='flex-col flex gap-4'>
                  <div className='flex justify-between gap-5'>
                    <div className='flex justify-center text-xl text-green-300 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                      <p className=''>Remaining Property  </p>
                       <p className=' text-xl'>{PropertyNum-paymentNum}</p>
                    </div>
                    <div className='flex justify-center text-xl text-green-500 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''>Sold Property </p>
                       <p className=' text-xl'>{paymentNum}</p>
                    </div>
                    <div className='flex justify-center text-xl text-red-500 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''>Percentage of sold  </p>
                       <p className=' text-xl'>{(paymentNum/PropertyNum)*100}%</p>
                    </div>
                  </div>
                  <div className='flex justify-evenly gap-5'>
                    <div className='flex justify-center text-xl text-yellow-500 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''> Total WishList </p>
                       <p className=' text-xl'>{wishListNum}</p>
                    </div>
                    <div className='flex justify-center text-xl text-blue-500 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''> Total  Reviews  </p>
                       <p className=' text-xl'>{reviewNum}</p>
                  </div>
                </div>
                 <div className='flex justify-center text-xl text-blue-500 rounded-lg items-center flex-col py-4 px-12 border w-full'>
                       <p className=''> Total  Revenue:{sum} TAKA </p>
                      
                  </div>
            </div>
        </div>
        </div>

    );
};

export default AdminOverAll;