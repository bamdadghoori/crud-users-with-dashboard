// import { connect } from "react-redux";
import { useSelector,useDispatch } from "react-redux";
import { GetUserRequest,GetUserFail,GetUserSuccess } from "../redux/users/usersAction";
import { useEffect } from "react";
import axios from "axios";

const Users = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const getUsers=()=>{
        return async function(dispatch){
            try{
            //    console.log(dispatch(GetUserRequest())) 
            dispatch(GetUserRequest())
             const response= await axios.get("https://reqres.in/api/users?page=2")
             
             console.log(response.data)
             dispatch(GetUserSuccess(response.data.data))
            }
            catch(er){
                dispatch(GetUserFail(er))
               console.log(er)
            }
        }
    }
  useEffect(()=>{
    dispatch(getUsers())
  }
    
  ,[])
   
    return ( 
        <>
        {console.log(state)}
         <h1>users</h1>
         <div className="container">
         <div className="row">
            {
                state.loading===true ? (
                    <h1>is loading</h1>
                ):
                (
                    state.users.map((element,index)=>{
                        return(
                        <div key={index} className="col-md-3">
                            <div className="user">
                                <div className="row">
                                <div className="col-md-6">
                                {/* <img src={element.avatar}/> */}
                           
                                </div>
                                <div className="col-md-6">
                                <div className="firstLast">
                            <div className="firstName">
                            {element.first_name} 
                            </div>
                            <div className="lastName">
                            {element.last_name} 
                            </div>
                            
                            </div>
                            <div>
                                <button className="btn btn-primary btn-update">
                                    update
                                </button>
                                <button className="btn btn-danger">
                                    delete
                                </button>
                            </div>
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