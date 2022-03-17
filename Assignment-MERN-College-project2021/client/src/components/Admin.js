import React, { useState } from "react";

const Admin = () => {
    const [festname,setFestName]= useState("hey");
   
       console.log(festname);

    

    const Pdetails = async(e) =>
    {
        e.preventDefault();
        

    }

    return(
    <>
    <h1>{festname}</h1>
    
    <div className="admin-class">
    <form method="POST">
        <input className="fest-name" type="text" name="festname" placeholder="hahahah , noonoonoo, y not" onChange={(event)=>{setFestName(event.target.value)}} />
        <button className="sub-btn" type="submit" onClick={Pdetails}> Get details </button>
        </form>
  <table className="student-details">
        <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Department</td>
        <td>College Name</td>
        <td>Date of Registration</td>
        </tr>
        <br/>
        <tr>
        <td>name</td>
        <td>email</td>
        <td>department</td>
        <td>college</td>
        <td>date of registration</td>
        </tr>
        
    </table>
    </div>


    </>)
};
export default Admin;