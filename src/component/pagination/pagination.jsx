import PaginationButtons from "./paginationButtons";

const Pagination = (props) => {

 const pagesNumber=parseInt(props.PagesNumber);
    
 const pagesNum=[];

    // pagesNum is array to show numbers in pagination buttons section
     for (let i=1;i<=pagesNumber;i++){
           
       
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