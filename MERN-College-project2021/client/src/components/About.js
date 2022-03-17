import react, { useEffect , useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './About.css';

const About =() =>{
  const [userData,setUser] = useState({});
  // const [userData1,setUser1] = useState({});

  const history = useHistory();
  const callAboutPage = async () =>{


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
     setUser({...userData, name :Data.name , email : Data.email , phone : Data.phone , work : Data.work , adhar : Data.adhar  , programme : Data.programme , department : Data.department , rollno : Data.rollno , college : Data.college , city : Data.city , state : Data.state ,  blood : Data.blood , ename : Data.ename , ename2 : Data.ename2, ename3 : Data.ename3, ename4 : Data.ename4, ename5 : Data.ename5, ename6 : Data.ename6, ename7 : Data.ename7 , ename8 : Data.ename8});


     /*if(!res.status === 200)
     {
      console.log('not found token');
       throw new Error('user not found');
      
     }*/

}catch(err){
  console.log(err);
   history.push('/login');
}
  

    }
  useEffect(() =>
  {
 callAboutPage();
  },[]);

  return(
  <>
  <div className="home-container12">
    <div className="grid122">
    { !userData.name ? "" : <div className="div-grid322 i ">
  
   
      <p> Name : {userData.name} </p>
  </div>}

  { !userData.email ? "" : <div className="div-grid322 i ">
 
   
      <p>Email : {userData.email} </p>
  </div>}

  { !userData.phone ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Phone : {userData.phone} </p>
  </div>}

  { !userData.work ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Proffesion : {userData.work} </p>
  </div>}

  { !userData.adhar ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Adhar Number : {userData.adhar} </p>
  </div>}

  { !userData.programme ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Programme : {userData.programme} </p>
  </div>}

  { !userData.department ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Department : {userData.department} </p>
  </div>}

  { !userData.rollno ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Roll Number : {userData.rollno} </p>
  </div>}

  { !userData.college ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>College Name : {userData.college} </p>
  </div>}

  { !userData.city ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>City Name : {userData.city} </p>
  </div>}

  { !userData.state ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>State Name : {userData.state} </p>
  </div>}

  { !userData.ename ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Event Name : {userData.ename} </p>
  </div>}
  { !userData.ename2 ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Event Name : {userData.ename2} </p>
  </div>}
  { !userData.ename3 ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Event Name : {userData.ename3} </p>
  </div>}
  { !userData.ename4 ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Event Name : {userData.ename4} </p>
  </div>}
  { !userData.ename5 ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Event Name : {userData.ename5} </p>
  </div>}
  { !userData.ename6 ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Event Name : {userData.ename6} </p>
  </div>}
  { !userData.ename7 ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Event Name : {userData.ename7} </p>
  </div>}

  { !userData.ename8 ? "" : <div className="div-grid322 i ">
  {/* <i class="zmdi zmdi-book-image material-icons-name"></i> */}
   
      <p>Event Name : {userData.ename8} </p>
  </div>}


  </div>
  
  <div className="arrow" onClick={()=>{history.push('/')} }>
    <div className="p">

    </div>
  </div>
  </div>
   

  </>
  )
};

export default About;