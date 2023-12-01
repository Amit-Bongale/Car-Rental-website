import { Outlet, Link } from "react-router-dom";

import logo from '../../Assets/Logo/rides for rent logo orange.png'

import './nav.css'

function Nav(){

    return(
        
        <div>

            <div className="nav-container flex">

                <Link to='/'> <div >
                    <img className="logo" src={logo} alt="" />
                </div> </Link>

                <div className=" nav-elemts flex-center">

                    <Link to='/'>  <button className="nav-link">Home</button> </Link>
                   
                    <Link to='/cars'> <button className="nav-link">Cars</button>  </Link>
                    <Link to='/login'> <button className="nav-link">Login</button> </Link>
                    
                    <Link to='/contactus'> <button className="nav-link"> Contact us </button> </Link>
                    
                </div>

            </div>

            <Outlet></Outlet>
            
        </div>
    );
}

export default Nav;