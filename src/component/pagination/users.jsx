
import { useSelector } from "react-redux";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Items from "./Items";
import Pagination from "./pagination";







const Users = (props) => {
    var users;
    var isFound=true;
    var showBackButton=false;
    var searchText=props.SearchText
    if(searchText){
         isFound=false
         var showBackButton=true;
            users=props.Items.filter((element)=>{
               if(element.first_name.toLowerCase().trim().includes(searchText.toLowerCase().trim())||element.last_name.toLowerCase().trim().includes(searchText.toLowerCase().trim())){
                   isFound=true;
                  return element;
               }
           })
           if(isFound==false){
            users=props.Items
           }
    }
    else{
         users=props.Items
    }
   
    let navigate=useNavigate();
    
    // connecting to store
    const state = useSelector(state => state)
 
    const [currentPage,setCurrentPage]=useState(1)
    const itemPerPage=4;
    const endOfCurrentPage=itemPerPage * currentPage ;
    const startOFCurrentPage=endOfCurrentPage-itemPerPage;
    const currentItems=users.slice(startOFCurrentPage,endOfCurrentPage)
    var pagesNumber=Math.ceil(users.length/itemPerPage)



    const handleUpdate=(e,id)=>{
       
       e.preventDefault()
       navigate(`/editUser/${id}`)
    }
    const handleDelete=(e,id)=>{
        navigate(`/deleteUser/${id}`)
    }
    const changePage=(page)=>{
   
        setCurrentPage(page);
       }
   
    return ( 
        <>
        
    
         
         <div className="container">
         {!isFound &&(<div className="alert alert-danger search-error">  <i class="fa fa-exclamation-triangle"></i>There are no users match with the textbox</div>)}
         {showBackButton && (<button className="btn btn-primary back-button" onClick={props.ResetSearch}>Back to home page</button>)}
         <h5 className="users">Users:</h5>
         <div className="row">
         
            {
                 
                state.loading===true ? (
                    <h1>is loading</h1>
                ):(
               
                    
                  <>
                 
                <Items CurrentItems={currentItems} HandleDelete={handleDelete} HandleUpdate={handleUpdate}/>
                <Pagination PagesNumber={pagesNumber} ChangePage={changePage} CurrentPage={currentPage}/>
                
                   </> 
                ) 
                          
                 
                }
            
            
         </div>
         </div>
        </>
   
    );
}
 
export default Users;