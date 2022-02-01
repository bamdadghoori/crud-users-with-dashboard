import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { useState } from "react";
const UserCreator = () => {
    
  let navigate = useNavigate();
  const handleClick=()=>{
    // see addUser route in app.js
  navigate("/addUser")
  }
    return ( <>
   
      <div className="divCreator">
          <button className="btn btn-primary" onClick={handleClick}>Add User</button>
      </div>
      
    </> );
}
 
export default UserCreator;