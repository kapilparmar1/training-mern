import React,{useState } from "react";
import {useHistory} from 'react-router-dom'
import '../components/Events.css';
 import image11 from './images/11.jpeg'
 import image22 from './images/22.jpeg'
 import image33 from './images/33.jpeg'
 import myst from './images/Mystery Box.png'
 import run from './images/runtime terror.png'
 import rise from './images/riseup.jpg'
 import alpha from './images/alphabay.jpg'
 import honey from './images/honeypot.png'
 import cipher from './images/ciperspace.png'
 import ano from './images/anonymous.png'
 import war from './images/wartex.jpg'
 import home from './images/Capture.PNG'


const Events = () =>{
  const history = useHistory();
  

    return(
    <>

<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="style.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
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
              <img src={home} alt="Los Angeles" styles="width:100%;"/>
            </div>
      
            <div className="item">
              <img src={image22} alt="Chicago" styles="width:100%;"/>
            </div>
          
            <div className="item">
              <img src={image33} alt="New york" styles="width:100%;"/>
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


      <div className="events-list">

        <div className="cell">
            <img src={myst}  alt=""/>
            
            <button className="event-btn" onClick={()=>{history.push('/mystery')}} type="submit">Mystery Box</button>
        </div>
        <div className="cell">
          <img src={rise}alt=""/>
          
          <button className="event-btn" onClick={()=>{history.push('/rise')}} type="submit">Rise Up</button>
      </div>
      <div className="cell">
        <img src={alpha} alt=""/>
        
        <button className="event-btn" onClick={()=>{history.push('/alphabay')}} type="submit">Alphabay</button>
    </div>
    <div className="cell">
      <img src={run} alt=""/>
      
      <button className="event-btn" onClick={()=>{history.push('/run')}} type="submit">Runtime Terror</button>
  </div>
  <div className="cell">
    <img src={honey}alt=""/>
    
    <button className="event-btn" onClick={()=>{history.push('/honeypot')}} type="submit">Honey Pot</button>
</div>
<div className="cell">
  <img src={cipher}alt=""/>
  
  <button className="event-btn" onClick={()=>{history.push('/cipherspace')}} type="submit">Ciperspace</button>
</div>
<div className="cell">
  <img src={ano}alt=""/>
  
  <button className="event-btn" onClick={()=>{history.push('/ano')}} type="submit">Anonymous</button>
</div>
<div className="cell">
  <img src={war} alt=""/>
  
  <button className="event-btn" onClick={()=>{history.push('/wartex')}} type="submit">Wartex</button>
</div>

      </div>

    </div>
</body>

    </>


    )
};
export default Events;