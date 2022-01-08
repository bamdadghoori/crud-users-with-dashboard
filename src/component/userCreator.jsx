import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
const UserCreator = () => {
  let navigate = useNavigate();
  const handleClick=()=>{
  navigate("/userDetails")
  }
    return ( <>
    <div className="container">
      <div className="divCreator">
          <button className="btn btn-primary" onClick={handleClick}>add user</button>
      </div>
      </div>
    </> );
}
 
export default UserCreator;