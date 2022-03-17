import React,{useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
 // import '../components/Events.css';
 import image11 from './images/11.jpeg'
 import image22 from './images/22.jpeg'
 import image33 from './images/33.jpeg'
 import it from './images/it.png'


const Alphabay = () =>{

  
  const history = useHistory();
  const [ename2, setEname2] = useState('IT Manager');
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
         setUser({...userData, ename :Data.ename, ename2 :Data.ename2, ename3 :Data.ename3, ename4 :Data.ename4, ename5 :Data.ename5, ename6 :Data.ename6, ename7 :Data.ename7, ename8 :Data.ename8 });
    
    
         if(Data.ename  || Data.ename2 || Data.ename3 || Data.ename4 || Data.ename5 || Data.ename6 || Data.ename7 || Data.ename8)
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

        window.open("http://localhost:3000/payment2","","width=480,height=500");
       //  setTimeout (window.close, 50);
     }

  //  const keep = async(e) =>{
   
  
  
  // e.preventDefault();
  
   
  //   const res=  await fetch("/alphabay",
  //    {method : "POST" , headers : { "Content-Type" : "application/json"},
  
  //   body : JSON.stringify({ ename2})
  
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
            <img src={it} alt="Los Angeles" styles="width:100%;"/>
          </div>
    
          <div className="item">
            <img src={it}  alt="Chicago" styles="width:100%;"/>
          </div>
        
          <div className="item">
            <img src={it}  alt="New york" styles="width:100%;"/>
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

      <h1>Alphabay</h1>
          <p>IT manager is an event where the participants are judged on the basis of their overall technical and managing skills.


          </p>

          <div className="event-rules">
           
            <h3>Rules</h3>
            <p>1. Minimum of 3 participants should participate from each team.<br/>
               2. Participants who got selected in Round 1 cannot participate in other events. <br/>
               3. Parcitipants will also be judged on aspects like punctuality, grooming, attitude and behavior.<br/>
            </p>
 
         </div>
         {(userData.ename || userData.ename3 || userData.ename4 || userData.ename5 || userData.ename6 || userData.ename7 || userData.ename8) ? <button className="btn btn-primary"  onClick={OPEN}  disabled={b} type="button" >{ b ? 'Ineligible' : 'Register'}</button>  : <button className="btn btn-primary"  onClick={OPEN}  disabled={b} type="button" >{ b ? 'Already Registered' : 'Register'}</button> }
        </div>

        

      </div>

   
</body>
    </>


    )
};
export default Alphabay;