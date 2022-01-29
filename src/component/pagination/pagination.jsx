import PaginationButtons from "./paginationButtons";
import { useState } from "react";
const Pagination = (props) => {
 const [currentPage,SetCurrentPage]=useState(props.CurrentPage);
 const pagesNumber=parseInt(props.PagesNumber);
    
 const pagesNum=[];

     console.log(props.PagesNumber)
     for (let i=1;i<=pagesNumber;i++){
           console.log(props.PagesNumber)
         console.log(i)
             pagesNum.push(i)
     };
     return (<div>
        <ul className="pagination"> 
        {console.log(pagesNum)}
        <li className="page-link" onClick={()=>{
           if(props.CurrentPage>1){
             props.ChangePage(props.CurrentPage-1)}
             else{
                 props.ChangePage(pagesNumber)}
             
         }}><i className="fa fa-arrow-left" 
           
 
        /></li> 
       
         {
           
           
         pagesNum.map((element,index)=>{
       
           
          
            
             
        
          
          return(
         
          // <li className="page-link " onClick={()=>props.ChangePage(element)}>
              
          //     {element}
          //     </li>
              <PaginationButtons Element={element} CurrentPage={props.CurrentPage} ChangePage={props.ChangePage}/>
              
              ) 
       })
       
        
     }
      
     <li className="next-button page-link " onClick={()=>{
         if(props.CurrentPage<pagesNumber){
           props.ChangePage(props.CurrentPage+1)}
           else{
               props.ChangePage(1)}
           
       }
         }><i className="fa fa-arrow-right" 
 />
      </li> 
      </ul>
     </div>  );
}
 
export default Pagination;