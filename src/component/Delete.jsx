import { Link } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import { DeleteUser } from "../redux/users/usersAction";
const Delete = () => {
     const dispatch = useDispatch()
    const navigate=useNavigate()
    const {id}=useParams();
    const handleNoButton=()=>{
        navigate("/")
    }
    const handleYesButton=()=>{
        dispatch(DeleteUser(id))
        navigate("/")
    }
    return ( <>
       
       <div class="wrapper">
  <div id="formContent">
  <Link  className="fa fa-window-close close-link" to="/" ></Link>
      <h2>Delete user</h2>
      <div>are you sure to delete this user?</div>
      <div className="delete-buttons">
          <button className="btn btn-danger btn-delete" onClick={handleYesButton}>Yes</button>
          <button className="btn btn-warning btn-dont-delete" onClick={handleNoButton}>No</button>
      </div>
      </div>
      </div>
    </>  );
}
  
export default Delete;