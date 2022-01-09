import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { AddUser, UpdateUser } from "../redux/users/usersAction";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const {id}=useParams();


    let navigate=useNavigate()
     const dispatch = useDispatch()
      const[user,setUser]=useState({
          firstName:"",
          lastName:"",
          avatar:""
      })
      const users = useSelector(state => state.users)
      console.log(users)
      useEffect(()=>{
        
         if(id){
         
                const currentUser=users.filter((element)=>element.id==id)
                
                    //  if(element.id==id){
                    //    return element
                    //  }
               console.log(currentUser)
              setUser({
                firstName:currentUser[0].first_name,
                lastName:currentUser[0].last_name,
                avatar:currentUser[0].avatar
              })
                
         }
        
      },[])

    const handleChange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
      
    e.preventDefault();
    if(id){
    dispatch(UpdateUser({...user,id:id}))
    navigate("/")
    }
    else{
      console.log(user)
      dispatch(AddUser(user))
      navigate("/")
    }
    
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
                {id ? (<h2>Update User</h2>):(<h2>Create User</h2>) }  
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
      <input type="submit" className="fadeIn fourth" value="submit"/>
      
    </form>

   
  

  </div>
</div>
        </>  );
}
 
export default UserDetails;