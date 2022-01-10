import { type } from "@testing-library/user-event/dist/type"
import { GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL,ADD_USER,UPDATE_USER,DELETE_USER} from "./usersTypes"

export const GetUserRequest=()=>{
  return {type:GET_USER_REQUEST} 
}
export const GetUserSuccess=(data)=>{
   return{
       type:GET_USER_SUCCESS,
       payload:data
   }
}
export const GetUserFail=(error)=>{
    return{
        type:GET_USER_FAIL,
        payload:error,
    }  
}
export const AddUser=(user,id)=>{
    
   return{
       type:ADD_USER,
       payload:{
           id:id,
           firstName:user.firstName,
           lastName:user.lastName,
           avatar:user.avatar
       }
   }
}
export const UpdateUser=(user)=>{
    return{
        type:UPDATE_USER,
        payload:{
            id:user.id,
            firstName:user.firstName,
            lastName:user.lastName,
            avatar:user.avatar
        }
    }
 
}
export const DeleteUser=(id)=>{
    return{
        type:DELETE_USER,
        payload:id
    }
    
}