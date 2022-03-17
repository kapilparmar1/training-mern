import react from 'react';
import { NavLink } from 'react-router-dom';
import '../components/Errorpage.css';

function Errorpage() {

    return(
        <>
        <div className="container-page">
            <div className="head-page"><h1>404</h1>
        </div>
        <NavLink  className = "text" to="">back to to home</NavLink>
        </div>
        </>
    )

    
};
export default Errorpage;