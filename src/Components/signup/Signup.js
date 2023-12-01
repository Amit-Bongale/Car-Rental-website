import arrow from '../../Assets/icons/right-arrow.png'

import './signup.css'

import { Link } from 'react-router-dom';

function Signup(){

    return(

        <div>
            <div className="main-container-sigin">

                <div className="Signin-main-container">

                    <div className="signin-side-img">
                        <div className="signin-Quote-container">
                            {/* <h2>Beyond Destinations, Create Connections</h2> */}
                            <h2>Don't just Dream it, <br/> Rent it! </h2>
                        </div>
                    </div>

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
                                <label>Number</label>
                                <input type="password" />
                            </div>
                            <div className="Username-container">
                                <label>password</label>
                                <input type="text" />
                            </div> 
                            <div className="Signin_button_container">
                                <button className="Signin_button">Sign in</button>
                            </div>
                            <div className="Signup_button_container">
                                Alredy our Customer?
                                <Link to='/login'>
                                <button className='card-button' id='signup-button'>
                                    <span>login</span>
                                    <img src={arrow} alt="arrow" />
                                </button> </Link>
                                
                            </div>
                         

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Signup;