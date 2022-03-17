import react from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Paystripe from './Paystripe'
import { NavLink } from 'react-router-dom'

const pub= "pk_test_51K0IvtSCvg0OG3laPQrhhXGdkaeWze4xxF9Nvgq7HZ9ErFh7H5G1sRyyWrhrOsNliluyvN006r537AK7W6G1AfQp001MpAcRVK"



const stripetest = loadStripe(pub)


const StripeContainer = () =>{

    
    return(

        <>
        <Elements stripe = {stripetest}>
    <NavLink to ="Paystripe"> PAY</NavLink>
   
</Elements>
       
        </>
    )
};

export default StripeContainer;