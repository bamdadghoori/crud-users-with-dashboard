import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { AddUser, UpdateUser } from "../redux/users/usersAction";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as yup from 'yup';
// this page can add user and update it both
const UserDetails = (props) => {
  // using yup component to validate
  let schema=yup.object().shape({
    firstName:yup.string().required("first name is required"),
    lastName:yup.string().required("last name is required")
  })
  
  // use id to see if we are in update mode
  const {id}=useParams();
    let navigate=useNavigate()
   
     const dispatch = useDispatch()
    //  a local state is used to add user to redux store or update it
      const[user,setUser]=useState({
        
          firstName:"",
          lastName:"",
          avatar:""
      })
      const[errors,setErrors]=useState([])
      const users = useSelector(state => state.users)
     
      useEffect(()=>{
        
         if(id){
                // update mode
                const currentUser=users.filter((element)=>element.id==id)
                
               
              
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
      
    const adder=()=>{
      // see NewIdAdder function in app.js
      props.NewIdAdder()
    }
    const validate=async()=>{
      // validating 
      try{
        const validateResult=await schema.validate(user,{abortEarly:false})
       setErrors([])
        return true
       }
       catch(er){
        
         setErrors([...er.errors])
        
         return false
       }
    }
    const handleSubmit=async(e)=>{
      
    e.preventDefault();
 const isValid= await validate();
  
   if(isValid){
    
     if(id){
      //  update mode
      dispatch(UpdateUser({...user,id:id}))
      navigate("/")
      }
      else{
        // adding mode
        dispatch(AddUser(user,props.NewId))
        adder();
        navigate("/")
      }
   }
 
    
    }
  const handleImageChange=(e)=>{
    //  to preview selected image
     if(e.target.files){
         setUser({...user,avatar:URL.createObjectURL(e.target.files[0])})
        
     }
    }
    return ( <>
            
            <div class="wrapper fadeInDown">
              
             
  <div id="formContent">
  <div className="fadeIn first">
                {id ? (<h2>Update User</h2>):(<h2>Create User</h2>) }
                {errors.length!=0  && (
                <>
                <div className="alert alert-danger">
                <i class="fa fa-exclamation-triangle"></i>
                  {errors.map((element)=>{
                      return <div >{element}</div>
                  })}
                
                </div>
                </>
              
              )}  
                <Link  className="fa fa-window-close close-link" to="/" ></Link>
              </div>

   

   
    <form on onSubmit={handleSubmit}>
        <div style={{"position":"relative"}}>
        <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" class="fadeIn second" name="firstName" value={user.firstName} onChange={handleChange}/>
      <div className="forcible">*</div>
        </div>
        <div style={{"position":"relative"}}>
      
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" class="fadeIn third" name="lastName" value={user.lastName} onChange={handleChange}/>
      <div className="forcible">*</div>
      </div>
      <div style={{"position":"relative"}}>
      
      <label htmlFor="avatar" >Avatar Image:</label>
      <input type="file" className="fadeIn third" onChange={handleImageChange} id="avatar"/>
      </div>
      <div>
      <img src={user.avatar}  className="img-preview" alt="no image selected"/>
      </div>
      <input type="submit" className="fadeIn fourth" value="Submit"/>
      
    </form>

   
  

  </div>
</div>
        </>  );
}
 
export default UserDetails;