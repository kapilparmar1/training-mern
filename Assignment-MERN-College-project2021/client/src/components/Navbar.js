import react, {useContext , useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from './images/kjc-logoo.png';
import { UserContext } from '../App';
import './Navbar.css'
// import './Navbar.css';

const Navbar =() =>{
  const {state , dispatch} = useContext(UserContext);
  const [name , setName] = useState();
// <img src={logo} alt="LOGO" />

const RenderMenu = ()=> {

  
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
       setName(data.name)        /*if(!res.status === 200)
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
    });
    

  if(!state){

  return(
    <>
    <li className="nav-item ">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      
      <li className="nav-item">
       <NavLink className="nav-link " to="Signup">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="Login">Login</NavLink>
      </li>
      
      </>
  )
  } else 
  {
  
    return(
      <>
      <li className="nav-item active">
          <NavLink className="nav-link" to="/">{name}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Contact">Contact</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="Events">Events</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="About">Personal Info</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="bpayment" >More</NavLink>
        
        </li>
      
        <li className="nav-item">
          <NavLink className="nav-link" to="logout" >Logout</NavLink>
        
        </li>
        
        </>
    )
  }
}
  return(<>

<nav className="navbar navbar-expand-lg navbar-dark bg-secondary" >
<img src={logo} alt="KJC LOGO" className="LOFO"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav w-100 d-flex justify-content-end ">
      < RenderMenu />
    </ul>
    
  </div>
</nav>

  </>

  )
};

export default Navbar;