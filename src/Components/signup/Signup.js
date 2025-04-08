import arrow from '../../Assets/icons/right-arrow.png'
import Nav from '../nav/Nav';

import './signup.css'

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup(){

    let [name , setname] = useState('');
    let [email , setemail] = useState('');
    let [mobile , setmobile] = useState('');
    let [password , setpassword] = useState('');


    function send(){

        let data = {
          'name' : name,
          'email' : email,
          'mobile' : mobile,
          'password' : password
        }
    
        try{
          fetch(`${process.env.REACT_APP_API_URL}/signup` , 
          { method : "POST" , headers:{'Content-Type': 'application/json'} , body:JSON.stringify(data)})
          .then((res) => res.json())
          .then((data) => {
            if(data.message){
                alert(data.message)
            }
            else if (data.message === "Account Created Successfully"){
              alert(data.message);
              window.location.href = '/login'
            }
          })
          .catch((error) => console.log(error));
        }
        catch (error) {
          console.log("error :", error)
        }
      }

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
                                <input type="text" className='signup-input'
                                onChange={(val) => setname(val.target.value)}/>
                            </div>

                            <div className="Username-container">
                                <label>Email</label>
                                <input type="email" className='signup-input' 
                                onChange={(val) => setemail(val.target.value)}/>
                            </div>   

                            <div className="Username-container">
                                <label>Mobile Number</label>
                                <input type="number" className='signup-input'
                                onChange={(val) => setmobile(val.target.value)}/>
                            </div>

                            <div className="Username-container">
                                <label>password </label>
                                <input type="text" className='signup-input'
                                onChange={(val) => setpassword(val.target.value)}/>
                            </div> 
                            
                            <div className="Signin_button_container">
                                <button className="Signin_button" onClick={send} >Sign up</button>
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