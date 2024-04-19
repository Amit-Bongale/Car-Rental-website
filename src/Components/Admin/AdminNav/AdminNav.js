
import user from '../../../Assets/icons/driver.jpg'
import { Link } from "react-router-dom";

import "./adminnav.css";

function AdminNav() {
  return (

    <div className="Admin">

        <div className="admin-nav">

        <div className="admin-details-container">
          <img src={user} alt="user" height={100} className="admin-image" />
          <h3>Admin</h3>
        </div>

        <div className='admin-navlink-container'>


          <Link to='/admin'><button className='admin-nav-button'> Cars Details </button> </Link>

          <Link to='/admin/insertcars'><button className='admin-nav-button'> Insert Cars </button> </Link>

          <Link to='/admin/Bookedcars'> <button className='admin-nav-button'> Bookings </button> </Link> 

          <Link to='/'> <button className='admin-nav-button'> Home </button> </Link> 

        </div>

       

        </div>
    
    </div>
    
  )
}

export default AdminNav