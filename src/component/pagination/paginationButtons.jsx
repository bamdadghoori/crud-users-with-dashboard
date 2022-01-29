import classNames from "classnames";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PaginationButtons = (props) => {
    const[isPressed,setIsPressed] = useState(false)
                       let navigate= useNavigate()            
    console.log(props.CurrentPage,props.Element)
    
     

   const changePage=()=>{
    // setIsPressed(false)
    props.ChangePage(props.Element)
    
   }
  
    // var btnClass = classNames({
    //     "page-link": true,
    //     "active":isPressed,
    //     // 'btn-pressed': this.state.isPressed,
    //     // 'btn-over': !this.state.isPressed && this.state.isHovered
    //   });
    return ( <>
     {props.Element==props.CurrentPage ? (<li className="page-link active" onClick={()=>changePage()}>
            
     {props.Element}
     </li>):(<li className="page-link" onClick={()=>changePage()}>
            
            {props.Element}
            </li>)
     
     }
     </>
       
     );
}
 
export default PaginationButtons;