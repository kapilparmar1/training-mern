import react , {useState} from 'react'

import {useElements , CardElement , useStripe } from '@stripe/react-stripe-js'

import axios from 'axios'

const CARD_OPTIONS = "HE"

const Paystripe = () =>{
const [success , setSuccess] = useState(false);
const stripe = useStripe();
const elements = useElements();



const handleSubmit = async(e) => {
          e.preventDefault();
    const {error , paymentMethod} = await stripe.createPaymentMethod({
        type : "card",
        card : elements.getElement(CardElement)
    });



if(!error)
{

    try{
        const {id} = paymentMethod;


        const response=  await axios.post("http://localhost:5000/payment",
   {amount :1000,
    id

  })

  if(response.data.success)
  {
      setSuccess(true);
      console.log("success payment")
      
  }
    }catch(error){
        console.log("Error payment")
    }
}
else{

    // Console.log(error.message);
}
}
    return(

        <>
        {!success ?
        <form onSubmit = {handleSubmit} >
            <fieldSet className="FormGroup" >  
            <div className="FormRow">
                <CardElement options= {CARD_OPTIONS} />
            </div>
            </fieldSet>
            <button>Pay</button>
        </form>
         : 
         <div>
             <h2>
                 You just bought a l;k;
             </h2>
         </div>
          }
        
        </>
    )
};

export default Paystripe;