import React,{useEffect , useState} from "react";
import { NavLink , useHistory } from "react-router-dom";
import Validation from "./validation";
import "./Bpayment.css";

const Bpayment = (props) =>
{


   const [user, setUser]= useState({ adhar :"" , programme :"" , department :"" , rollno:"" , college :"" , city :""  , state :"" ,bllod :"" });
   
   const [userData, setUser1]= useState({});
   const [errors, setError]= useState({});


const history = useHistory();

const check = async() =>{

try{

  const res = await fetch('/getdata', {
     method:"GET",
     headers: {
       Accept : "application/json" ,
        "Content-Type" : "application/json"
      },
      
      // credentials:"include" // 


    });
     const Data = await res.json();
     console.log(Data);
     setUser1({...userData, name :Data.name , email : Data.email , phone : Data.phone , work : Data.work});


     /*if(!res.status === 200)
     {
      console.log('not found token');
       throw new Error('user not found');
      
     }*/

}catch(err){
  console.log(err);
   history.push('/login');
}

};
useEffect(()=>
{
  check();
},[]);
 
   /*let name ,value;
 const  handleInput = (e)=>{
   console.log(e);
   name = e.currentTarget.name;
 value = e.currentTarget.value;
   setUser({...user,[name] : value});
 } 
 */
 const handleInputs = (ab , bc) =>{
  
   console.log(ab , bc);
   
   setUser({...user,[ab] : bc});
 
 }
 const PostData = async(e) =>
 {
 e.preventDefault();
 setError(Validation(user));
 
 

 const { adhar ,  programme , department, rollno, college, city , state , blood  } = user;
  
   const res=  await fetch("/bpayment",
    {method : "POST" , headers : { "Content-Type" : "application/json"},
 
   body : JSON.stringify({adhar ,  programme , department, rollno, college, city , state , blood })
 
   });
 
   const data = await res.json();
 
 
   if(res.status === 423 || !data )
   {
    //  window.alert("Fill all the details");
    //  history.push('/login');
   }
   else if(res.status === 422)
   {
     
   }
   else if (res.status === 201)
   {
     window.alert(" saved successfull");
     setUser({...user,adhar:"", programme:"" , department:"" , rollno:"" , college:"" , city:"" , state:"" , blood : ""});
     history.push('/about');
  
   }
  //  else 
  //  {
  //    window.alert(" saved successfull");
  //    setUser({...user,adhar:""});
  
  //  }
 }
 

    return (
        <>
<form method="Post">
<div className="inputs">
<div className="rowe" >  
         <div className="i">  
            <i class="zmdi zmdi-account material-icons-name" ></i>
            </div>
  <input type ="text" className="input-field1" name= "adhar" id="adhar" placeholder="Adhar number" value={user.adhar} onChange={(e) => {handleInputs(e.target.name , e.target.value)}}  />
  {errors.adhar && <p className="erro">{errors.adhar} </p>}
  </div>

  <div className="rowe" >  
         <div className="i">  
            <i class="zmdi zmdi-account material-icons-name" ></i>
            </div>
  <input type ="text" className="input-field1" name= "programme" id="programme" placeholder="Programme Name" value={user.programme} onChange={(e) => {handleInputs(e.target.name , e.target.value)}} />
  {errors.programme && <p className="erro">{errors.programme}</p>}
  </div>
  <div className="rowe" >  
         <div className="i">  
            <i class="zmdi zmdi-account material-icons-name" ></i>
            </div>
  <input type ="text" className="input-field1" name= "department" id="department" placeholder="Department Name"  value={user.department} onChange={(e) => {handleInputs(e.target.name , e.target.value)}}  />
  {errors.department && <p className="erro">{errors.department}</p>}
  </div>
  <div className="rowe" >  
         <div className="i">  
            <i class="zmdi zmdi-account material-icons-name" ></i>
            </div>
  <input type ="text" className="input-field1" name= "rollno" id="rollno" placeholder="Roll Number"  value={user.rollno} onChange={(e) => {handleInputs(e.target.name , e.target.value)}}  />
  {errors.rollno && <p className="erro">{errors.rollno}</p>}
  </div>
  <div className="rowe" >  
         <div className="i">  
            <i class="zmdi zmdi-account material-icons-name" ></i>
            </div>
  <input type ="text" className="input-field1" name= "college" id="college" placeholder="College Name"  value={user.college} onChange={(e) => {handleInputs(e.target.name , e.target.value)}}  />
  {errors.college && <p className="erro">{errors.college}</p>}
  </div>
  <div className="rowe" >  
         <div className="i">  
            <i class="zmdi zmdi-account material-icons-name" ></i>
            </div>
  <input type ="text" className="input-field1" name= "city" id="city" placeholder="City Name" value={user.city} onChange={(e) => {handleInputs(e.target.name , e.target.value)}}   />
  {errors.city && <p className="erro">{errors.city}</p>}
  </div>
  <div className="rowe" >  
         <div className="i">  
            <i class="zmdi zmdi-account material-icons-name" ></i>
            </div>
  <input type ="text" className="input-field1" name= "state" id="state" placeholder="State Name"  value={user.state} onChange={(e) => {handleInputs(e.target.name , e.target.value)}}   />
  {errors.state && <p className="erro">{errors.state}</p>}
  </div>
  <div className="rowe" >  
         <div className="i">  
            <i class="zmdi zmdi-account material-icons-name" ></i>
            </div>
  <input type ="text" className="input-field1" name= "blood" id="blood" placeholder="Blood Group"  value={user.blood} onChange={(e) => {handleInputs(e.target.name , e.target.value)}}   />
  {errors.blood && <p className="erro">{errors.blood}</p>}
  </div>
  
  </div>
  <button type="submit" className="submit-btn1 " onClick={PostData}>Save</button> <br/>
  <div className="note">
    <h3>NOTE : Please ignore if filled already</h3>
  </div>
  {/* <div className="arrow1" onClick={()=>{history.push('/events')} }>
    </div>
    <div className="arrow2" onClick={()=>{history.push('/about')} }>
    </div> */}
</form>
        </>

    )
};

export default Bpayment;