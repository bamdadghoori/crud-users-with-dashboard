import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddUser } from "../redux/users/usersAction";
const UserDetails = () => {
     const dispatch = useDispatch()
      const[user,setUser]=useState({
          firstName:"",
          lastName:"",
      })

    const handleChange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user)
    dispatch(AddUser(user))
    }
    return ( <>
            
            <div class="wrapper fadeInDown">
  <div id="formContent">
  <div className="fadeIn first">
                 Create User
                <Link  className="fa fa-window-close close-link" to="/" ></Link>
              </div>

   

   
    <form on onSubmit={handleSubmit}>
      <input type="text" id="firstName" class="fadeIn second" name="firstName" value={user.firstName} onChange={handleChange}/>
      <input type="text" id="lastName" class="fadeIn third" name="lastName" value={user.lastName} onChange={handleChange}/>
      <input type="submit" class="fadeIn fourth" value="add user"/>
    </form>

   
  

  </div>
</div>
        </>  );
}
 
export default UserDetails;