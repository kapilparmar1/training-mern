import React,{useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
 // import '../components/Events.css';
 import wd1 from './images/wd1.jpeg'


const Cipherspace = () =>{

  
  const history = useHistory();
  const [ename5, setEname5] = useState('Cipherspace');
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
         setUser({...userData, ename5 :Data.ename5 , ename2 : Data.ename2});
    
    
         if(Data.ename5 || Data.ename2)
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

        window.open("http://localhost:3000/payment5","","width=480,height=500");
       //  setTimeout (window.close, 50);
     }
  //  const keep = async(e) =>{
   
  
  
  // e.preventDefault();
  
   
  //   const res=  await fetch("/cipherspace",
  //    {method : "POST" , headers : { "Content-Type" : "application/json"},
  
  //   body : JSON.stringify({ ename5})
  
  //   });
  
  //   const data = await res.json();
  
  //   if(res.status === 423 || !data)
  //   {
  //     window.alert("Login Required");
      
  //   }
  //   else
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
            <img src={wd1} alt="Los Angeles" styles="width:100%;"/>
          </div>
    
          <div className="item">
            <img src={wd1}  alt="Chicago" styles="width:100%;"/>
          </div>
        
          <div className="item">
            <img src={wd1}  alt="New york" styles="width:100%;"/>
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

<h1>Cyperspace</h1>
<p>An event of designing where teams of two members will be tested based on their designing skills, creative thinking and as a team player for completing each task. Tasks are designed to choose the best designer out of everyone. Participants should have basic knowledge about HTML, CSS, JavaScript. The rounds are decided as such the players will be tested on designing skills, creativity.
</p>

<div className="event-rules">
 
  <h3>Rules</h3>
  <p>1. Total number of rounds = 3
      <br/>
   2. Round 1 = Aptitude
   <br/>
   3. Round 2 = logo and doodle
   <br/>
   4. Round 3 = web designing
   <br/>
   5. Each round is the elimination round.
   <br/>
   6. Judge's decision will be the final decision.
   <br/>
   7. Each team should have 2 member.
   <br/>
   8. Minimum two teams should participate from each team. 
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
export default Cipherspace;