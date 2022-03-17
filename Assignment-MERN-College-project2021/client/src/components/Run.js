import React,{useState , useEffect} from "react";

 // import '../components/Events.css';
//  import image11 from './images/11.jpeg'
 import c3 from './images/c3.jpg'
 //import image33 from './images/33.jpeg'
 import './Run.css'
 import Bpayment from './Bpayment'
import { useHistory } from "react-router-dom";
import Payment from "./Payment";


const Run = () =>{
const history = useHistory();
const [ename, setEname] = useState('Runtime Terror');
const [userData,setUser] = useState({});
let vaa ="";

 const [b , setB] = useState(false);

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
       setUser({...userData, ename :Data.ename , ename2 : Data.ename2});
  
  
       if(Data.ename || Data.ename2 )
       {
        setB(true);
      
       }
  
  }catch(err){
    console.log(err);
     history.push('/login');
  }
    
  
      }
    useEffect(() =>
    {
   callAboutPage();
    });

    const OPEN =()=>{

       window.open("http://localhost:3000/payment","","width=480,height=500");
      //  setTimeout (window.close, 50);
    }

    
//  const keep = async(e) =>{
 


// e.preventDefault();

 
//   const res=  await fetch("/run",
//    {method : "POST" , headers : { "Content-Type" : "application/json"},

//   body : JSON.stringify({ ename})

//   });

//   const data = await res.json();

//   if(res.status === 423 || !data)
//   {
//     window.alert("Invalid  Credentials");
    
//   }
//   else
//   {  
//     window.alert(" Registration successfull");
    

   
// setB(true);
// history.push('/Bpayment');
//   }

//  }

//  const change = () =>{

//   setB(false);
//  }


    return(
    <>
<head>
<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="style.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <title>Document</title>
</head>
<body>
  <div className="body">
       
    <div className="container">  
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
    
        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner">
          <div className="item active">
            <img src={c3} className="IMG" alt="Los Angeles" styles="width:100%;"/>
          </div>
    
          <div className="item">
            <img src={c3} alt="Chicago" styles="width:100%;"/>
          </div>
        
          <div className="item">
            <img src={c3}  alt="New york" styles="width:100%;"/>
          </div>
        </div>
    
        {/* <!-- Left and right controls --> */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>

      <div className="event-body">

      <div className="event"></div>

<h1>Runtime Terror</h1>
<p>These exciting initiatives create incentives that excite young people in gaining technology skills to develop solutions to the world's most pressing problems. Youth are nurtured, recognized for their achievements, and encouraged to build critical life skills that will stay with them long after they participate in these events
</p>

<div className="event-rules">
 
  <h3>Rules</h3>
  <p>Aptitude:    <br/>
      &nbsp;&nbsp;&nbsp;&nbsp; 30 mins   <br/>
      &nbsp;&nbsp;&nbsp;&nbsp; 25 mcq    <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;incase of tie time will be taken into consideration(faster the better) <br/><br/><br/>
      
      Debugging and git operations :  <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;C, C++, JAVA and Python  <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;1 hr   <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;30 mins debugging   <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;30 mins git operations   <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;2 debugging 10 git operation   <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;incase of tie time will be taken into consideration(faster the better) <br/><br/><br/>
      
      Coding: <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;C, C++, JAVA and Python<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;1h <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;3 programs <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;using hacker earth website <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;in case of tie time will be taken into consideration(faster the better)<br/>
   </p>

</div>
 {/* {

    b ? <button className="btn btn-primary"  onClick={change}  type="button" >Unregister</button> : 
 
<button className="btn btn-primary"  onClick={keep}  disabled={b} type="button" >Register</button> } */}

{userData.ename2 ? <button className="btn btn-primary"  onClick={OPEN}  disabled={b} type="button" >{ b ? 'Ineligible' : 'Register'}</button>  : <button className="btn btn-primary"  onClick={OPEN}  disabled={b} type="button" >{ b ? 'Already Registered' : 'Register'}</button> }


        </div>

      </div>

   
</body>
    </>


    )
};
export default Run;