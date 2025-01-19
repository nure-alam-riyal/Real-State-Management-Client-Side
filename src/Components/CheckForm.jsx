import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { cloneElement, useEffect, useState } from "react";
import usePrivetAxios from "../Hooks/usePrivetAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "./Shared/LoadingSpin";
import useAuth from '../Hooks/useAuth'
import toast from "react-hot-toast";
import { Await } from "react-router-dom";


const CheckForm = ({offerProperty}) => {
  const {user}=useAuth()
const [error,setError]=useState('')
const {offerRange,propertyName,location,offerDate,_id,propertyId,agentEmail}=offerProperty || {}
// const [client,setClientSecret]=useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosPrivate=usePrivetAxios()
  
// useEffect(()=>{
//        axiosPrivate.post('/create-Intent-server',{price:offerRange}).then((res)=>{
//         setClientSecret(res.data.clientSecret)})

// },[axiosPrivate, offerRange])
// console.log(offerProperty)
// if(offerRange<=0){
  const {data:client={},isLoading}=useQuery({
    queryKey:["create-Intent-server1",offerRange],
    queryFn:async () => {
      if(offerRange>=0){
        const data=   await axiosPrivate.post('/create-Intent-server1',{price:offerRange})
           
    return data.data
      }
    }
  })
// }
if(isLoading) <LoadingSpin></LoadingSpin>

  // console.log(offerRange,client.clientSecret,user)
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        // console.log('Payment error', error);
        setError(error.message)
      } else {
        // console.log('Payment Method', paymentMethod);
        setError('')
      }
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(client?.clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })
    if(confirmError) return


    else{
      console.log(paymentIntent)
      const paymentInfo={
        buyerName:user?.displayName,
        buyerEmail:user?.email,
        totalPrice:offerRange,
          propertyName:propertyName,
          location:location,
          offerDate:offerDate,
          buyingDate:new Date(),
          propertyId:propertyId,
          offerId:_id,
          agentEmail:agentEmail,
        }
    if(paymentIntent?.status==='succeeded'){
      
      axiosPrivate.post('/payment-order',paymentInfo)
      .then((res)=>{
        console.log(paymentIntent,res)
 if(res.data.insertedId){
  toast.success('payment Successful')
 }
      }
        
      )
    }
      
    }

    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className="bg-blue-500 btn  px-8 my-5" disabled={!stripe || !client}>
          Pay
        </button>
        <p>{error}</p>
      </form>
    );
};

export default CheckForm;