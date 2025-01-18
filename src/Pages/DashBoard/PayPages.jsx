import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckForm from "../../Components/CheckForm";


const PayPages = () => {

    const stripePromise = loadStripe(`${import.meta.env.PaymentPublicKey}`);
    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'bdt',
        // Fully customizable with appearance API.
        appearance: {
          /*...*/
        },
      };
    return (
       <Elements stripe={stripePromise} options={options}> 
         <CheckForm></CheckForm>
       </Elements>
    );
};

export default PayPages;