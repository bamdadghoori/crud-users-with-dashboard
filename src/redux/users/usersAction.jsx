import { GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL,ADD_USER} from "./usersTypes"

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
export const AddUser=(user)=>{
    
   return{
       type:ADD_USER,
       payload:{
           firstName:user.firstName,
           lastName:user.lastName,
           avatar:user.avatar
       }
   }
}