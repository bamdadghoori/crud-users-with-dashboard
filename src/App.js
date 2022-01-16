import { Route,Routes,BrowserRouter } from 'react-router-dom';
import "@fontsource/roboto"
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

  // add id to new user that we created in adduser page
  const NewIdAdder=()=>{
  
   setNewId(newId+1)
   return newId
  }
  return (<>
  
  
  <Provider store={store}>
 {/* routing */}
  <Routes>
    <Route path="/addUser" element={<UserDetails NewId={newId} NewIdAdder={NewIdAdder}/>}/>
    <Route path="/editUser/:id" element={<UserDetails/>}/>
    <Route path="/deleteUser/:id" element={<Delete/>}/>
   

  </Routes>
  <div className="container">
    <div className="crud-title">Crud Users</div>
  <div className="row">
  <div className="source-code">To see the source code:<a href="https://github.com/bamdadghoori/crud-users-react-redux">https://github.com/bamdadghoori/crud-users-react-redux</a></div>
  
    <UserCreator/>
    </div>
    </div>
     <Users/>
  </Provider>
  
  </>
    
  );
}

export default App;
