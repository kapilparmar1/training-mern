import react, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Contact.css';

const Contact =() =>{

  const history = useHistory();

  const [user, setUser]= useState({ name :"" , email : "" , phone : "", message : ""});



  /*let name ,name="name" value={user.name} onChange={(e) => {handleInputs(e.target.name , e.target.value)}};
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
const PostData = async() =>
{

try{
 
  const res=  await fetch("/getdata",
   {
     method : "GET" , headers : { "Content-Type" : "application/json"},

  });

  const data = await res.json();
  setUser({...user , name :data.name , email : data.email , phone : data.phone , message : data.message});


  if(!res.status === 201 || !data)
  {
    window.alert("Login Required");
  }
  
}catch(err)
{
  console.log(err);
}
}

useEffect(()=>
{
  PostData();
},[]);


const contactForm = async(e) =>{
  e.preventDefault();


const {name , email , phone ,message} = user;

const res=  await fetch("/contact",
   {
     method : "POST" , headers : { "Content-Type" : "application/json"},

  body : JSON.stringify({name , email , phone , message})

  });

  const data = await res.json();
  if(!data)
  {
    window.alert("Login Required");

  }else if(!user.message)
  {
    
  }else
  {

  window.alert("Your valuable feedback has been recorded");
  setUser({...user, message: ""});
  }

}



  return(<div className="home-container">
    <div className="grid">
    <div className="div-grid1 i ">
    <i class="zmdi zmdi-phone material-icons-name" ></i>
      <p>Phone no : </p>
      &nbsp;
&nbsp;
      <p>0123456789</p>
  </div>
  <div className="div-grid2 i ">
  <i class="zmdi zmdi-email material-icons-name" ></i>
  
    <p>Email : </p>
    &nbsp;
&nbsp;
      <p>Admin@kjc.com</p>
  </div>
  <div className="div-grid3 i ">
  <i class="zmdi zmdi-home material-icons-name"></i>
    <p>Address : </p>
    &nbsp;
&nbsp;
      <p>K Narayanpura,Kothanur </p>
  </div>
  </div>
    <div className="form">
      <h2>CONTACT US</h2>
      <form method="POST">
        <label className="labell">Name</label>
        &nbsp;
        &nbsp;
<input className="input" type="text" readOnly="yes" name="name" value={user.name} onChange={(e) => {handleInputs(e.target.name , e.target.value)}}/>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<label className="labell" >Email</label>
&nbsp;
&nbsp;
<input className="input1" type="text" readOnly="yes" name="email" value={user.email} onChange={(e) => {handleInputs(e.target.name , e.target.value)}}/>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<label  className="labell">Phone</label>
&nbsp;
&nbsp;
<input className="input" type="text" readOnly="yes" name="phone" value={user.phone} onChange={(e) => {handleInputs(e.target.name , e.target.value)}}/>
&nbsp;
&nbsp;
&nbsp;
&nbsp;

      
      <textarea  className= " text" name="message" value={user.message} onChange={(e) => {handleInputs(e.target.name , e.target.value)}} id="text" cols="30" rows="10" placeholder="Your Feedback"></textarea>

      </form>
      <button className= " button1"  onClick={contactForm} type="submit" > Submit </button>
    
 
    </div>
   
  </div>
  )
};

export default Contact;