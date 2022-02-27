import {useState} from "react";
import * as yup from 'yup';
const Test = () => {
       const[email,setEmail]=useState({
           mail:""
        })
       
       const[error,setError]=useState([])
       
      

          let schema=yup.object().nullable().shape({
              mail:yup.string().required("پر کردن فیلد الزامی است").email("فرمت ایمیل صحیح نیست")
          })

      
    
      const handleChange=(e)=>{
                 setEmail({...email,[e.target.name]:e.target.value})
      }
      const validate=async()=>{
          try{
             const validateResult = await schema.validate(email,{ abortEarly:false })
            
             setError([])
          }
          catch(er){
            
              setError([...er.errors])
          }
      
    
      
      }
      const handleSubmit=async(e)=>{
          e.preventDefault();
        
          validate();
      }

    return ( 
    <>
   {error && error.map((element,index)=>{
    return <div key={index}>{element}</div>
    })}
    
    
    <form onSubmit={handleSubmit}>
        

        
       
    <input onChange={handleChange} name="mail" id="mail" className="form-control" value={email.mail} />
    <input type="submit" value="submit" />
    </form>
    </>
    );
}
 
export default Test;