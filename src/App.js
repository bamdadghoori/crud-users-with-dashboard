import { Route,Routes,BrowserRouter } from 'react-router-dom';
import "@fontsource/roboto"
// import './App.css';
import './App.scss'
//  uncomment this users page below to see the main mode with pagination!!
import Users from './component/pagination/users';

//  uncomment this users page below to see the simple mode without pagination!!
// import Users from './component/users';
import 'jquery/dist/jquery.min.js'
import "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.2/umd/popper.min.js"
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'
import { store } from "./redux/store";
import { Provider} from "react-redux";
import UserDetails from './component/userDetails';

import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import Delete from './component/Delete';

import { GetUserRequest,GetUserFail,GetUserSuccess } from "./redux/users/usersAction";
import { useEffect } from "react";
import axios from "axios";

import { useNavigate } from 'react-router-dom';
import Home from './component/home';
import NotFound from './component/notFound';
import Login from './component/login';
import Navbar from './component/navbar';
import Dashboard from "./component/dashboard"
import {useDispatch,useSelector} from "react-redux"
import Charts from "./component/charts"
import Reports from './component/report';
function App() {
  const[newId,setNewId]=useState(13)
  const users = useSelector(state => state.users)
  const[searchText,setSearchText]=useState()
 
  const [user,SetUser]=useState({
    id:"",
    first_name:"",
    last_name:"",
    avatar:""
  })
  
    let navigate=useNavigate();
     const token= localStorage.getItem("token")
     console.log(token)
     if(token){
       //get user from server but we can't because the api is fake!
     }
    // connecting to store
   
    
    const dispatch = useDispatch();
    const getUsers=()=>{
        // async action using redux-thunk
        return async function(dispatch){
            try{
            
            dispatch(GetUserRequest())
             const response= await axios.get("https://reqres.in/api/users?page=2")
             
            
             dispatch(GetUserSuccess(response.data.data))
            }
            catch(er){
                dispatch(GetUserFail(er))
               
            }
        }
    }

   
  useEffect(()=>{
    
   
    dispatch(getUsers())
    
  
  }
    
  ,[])
  // add id to new user that we created in adduser page
  const NewIdAdder=()=>{
  
   setNewId(newId+1)
   return newId
  }

  const handleSearch=(searchText)=>{
    if(searchText){
      setSearchText(searchText)
    }
  }

  const resetSearch=()=>{
    setSearchText(null)
  }
  return (<>
  {
    
} 
  <Provider store={store}>
  <Navbar/>
 {/* routing */}
  <Routes>
  <Route path="/" element={<Home Items={users} SearchText={searchText} ResetSearch={resetSearch}HandleSearch={handleSearch}  />}>
    <Route path="/addUser" element={<UserDetails NewId={newId} NewIdAdder={NewIdAdder}/>}/>
    <Route path="/editUser/:id" element={<UserDetails/>}/>
    <Route path="/deleteUser/:id" element={<Delete/>}/>
    </Route>
    <Route path="/login" element={<Login/>}/>
    {token && (<Route path="/dashboard" element={<Dashboard/>}>
    <Route path="/dashboard/charts" element={<Charts/>}/>
    <Route path="/dashboard/reports" element={<Reports/>}/>
      </Route> )}
    
   
   
    {/* <Route path="users" element={<Users/>}/> */}
    
   
   {/* route for not found */}
   <Route path='*' element={<NotFound/>}/>
   
  </Routes>
  
     
     
  </Provider>
  
  </>
    
  );
}

export default App;
