import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { useState } from "react";
const UserCreator = () => {
    //  var newId=13;
    //  const newIdAdder=()=>{
    //     newId=newId+1;
    //  }
  let navigate = useNavigate();
  const handleClick=()=>{
  navigate("/addUser")
  }
    return ( <>
    <div className="container">
      <div className="divCreator">
          <button className="btn btn-primary" onClick={handleClick}>Add User</button>
      </div>
      </div>
    </> );
}
 
export default UserCreator;