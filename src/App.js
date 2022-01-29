import { Route,Routes,BrowserRouter } from 'react-router-dom';
import "@fontsource/roboto"
import './App.css';
import Users from './component/pagination/users';
import { store } from "./redux/store";
import { Provider} from "react-redux";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
import UserDetails from './component/userDetails';
import UserCreator from './component/userCreator';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import Delete from './component/Delete';
import PaginatedUsers from './component/paginatedUsers';
import { GetUserRequest,GetUserFail,GetUserSuccess } from "./redux/users/usersAction";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
// import PaginatedItems from './component/paginatedItems';

import Pagination from './component/pagination/pagination';
import Items from './component/pagination/Items';
function App() {
  const[newId,setNewId]=useState(13)
  const users = useSelector(state => state.users)
  const [currentPage,setCurrentPage]=useState(1)
  console.log(users)

  let navigate=useNavigate();
    // connecting to store
   
    console.log(users)
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

    const handleUpdate=(e,id)=>{
       e.preventDefault()
       navigate(`/editUser/${id}`)
    }
    const handleDelete=(e,id)=>{
        navigate(`/deleteUser/${id}`)
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
  return (<>
  {
} 
  <Provider store={store}>
 {/* routing */}
  <Routes>
    <Route path="/addUser" element={<UserDetails NewId={newId} NewIdAdder={NewIdAdder}/>}/>
    <Route path="/editUser/:id" element={<UserDetails/>}/>
    <Route path="/deleteUser/:id" element={<Delete/>}/>
    <Route path="users" element={<Users/>}/>
    {/* <Route path="/*" element={<App/>}/>
    */}

  </Routes>
  <div className="container">
    <div className="crud-title">Crud Users</div>
  <div className="row">
  <div className="source-code">To see the source code:<a href="https://github.com/bamdadghoori/crud-users-react-redux">https://github.com/bamdadghoori/crud-users-react-redux</a></div>
  
    <UserCreator/>
    </div>
    </div>
    {/* <Items currentItems={currentItems} /> */}
    {/* <PaginatedUsers/> */}
     <Users Items={users} />
     
    {/* { state.loading===true ? (
                    <h1>is loading</h1>):(
                      <PaginatedItems HandleDelete={handleDelete} HandleUpdate={handleUpdate}/>
                    )
                    } */}
     
  </Provider>
  
  </>
    
  );
}

export default App;
