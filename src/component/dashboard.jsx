import { Outlet } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
    return (<div className='dashboard-container'>
         {/* <h1>dashboard</h1> */}
         
         <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-panel" style={{width: '280px'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
     
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/dashboard/charts" className="nav-link active" aria-current="page">
         
          Charts
        </Link>
      </li>
      <li>
        <Link to="/dashboard/reports" className="nav-link text-white">
         Reports
          
        </Link>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  <Outlet/>
         </div>
          );
}
 
export default Dashboard;