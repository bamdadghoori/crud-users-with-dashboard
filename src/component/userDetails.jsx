import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddUser } from "../redux/users/usersAction";
import { useNavigate } from "react-router-dom";
const UserDetails = () => {
    let navigate=useNavigate()
     const dispatch = useDispatch()
      const[user,setUser]=useState({
          firstName:"",
          lastName:"",
          avatar:""
      })

    const handleChange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user)
    dispatch(AddUser(user))
    navigate("/")
    }
  const handleImageChange=(e)=>{
   
     if(e.target.files){
         setUser({...user,avatar:URL.createObjectURL(e.target.files[0])})
        
     }
    }
    return ( <>
            
            <div class="wrapper fadeInDown">
  <div id="formContent">
  <div className="fadeIn first">
                 Create User
                <Link  className="fa fa-window-close close-link" to="/" ></Link>
              </div>

   

   
    <form on onSubmit={handleSubmit}>
        <div style={{"position":"relative"}}>
        <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" class="fadeIn second" name="firstName" value={user.firstName} onChange={handleChange}/>
        </div>
        <div style={{"position":"relative"}}>
      
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" class="fadeIn third" name="lastName" value={user.lastName} onChange={handleChange}/>
      </div>
      <div style={{"position":"relative"}}>
      
      <label htmlFor="avatar" >avatar image:</label>
      <input type="file" className="fadeIn third" onChange={handleImageChange} id="avatar"/>
      </div>
      <div>
      <img src={user.avatar}  className="img-preview" alt="no image selected"/>
      </div>
      <input type="submit" className="fadeIn fourth" value="add user"/>
      
    </form>

   
  

  </div>
</div>
        </>  );
}
 
export default UserDetails;