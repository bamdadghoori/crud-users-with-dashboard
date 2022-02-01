// import { connect } from "react-redux";
import { useSelector,useDispatch } from "react-redux";
import { GetUserRequest,GetUserFail,GetUserSuccess } from "../redux/users/usersAction";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";






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
   
    const handleUpdate=(e,id)=>{
       e.preventDefault()
       navigate(`/editUser/${id}`)
    }
    const handleDelete=(e,id)=>{
        navigate(`/deleteUser/${id}`)
    }

    
  
   
    return ( 
        <>
        
       
         <h5 className="users">Users:</h5>
         
         <div className="container">
         {!isFound &&(<div className="alert alert-danger search-error">  <i class="fa fa-exclamation-triangle"></i>There are no users match with the textbox</div>)}
         {showBackButton && (<button className="btn btn-primary back-button" onClick={props.ResetSearch}>Back to home page</button>)}
         <div className="row">
         
            {
                state.loading===true ? (
                    <h1>is loading</h1>
                ):
                (
                    users.map((element,index)=>{
                        return(
                        <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                            <div className="user">
                                <div className="row">
                                <div className="col-md-6 col-4">
                                <img src={element.avatar}/>
                           
                                </div>
                                <div className="col-md-6 col-4">
                                <div className="firstLast">
                            <div className="firstName">
                            {element.first_name} 
                            </div>
                            <div className="lastName">
                            {element.last_name} 
                          
                            </div>
                            
                            </div>
                            
                                </div>
                                <div className="user-buttons col-md-12 col-4">
                                <button className="btn btn-primary btn-update" onClick={(e)=>{handleUpdate(e,element.id)}}>
                                    Update
                                </button>
                                <button className="btn btn-danger btn-delete" onClick={(e)=>{handleDelete(e,element.id)}}>
                                    Delete
                                </button>
                            </div>
                              
                           
                            </div>
                           </div>
                           
                            </div>
                )
                        }
              )  
                ) 
                }
            

         </div>
         </div>
        </>
   
    );
}
 
export default Users;