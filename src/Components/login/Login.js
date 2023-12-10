import arrow from '../../Assets/icons/right-arrow.png'
import Nav from '../nav/Nav';

import './Login.css'

import { Link } from 'react-router-dom';

function Login(){

    return(

        <>
        <Nav></Nav>
        <div className='loginsection'>

            <div className="main-container-login">

                <div className="login-main-container">

                    <div className="Main-login-form">

                        <div className="login-logo">
                            <h2>Welcome Back!</h2>
                        </div>

                        <div className="login_form">
                            <div className="Username-container">
                                <label className="login-Username-container-label">Username</label>
                                <input type="text" />
                            </div>  
                            <div className="Username-container">
                                <label className="login-Username-container-label" >Password</label>
                                <input type="password" />
                            </div>
                            <div className="login_button_container">
                                <button className="login_button">Log in</button>
                            </div>

                            <div className="login_text_container">
                                New User? join us now
                                
                                <Link to='/signup'>
                                <button className='card-button' id='signup-button'>
                                    <span>Sign Up</span>
                                    <img className='arrow-login' src={arrow} alt="arrow"/>
                                </button> </Link>
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    );
}

export default Login;