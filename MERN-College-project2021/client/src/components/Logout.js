import react , {useContext ,useEffect}  from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = ()=>{
  const {state , dispatch} = useContext(UserContext);

    const history = useHistory();
    const calllogoutPage = async () =>{


        try{
        
          const res = await fetch('/logout', {
             method:"GET",
             headers: {
               Accept : "application/json" ,
                "Content-Type" : "application/json"
              },
              
              credentials:"include"
            });
             const data = await res.json();
             history.push('/Login',{ replace : true});
             dispatch({type : 'USER' , payload : false});
          
        
        }catch(err){
          console.log(err);
         
          
          
           
        }
          }
        
          useEffect(() =>
          {
            calllogoutPage();
          });

    return(
        <>
        </>

    )
};

export default Logout;
