import { useState } from "react";
import * as yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
   let navigate=useNavigate();
    const[user,setUser]=useState({
        email:"",
        password:"",
        
    })
    const[errors,setErrors]=useState([])
    let schema=yup.object().shape({
        email:yup.string().required("ایمیل الزامی است").email("فرمت ایمیل صحیح نیست"),
        // password:yup.string().required("رمز عبور الزامی است").matches(/^(?=.*\d)[a-zA-Z\d]{8,20}$/,"پسورد باید حداقل 8 حرف شامل حداقل یک عدد باشد")
        password:yup.string().required("رمز عبور الزامی است")
    })

    const validate=async()=>{
        
        try{
            const resultValidate=await schema.validate(user,{abortEarly:false})
            setErrors([])
             return true
        }
        catch(er){
          console.log(er.errors)
          setErrors(er.errors)
          return false
        }

    }
    const handleSubmit=async(e)=>{
         e.preventDefault()
          const validateResult=await validate()
        if (validateResult==true){
            
            try{
               
                const response= await axios.post("https://reqres.in/api/login",user)
                const token=response.data.token
                localStorage.setItem("token",token)
                navigate("/dashboard")
            }
            catch(er){
                // console.log(er)
                setErrors(["ایمیل یا رمز عبور اشتباه است"])
            }
           
        }
        
         
    }
    const handleChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }
    return ( <>
<div id="login">
   

        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={handleSubmit}>
                        {errors && errors.map((element,index)=>{
    return <div key={index} className="alert alert-danger">{element}</div>
    })}
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label for="email" className="text-info">email:</label><br/>
                                <input type="text" name="email" id="username" className="form-control" onChange={handleChange} value={user.email}/>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Password:</label><br/>
                                <input type="text" name="password" id="password" className="form-control" onChange={handleChange} value={user.password}/>
                            </div>
                            <div className="form-group">
                                <label for="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>           
       
          
         


    </>   );
}
 
export default Login;