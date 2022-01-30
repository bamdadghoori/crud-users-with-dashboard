
import { useSelector } from "react-redux";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Items from "./Items";
import Pagination from "./pagination";







const Users = (props) => {
    const users=props.Items
    let navigate=useNavigate();
    console.log(props.Items)
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
        
       
         <h5 className="users">Users:</h5>
         
         <div className="container">
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