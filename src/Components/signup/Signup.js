import arrow from '../../Assets/icons/right-arrow.png'
import Nav from '../nav/Nav';

import './signup.css'

import { Link } from 'react-router-dom';

function Signup(){

    return(
        <>
        <Nav></Nav>
        <div className="main-container-sigin">
            <div className="Signin-main-container">

                <div className="Main-signin-form">

                    <div className="signin-logo">
                        <h2>Welcome to Rides for Rent</h2>
                    </div>

                    <div className="Signin_form">
                        
                        <div className="Username-container">
                            <label>Username</label>
                            <input type="text" />
                        </div>

                        <div className="Username-container">
                            <label>Email</label>
                            <input type="text" />
                        </div>   

                        <div className="Username-container">
                            <label>Mobile Number</label>
                            <input type="number" />
                        </div>

                        <div className="Username-container">
                            <label>password</label>
                            <input type="text" />
                        </div> 
                        
                        <div className="Signin_button_container">
                            <button className="Signin_button">Sign up</button>
                        </div>

                        <div className="Signup_button_container">
                            Alredy our Customer?
                            <Link to='/login'>
                            <button className='card-button' id='login-button'>
                                <span>login</span>
                                <img src={arrow} alt="arrow" />
                            </button> </Link>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    );
}

export default Signup;