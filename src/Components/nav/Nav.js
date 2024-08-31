import { Link } from "react-router-dom";

import logo from "../../Assets/Logo/RFR logo orange.png";
import menuicon from "../../Assets/icons/menu.png";

import "./nav.css";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userlogout } from "../../Redux/User/UserSlice";

function Nav() {
  let loginstatus = useSelector((state) => state.user.loggedin);
  let [menuvisible, setmenuvisible] = useState(false);

  const dispatch = useDispatch();

  function handlemenu() {
    if (menuvisible === true) {
      setmenuvisible(false);
    } else {
      setmenuvisible(true);
    }
  }

  console.log(menuvisible);

  const menustate = menuvisible ? "menu-visible" : "menu-hidden";

  return (
    <div className="navigation-section">
      <div className="nav-container flex">
        <div className="nav-menu">
          <Link to="/">
            {" "}
            <div className="nav-logo-container">
              <img className="logo" src={logo} alt="" />
            </div>{" "}
          </Link>

          <button className="menu-icon" onClick={() => handlemenu()}>
            <img src={menuicon} alt="menu" width={25} height={23} />
          </button>
        </div>

        <div className={menustate}>
          <div className="nav-elemts">
            <Link to="/">
              <button className="nav-link">Home</button>{" "}
            </Link>

            <Link to="/cars">
              <button className="nav-link">Cars</button>{" "}
            </Link>

            <Link to="/contactus">
              <button className="nav-link"> Contact us </button>{" "}
            </Link>

            { loginstatus ? (
              <Link>
                <div className="dropdown">
                  <button className="dropdown-toggle nav-link">
                    user <span className="arrow"></span>
                  </button>

                  <ul className="dropdown-menu">
                    <button className="menu-item">
                      <span className="icon">👤</span> My Profile
                    </button>
                    <button className="menu-item">
                      <span className="icon">📦</span> Bookings
                    </button>
                    <button className="menu-item">
                      <span className="icon">❤️</span> Wishbuttonst
                    </button>
                    <button className="menu-item">
                      <span className="icon">🏷️</span> Coupons
                    </button>
                    <button className="menu-item">
                      <span className="icon">💳</span> Gift Cards
                    </button>
                    <button className="menu-item">
                      <span className="icon">🔔</span> Notifications
                    </button>
                    <button
                      className="menu-item"
                      onClick={() => dispatch(userlogout())}
                    >
                      {" "}
                      <span className="icon">🚪</span> Logout
                    </button>
                  </ul>
                </div>
              </Link>
            ) : (
              <Link to="/login"> <button className="nav-link">Login</button>{" "} </Link>
            )}

            <Link to="/admin/dashboard"> <button className="nav-link"> Admin </button>{" "} </Link>
            
          </div>

        </div>

      </div>

    </div>
  );
}

export default Nav;
