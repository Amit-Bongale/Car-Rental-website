import { Outlet, Link } from "react-router-dom";

import logo from '../../Assets/Logo/RFR logo orange.png'
import menuicon from '../../Assets/icons/menu.png'

import './nav.css'
import { useState } from "react";

function Nav(){

    let [menuvisible, setmenuvisible] = useState(false)

    function handlemenu(){ 
        if (menuvisible == true){
            setmenuvisible(false)
        }else{
            setmenuvisible(true)
        }
    }
    console.log(menuvisible)

    const menustate = menuvisible ? 'menu-visible' : 'menu-hidden'

    return(
        
        <div className="navigation-section">

            <div className="nav-container flex">

                <div className="nav-menu">
                    <Link to='/'> <div className="nav-logo-container" >
                        <img className="logo" src={logo} alt="" />
                    </div> </Link>

                    <button className="menu-icon" onClick={()=> handlemenu()}>
                        <img src={menuicon} alt="menu" width={25} height={23} />
                    </button>
                
                </div>

                <div className={menustate} >

                    <div className="nav-elemts" >
                        <Link to='/'>  <button className="nav-link">Home</button> </Link>
                        
                        <Link to='/cars'> <button className="nav-link">Cars</button>  </Link>
                        
                        <Link to='/login'> <button className="nav-link">Login</button> </Link>
                        
                        <Link to='/contactus'> <button className="nav-link"> Contact us </button> </Link>

                        <Link to='/admin'> <button className="nav-link"> Admin </button> </Link>
                    </div>
                    
                </div>

            </div>

            <Outlet></Outlet>
            
        </div>
    );
}

export default Nav;