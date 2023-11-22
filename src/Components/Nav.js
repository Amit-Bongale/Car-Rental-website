import { Outlet, Link } from "react-router-dom";

import './css/nav.css'

function Nav(){

    return(
        
        <div>

            <div className="nav-container flex">

                <div className="logo">Rides For Rent</div>

                <div className=" nav-elemts flex-center">

                    <Link to='/'>  <button className="nav-link">Home</button> </Link>
                   
                    <Link to='/cars'> <button className="nav-link">Cars</button>  </Link>
                    <Link to='/login'> <button className="nav-link">Login</button> </Link>
                    
                    <button className="nav-link">Contact us</button>

                </div>

            </div>

            <Outlet></Outlet>
            
        </div>
    );
}

export default Nav;