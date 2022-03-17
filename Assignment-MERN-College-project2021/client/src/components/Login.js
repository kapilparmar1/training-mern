import react , {useContext, useEffect, useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../components/Login.css';
import { UserContext } from '../App';


const Login =() =>{

  const {state , dispatch} = useContext(UserContext);
  const history = useHistory();
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const Login = async(e) =>
{
    e.preventDefault();

 
  const res=  await fetch("/signin",
   {method : "POST" , headers : { "Content-Type" : "application/json"},

  body : JSON.stringify({email ,  password })

  });

  const data = await res.json();

  if(res.status === 400 || !data)
  {
    window.alert("Invalid  Credentials");
    setEmail("");
    setPassword("");
    
  }
  else
  {  dispatch({type : 'USER' , payload : true});
    window.alert(" Login successfull");
    history.push("/");
  }
}



  return(<>
<form  method="POST">
        <div className="main">
            <div className="form-box">
              <h1>LOG IN</h1>
                <div className="button-box">
                <div id="login" className="input-group">
                <div className="rowe" >  
         <div className="i">  
            <i class="zmdi zmdi-email material-icons-name" ></i>
            </div>
                    <input type="text" className="input-field" name= "email" id="email" placeholder="Email"  value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className="rowe" >  
         <div className="ii">  
            <i class="zmdi zmdi-lock material-icons-name" ></i>
            </div>
                    <input type="password" className="input-field" name= "password" id="password" placeholder="Password"  value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                    <div className="buttonlogin ">
                    <button type="submit" className="submit-btn12 " onClick={Login}>Log in</button>
                    <NavLink to="/signup" className="link-bttn">Register?</NavLink>
                    </div>
                </div>
                
            </div>
            <div className="links"> 
<div className="links1" onClick={()=>{window.open("https://www.facebook.com/sharer/sharer.php?u=Kapilsingh1stprogramaswebdesigner.com/whatsay","facebook-share-dialog","width=800,height=600");

}}>
<p >f</p>
</div>
<div className="links2" onClick={()=>{window.open("https://www.instagram.com/?url=Kapilsingh1stprogramaswebdesigner.com/whatsay","insta-share-dialog","width=800,height=600");

}}>
<p><i class="zmdi zmdi-instagram"></i></p>
</div> 
<div className="links3">
<p><i class="zmdi zmdi-twitter" onClick={()=>{window.open("https://twitter.com/intent/tweet?text=Kapilsingh1stprogramaswebdesigner.com/whatsay","twitter-share-dialog","width=800,height=600");

}}></i></p>
</div>


<div className="links4" onClick={()=>{window.open("https://www.linkedin.com/share?id=Kapilsingh1stprogramaswebdesigner.com/whatsay","linkedin-share-dialog","width=800,height=600");

}}>
<p><i class="zmdi zmdi-linkedin"></i></p>
</div>



</div>
     
        </div>
        </div>
    </form>
  
      </>
  )
};

export default Login;