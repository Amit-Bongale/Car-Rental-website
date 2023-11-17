import arrow from '../../Assets/icons/right-arrow.png'

import '../css/Login.css'

function Login(){
    return(
        <div>
            <div className="main-container-sigin">

                <div className="Signup-main-container">

                    <div className="signup-side-img">
                        <div className="Quote-container">
                            {/* <h2>Beyond Destinations, Create Connections</h2> */}
                            <h2>Tailoring Journeys for Families and Friends.</h2>
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
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div className="Signin_button_container">
                                <button className="Signin_button">Log in</button>
                            </div>
                            <div className="Signup_button_container">
                                New User?
                                join us now

                                <button className='card-button' id='signup-button'>
                                    <span>Sign Up</span>
                                    <img src={arrow} alt="arrow" />
                                </button>
                                
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;