import React,{useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
 import g1 from './images/g1.jpg'
import './Wartex.css'

const Wartex = () =>{

  
  const history = useHistory();
  const [ename4, setEname4] = useState('Wartex');
  const [userData,setUser] = useState({});
  
  
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
         setUser({...userData, ename4 :Data.ename4 , ename2 : Data.ename2});
    
    
         if(Data.ename4 || Data.ename2)
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

        window.open("http://localhost:3000/payment4","","width=480,height=500");
       //  setTimeout (window.close, 50);
     }


  //  const keep = async(e) =>{
   
  
  
  // e.preventDefault();
  
   
  //   const res=  await fetch("/wartex",
  //    {method : "POST" , headers : { "Content-Type" : "application/json"},
  
  //   body : JSON.stringify({ ename4})
  
  //   });
  
  //   const data = await res.json();
  
  //   if(res.status === 423 || !data)
  //   {
  //     window.alert("Login Required");
      
  //   }
  //   else if(res.status===201)
  //   {  
  //     window.alert(" Registration successfull");
      
  // setB(true);
  // history.push('/events');
  //   }
  
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
            <img src={g1} className="LO" alt="Los Angeles" styles="width:100%;"/>
          </div>
    
          <div className="item">
            <img src={g1}  alt="Chicago" styles="width:100%;"/>
          </div>
        
          <div className="item">
            <img src={g1}  alt="New york" styles="width:100%;"/>
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

<h1>Wartex</h1>
<p>We all know how eSports are popular these days among youngest so we came up to an idea of eSports as a event in our IT fest. This event consists of 3 rounds each college will have One team consists of 4 players 1 round will be qualifying round the game will be: BGMI Top 4 teams will be selected 2 round will be knockout consist of 2 games Tekken 7 and NFS from there first 2 team with higher points wins3 round will be final round the game will be Valorant
</p>

<div className="event-rules">
 
  <h3>Rules</h3>
  <p>1. Participants must bring mobile phones with BGMI installed, have mobile data, and earphones for participation in round 1.(No Emulator). 
      <br/>
   2. For 2nd round NFS & Tekken. Participants can bring mouse, keyboard, joystick and headphones. Only PC will be provided.
   <br/>
   3. For 3rd Round Valorant which consist of 4 players per team  
   <br/>
   4. Judge’s decision is final
   <br/>
   5. Any kind of malpractices (glitches, hack, cheat-codes) will lead to disqualification of whole team.
   <br/>
   6. Participants should arrive at venue on-time without fail, only if one member is not available, the existing participants can continue. Whole team will be disqualified if more than one participants is not available of the team.
   <br/>
   </p>

</div>

{userData.ename2 ? <button className="btn btn-primary"  onClick={OPEN}  disabled={b} type="button" >{ b ? 'Ineligible' : 'Register'}</button>  : <button className="btn btn-primary"  onClick={OPEN}  disabled={b} type="button" >{ b ? 'Already Registered' : 'Register'}</button> }
        </div>

        

      </div>

   
</body>
    </>


    )
};
export default Wartex;