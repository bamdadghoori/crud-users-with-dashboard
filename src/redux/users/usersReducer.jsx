import {GetUserRequest,GetUserSuccess,GetUserFail,AddUser} from "./usersAction"
import { ADD_USER, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from "./usersTypes"
 const initialState={
     users:[],
     error:"",
     loading:true
 }
export const usersReducer=(state=initialState,action)=>{
  switch(action.type){
      case GET_USER_REQUEST:
       return {users:[],error:"",loading:true}
      case GET_USER_SUCCESS:
          console.log(action.payload)
        return {users:action.payload,
            error:"",loading:false}
      case GET_USER_FAIL:
        return {users:[],error:action.payload,loading:false}
        case ADD_USER:
          console.log(action.payload.firstName)
          return {...state,users:[...state.users,{
            first_name:action.payload.firstName,last_name:action.payload.lastName
            ,avatar:action.payload.avatar
          }]}
      default:
          return state
  }
}


