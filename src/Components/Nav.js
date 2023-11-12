import { Outlet, Link } from "react-router-dom";

import './css/nav.css'


function Nav(){

    return(
        
        <div>

            <div className="nav-container flex">

                <div className="logo">logo</div>

                <div className=" nav-elemts flex-center">

                    <button className="nav-link">Home</button>
                    <button className="nav-link">Cars</button>
                    <button className="nav-link">Login</button>
                    <button className="nav-link">Contact us</button>

                </div>

            </div>
            
        </div>
    );
}

export default Nav;