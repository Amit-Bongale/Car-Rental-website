
import user from '../../../Assets/icons/driver.jpg'
import { Link } from "react-router-dom";


import insert from '../../../Assets/icons/addition.png'
import cars from '../../../Assets/icons/car (1).png'
import carimg from '../../../Assets/icons/car (2).png'
import booking from '../../../Assets/icons/bookings.png'
import logout from '../../../Assets/icons/logout.png'

import { useDispatch } from 'react-redux';
import { adminlogout } from '../../../Redux/Admin/Adminslice';

import "./adminnav.css";

function AdminNav() {

  const dispatch = useDispatch();

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
            <img src={logout} alt="car" className='admin-nav-image' />
            <button className='admin-nav-button' onClick={() => dispatch(adminlogout())}> Log out </button> </Link> 
        </div>

      </div>
    
    </div>
    
  )
}

export default AdminNav