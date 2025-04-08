import './adminlogin.css'
import '../../login/Login.css'

import Nav from '../../nav/Nav';
import { useState } from 'react';

import {useDispatch } from 'react-redux'
import { adminlogin } from '../../../Redux/Admin/Adminslice';

function Adminlogin(){

    let [id , setid] = useState("");
    let [password , setpassword] = useState("");

    const dispatch = useDispatch()

    function login(){

        let data = {
          'id' : id,
          'password' : password
        }
    
        try{
          fetch(`${process.env.REACT_APP_API_URL}/adminlogin` , 
          { method : "POST" , headers:{'Content-Type': 'application/json'} , body:JSON.stringify(data)})
          .then((res) => res.json())
          .then((data) => {

            if(data.message === 'acess granted'){
                dispatch(adminlogin());
                window.location.href = 'admin/dashboard';
            }
            else if(data.sqlMessage){
              alert(data.sqlMessage);
              console.log("ACESS DENIED")
            }
            else{
                alert("Invalid ID or Password")
            }
            
          })
          .catch((error) => console.log(error));

        } catch (error) {
          console.log("error :", error)
        }
    }

    return(
        <>
        <Nav></Nav>
        <div className='admin-loginsection'>
            <div className="main-container-login">

                <div className="login-main-container">

                    <div className="Main-login-form">

                        <div className="login-logo">
                            <h2>Log In</h2>
                        </div>

                        <div className="login_form">

                            <div className="Username-container">
                                <label className="login-Username-container-label">ID</label>
                                <input className='login-input-bar' type="text"
                                onChange={val => setid(val.target.value)}/>
                            </div>

                            <div className="Username-container">
                                <label className="login-Username-container-label" >Password</label>
                                <input className='login-input-bar' type="password"
                                onChange={val => setpassword(val.target.value)} />
                            </div>

                            <div className="login_button_container" style={{marginTop : 40}}>
                                <button className="login_button" onClick={login}>Log in</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Adminlogin;