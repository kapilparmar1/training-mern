import React,{useState , useEffect} from "react";
import {useHistory} from 'react-router-dom'
 // import '../components/Events.css';
 import idea1 from './images/idea1.jpg'
 import './Rise.css'


const Rise = () =>{

  
    
  const history = useHistory();
  const [ename3, setEname2] = useState('Rise Up');
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
         setUser({...userData, ename3 :Data.ename3 , ename2 : Data.ename2});
    
    
         if(Data.ename3 || Data.ename2 )
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

        window.open("http://localhost:3000/payment3","","width=480,height=500");
       //  setTimeout (window.close, 50);
     }

  //  const keep = async(e) =>{
   
  
  
  // e.preventDefault();
  
   
  //   const res=  await fetch("/rise",
  //    {method : "POST" , headers : { "Content-Type" : "application/json"},
  
  //   body : JSON.stringify({ ename3})
  
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
            <img src={idea1} className="LOF" alt="Los Angeles" styles="width:200%;"/>
          </div>
    
          <div className="item">
            <img src={idea1}  alt="Chicago" styles="width:100%;"/>
          </div>
        
          <div className="item">
            <img src={idea1}  alt="New york" styles="width:100%;"/>
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

      <h1>Rise Up</h1>
          <p>Project Exhibition is an event where the students are invited to display their unique and innovative ideas. The event has two categories- Ideas and Projects. A participant can bring a startup idea and the best idea would win. On the other hand, if the participant brings a working project, the best projects would be displayed in the exhibition on the final day and would be awarded accordingly. It is an event that focuses on raising unique ideas from youngsters which could bring change and impact everyone positively. 

          </p>

          <div className="event-rules">
           
            <h3>Rules</h3>
            <p>1. A minimum of 3 players per team is required. <br/>
             2. All ideas should be unique and original <br/>
             3. The judge’s decision is final <br/>
             4. Any kind of malpractices will lead to disqualification of the whole team. <br/>
             5. Participants should arrive at the venue on time without fail if they failed to attend the event the overall team point get affected. <br/>
             </p>
 
         </div>
 
 
         {userData.ename2 ? <button className="btn btn-primary"  onClick={OPEN}  disabled={b} type="button" >{ b ? 'Ineligible' : 'Register'}</button>  : <button className="btn btn-primary"  onClick={OPEN}  disabled={b} type="button" >{ b ? 'Already Registered' : 'Register'}</button> }
        </div>

        

      </div>

   
</body>
    </>


    )
};
export default Rise;