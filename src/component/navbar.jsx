import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate=useNavigate()
    const token=localStorage.getItem("token")
  const handleLogout=(e)=>{
  
  e.preventDefault();
  
  localStorage.removeItem("token")
  navigate("/")
  }
    return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>{
        token ?(
         <>
          {/* <Link className="nav-link" to="#"><i className="fa fa-user"></i></Link> */}
                   
                    <li class="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-user"></i>
        </a>
        <div class="dropdown-menu profile-drop-down" aria-labelledby="navbarDropdown">
        <Link class="dropdown-item" to="/dashboard" >Profile</Link>
          <Link class="dropdown-item" to="#" onClick={handleLogout} >Logout</Link>
          </div>
         
      </li>
      </>
        ):
        (
          <li className="nav-item">
          <Link className="nav-link" to="login">login</Link>
        </li>
        )
      }
     
     

      {/* <li className="nav-item">
        <Link className="nav-link" to="#" onClick={handleLogout}>logout</Link>
      </li> */}
      
    
    </ul>
  </div>
</nav>
    </>  );
}
 
export default Navbar;