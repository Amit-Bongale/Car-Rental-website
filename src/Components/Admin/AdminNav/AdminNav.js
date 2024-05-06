
import user from '../../../Assets/icons/driver.jpg'
import { Link } from "react-router-dom";

import home from '../../../Assets/icons/home.png'
import insert from '../../../Assets/icons/addition.png'
import cars from '../../../Assets/icons/car (1).png'
import carimg from '../../../Assets/icons/car (2).png'
import booking from '../../../Assets/icons/bookings.png'



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

          <Link to='/admin/dashboard' className='admin-nav-link'>
            <img src={cars} alt="car" className='admin-nav-image' />
            <button className='admin-nav-button'>Cars Details </button> 
          </Link>

          <Link to='/admin/insertcars' className='admin-nav-link'>
            <img src={insert} alt="car" className='admin-nav-image' height={15}/>
            <button className='admin-nav-button'> Insert Cars </button> 
          </Link>

          <Link to='/admin/carsimages' className='admin-nav-link'>
            <img src={carimg} alt="car" className='admin-nav-image' />
            <button className='admin-nav-button'>Cars images </button>
          </Link>

          <Link to='/admin/Bookedcars' className='admin-nav-link'> 
            <img src={booking} alt="car" className='admin-nav-image' />
            <button className='admin-nav-button'> Bookings </button>
          </Link> 

          <Link to='/' className='admin-nav-link'>
            <img src={home} alt="car" className='admin-nav-image' />
            <button className='admin-nav-button' onClick={ localStorage.removeItem("LoggedIn")}> Home </button> </Link> 
        </div>

      </div>
    
    </div>
    
  )
}

export default AdminNav