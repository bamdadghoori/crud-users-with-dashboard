

const PaginationButtons = (props) => {
    
   const changePage=()=>{
    
    props.ChangePage(props.Element)
    
   }
  
   
    return ( <>
    {/* check if pagination button is active or not */}
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