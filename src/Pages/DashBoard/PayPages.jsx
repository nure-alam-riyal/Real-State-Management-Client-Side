import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckForm from "../../Components/CheckForm";
import usePrivetAxios from "../../Hooks/usePrivetAxios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../../Components/Shared/LoadingSpin";


const PayPages = () => {
  const {id}=useParams()
  // const [offerProperty,setOfferProperty]=useState({})
 const axiosPrivate=usePrivetAxios()
//  useEffect(()=>{
//  axiosPrivate.get(`/offer1/${id}`).then(res=>{
//   setOfferProperty(res.data)
//  })
//  },[axiosPrivate, id])
const {data:offerProperty={},isLoading}=useQuery({
  queryKey:["offer",id],
  queryFn:async () => {
 const data=   await  axiosPrivate.get(`/offer1/${id}`)
         
  return data.data
  }
})
if(isLoading) <LoadingSpin></LoadingSpin>

    const stripePromise = loadStripe(`${import.meta.env.VITE_PaymentPublicKey}`);
    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
          /*...*/
        },
      };
    return (
       <Elements stripe={stripePromise} options={options}> 
         <CheckForm offerProperty={offerProperty}></CheckForm>
       </Elements>
    );
};

export default PayPages;