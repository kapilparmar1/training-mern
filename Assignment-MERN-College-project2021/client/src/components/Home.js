import react ,{useState , useEffect} from 'react';
import '../components/Home.css';
import home from './images/tech-fest-logo.jpg';
import Typewriter from 'typewriter-effect';
import c3 from './images/c3.jpg'
import idea1 from './images/idea1.jpg'
import g1 from './images/g1.jpg'
import th1 from './images/th1.jpg'
import vid1 from './images/vid1.jpg'
import a1 from './images/a1.jpg'
import wd1 from './images/wd1.jpeg'
import it from './images/it.png'
import man from './images/runing.png'

const Home =() =>{
  // const [userName , setUserName] = useState({});
  const[names , setName] =useState({});
  const [show , setShow] = useState(false);

  const CallHome = async () =>{


    try{
    
    const res = await fetch('/getdata', {
       method:"GET",
       headers: {
         Accept : "application/json" ,
          "Content-Type" : "application/json"
        },
        
        // credentials:"include" //
    
    
      });
       const data = await res.json();
       /*console.log(data); */
       setName({...names , name : data.name , ename : data.ename , ename8 : data.ename8 , ename2 : data.ename2 , ename3 : data.ename3 , ename4 : data.ename4 , ename5 : data.ename5 , ename6 : data.ename6 , ename7 : data.ename7 }); 
       setShow(true);
    
    
       /*if(!res.status === 200)
       {
        console.log('not found token');
         throw new Error('user not found');
        
       }*/
    
    }catch(err){
    console.log(err);
     
    }
    }
    
    useEffect(() =>
    {
        CallHome();
    },[]);
    
  return( <>
  <meta name ="viewport" content="width=device-width , initial-scale =1.0"/>
  {/* <div className="div1">

    <Typewriter className= "type"
    options={{ 

      strings: ['Show us what you got!! (*_^)'] ,
      autoStart: true,
      loop: true,
    }}
  />
  
  <div className="div2">
    <h3> welcome </h3>
    <h1>{userName}</h1>
      <h2>{show ? 'Happy to see you back' :'ONLINE FEST MANAGEMENT'}</h2>
  </div>

  </div> */}
  {/* <div className="div1"> */}
  {/* <img src={home} className="homoe" /> */}
  {/* <img className="I1" src={vid1}/>
  <img className="I2" src={wd1}/>
  <img className="I3" src={g1}/>
  <img className="I4" src={idea1}/>
  <h1 className="Homeh1">{ show ? name : 'Manoeuver'}</h1>
  <img className="I5" src={th1}/>
  <img className="I6" src={c3}/>
  <img className="I7" src={it}/>
  <img className="I8" src={a1}/>
   </div> */}

   {show ? 
  <div className="div1">
 
  { names.ename6 ? <img className="I111" src={vid1}/> : <img className="I11" src={vid1}/>}
  { names.ename5 ? <img className="I222" src={wd1}/> : <img className="I22" src={wd1}/>}
  { names.ename4 ? <img className="I333" src={g1}/> : <img className="I33" src={g1}/>}
  { names.ename3 ? <img className="I444" src={idea1}/> : <img className="I44" src={idea1}/>}
  {/* <h1 className="Homeh11">WELCOME</h1>  */}
  {/* {names.name}  */}
  { names.ename8 ? <img className="I555" src={th1}/> : <img className="I55" src={th1}/>}
  { names.ename ? <img className="I666" src={c3}/> : <img className="I66" src={c3}/>}
  { names.ename2 ? <img className="I777" src={it}/> : <img className="I77" src={it}/>}
  { names.ename7 ? <img className="I888" src={a1}/> : <img className="I88" src={a1}/>}
  <div className= "type"><Typewriter 
    options={{ 

      strings: ['Note : IT Manager participants will be ineligible to participate in any other events.','Note : Event details will be shared on the reciept after a successful payment. ','Note : Think before you participate as we do not provide any money back gaurantee. '] ,
      autoStart: true,
      loop: true,
      cursor: onoffline,
      delay: 20,
      pausefor : 3000,
      deleteSpeed : 50 
    }}
    
  /><img src={man} className="man" alt="man running"/></div>
   </div> : 
  <div className="div1">
  {/* <img src={home} className="homoe" /> */}
  <img className="I1" src={vid1}/>
  <img className="I2" src={wd1}/>
  <img className="I3" src={g1}/>
  <img className="I4" src={idea1}/>
  <h1 className="Homeh1">Manoeuver</h1>
  <img className="I5" src={th1}/>
  <img className="I6" src={c3}/>
  <img className="I7" src={it}/>
  <img className="I8" src={a1}/>
   </div> }
  </>
  )
};

export default Home;