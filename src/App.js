import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Users from './component/users';
import { store } from "./redux/store";
import { Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './component/userDetails';
import UserCreator from './component/userCreator';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import Delete from './component/Delete';
function App() {
  const[newId,setNewId]=useState(13)
  const NewIdAdder=()=>{
  
   setNewId(newId+1)
   return newId
  }
  return (<>
  
  
  <Provider store={store}>
 
  <Routes>
    <Route path="/addUser" element={<UserDetails NewId={newId} NewIdAdder={NewIdAdder}/>}/>
    <Route path="/editUser/:id" element={<UserDetails/>}/>
    <Route path="/deleteUser/:id" element={<Delete/>}/>

  </Routes>
    <UserCreator/>
     <Users/>
  </Provider>
  
  </>
    
  );
}

export default App;
