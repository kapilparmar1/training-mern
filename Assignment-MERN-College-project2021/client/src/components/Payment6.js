import React ,{ useEffect,useState } from "react";
import { useHistory } from 'react-router-dom';
import './Payment.css'

const Payment6 = () => {
 
  const history = useHistory();
  const [ename6, setEname6] = useState('Honeypot');
  const [card , setCard] = useState();
  const [exp , setExp] = useState();
  const [cvv , setCvv] = useState();
 
   const keep = async(e) =>{
   
  
   
  //e.preventDefault();
   if( card==505050505050 && cvv==234)
    {
      const res=  await fetch("/honeypot",
     {method : "POST" , headers : { "Content-Type" : "application/json"},
  
    body : JSON.stringify({ ename6})
  
    });
  
    const data = await res.json();
  
    if(res.status === 423 || !data)
    {
      window.alert("Invalid  Credentials");
      
    }
    else
    {  
      window.alert(" Payment successfull");
      window.location.href="http://localhost:3000/suc6"

    }
  
      
    }
    else if(!card || !cvv || !exp)
    {
      window.alert('fill all the details')
    } else {
      window.alert("INVALID DETAILS");
    
   }
  }
  

return(<>
<div className="main">


<div className="form-box123">
<h2>PAYMENT</h2>
         <div className="PAYY">
           <input type="number"  className="a123" placeholder="Card Number"   value={card} onChange={(e) => {setCard(e.target.value)}} />
           <input type='month' className="a1234" placeholder="Expiry Date" value={exp} onChange={(e) => {setExp(e.target.value)}} />
           <input type="password" maxLength="3" className="a123" placeholder="CVV Number"value={cvv} onChange={(e) => {setCvv(e.target.value)}} />
           <input type="text" className="a123" placeholder=" Card Holder Name" required />

         </div>
       <button className="pay1" onClick={keep}>₹100.0</button>
</div>
</div>


</>
)
};
export default Payment6;