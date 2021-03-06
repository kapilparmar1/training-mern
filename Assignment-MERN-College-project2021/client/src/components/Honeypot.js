import React,{useState , useEffect} from "react";
import {useHistory} from  'react-router-dom'
 // import '../components/Events.css';
 import vid1 from './images/vid1.jpg'


const Honeypot = () =>{

  
    
  const history = useHistory();
  const [ename6, setEname6] = useState('Honey Pot');
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
         setUser({...userData, ename6 :Data.ename6  , ename2 : Data.ename2});
    
    
         if(Data.ename6 || Data.ename2)
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

        window.open("http://localhost:3000/payment6","","width=480,height=500");
       //  setTimeout (window.close, 50);
     }

  //  const keep = async(e) =>{
   
  
  
  // e.preventDefault();
  
   
  //   const res=  await fetch("/honeypot",
  //    {method : "POST" , headers : { "Content-Type" : "application/json"},
  
  //   body : JSON.stringify({ ename6})
  
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
            <img src={vid1} alt="Los Angeles" styles="width:100%;"/>
          </div>
    
          <div className="item">
            <img src={vid1}  alt="Chicago" styles="width:100%;"/>
          </div>
        
          <div className="item">
            <img src={vid1}  alt="New york" styles="width:100%;"/>
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

<h1>Honey Pot</h1>
<p>Photography is an event that allows an individual to showcase his/her talent portraying the artistic creativity of seeing the world in a different perspective from a lens and how one can capture the aesthetic world through their eyes. 
  <br/>  Videography is an event which shows how a team can show their passion, creativity and hard work in a visual presentation which shall help the audience to effortlessly understand the message the video portrays.
  </p>

<div className="event-rules">
 
  <h3>Rules</h3>
  <h3>Photography</h3>
  <p>1. It is a solo event.<br/>
   2. The topic for photography competition shall be announced on the day of Manoeuvre itself.<br/>
   3. The participants have to submit pictures taken only on the day of event only . <br/>
   4. If any participant uses any pictures that's taken previously or any other source , they will be directly disqualified.<br/>
   5. The participants can use either a phone or a professional camera to take the pictures.<br/>
   6. The Participants have to submit the original photograph i.e. there must be no edits done to the photograph.<br/>
   7. The photographs have to be submitted before 3 PM on the day of Manoeuvre.<br/>
   </p>
   <br/>
   <h3>Videography</h3>
  <p>1. It is a solo event.<br/>
   2. There will be only one round for this competition.<br/>
   3. Three winners will be chosen based on the quality of the video and its relevance with respect to the topic. <br/>
   4. The judge???s decision will be final.<br/>
   5. The topic for the video will be displayed 2 days before the submissions have to be made.<br/>
   6. The participants are allowed to create animated, VFX, cinematic, or a live video with relevance to the topic given.<br/>
   7. The participants must upload the video on ???YouTube??? on the specified time.<br/>
   8. The video must have the "Manoeuvre-2021" on the right bottom corner of the video. <br/>
   9. The video should have a runtime between 1:30 minutes (90 seconds) to 2:00 Minutes (120 seconds). <br/>
   10. You must have full copyrights to the submitted video. <br/>
   11. A certain weightage of marks will be considered based on the number of views and likes the video receives on ???YouTube???.<br/>
   12. The participants are not allowed to use videos that have been previously made, if found out the participant will be directly disqualified.<br/>

   </p>

</div>
 
{userData.ename2 ? <button className="btn btn-primary"  onClick={OPEN}  disabled={b} type="button" >{ b ? 'Ineligible' : 'Register'}</button>  : <button className="btn btn-primary"  onClick={OPEN}  disabled={b} type="button" >{ b ? 'Already Registered' : 'Register'}</button> }
        </div>

        

      </div>

   
</body>
    </>


    )
};
export default Honeypot;