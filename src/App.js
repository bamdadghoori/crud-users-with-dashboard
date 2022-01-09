import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Users from './component/users';
import { store } from "./redux/store";
import { Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './component/userDetails';
import UserCreator from './component/userCreator';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (<>
  
  <h1>salam</h1>
  <Provider store={store}>
  <Routes>
    <Route path="/addUser" element={<UserDetails/>}/>
    <Route path="/editUser/:id" element={<UserDetails/>}/>
  </Routes>
    <UserCreator/>
     <Users/>
  </Provider>
  
  </>
    
  );
}

export default App;
