import arrow from "../../Assets/icons/right-arrow.png";
import Nav from "../nav/Nav";

import "./Login.css";

import { Link } from "react-router-dom";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { userlogin } from "../../Redux/User/UserSlice";

import { useSelector } from "react-redux";

function Login() {
  const name = useSelector((state) => state.user.name);
  const customer_id = useSelector((state) => state.user.customer_id);

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  const dispatch = useDispatch();

  function login() {
    let data = {
      email: email,
      password: password,
    };

    try {
      fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {

          console.log(data.message);
          alert(data.message);

          if (data.message === "Loged in Sucessfully") {
            console.log(data);
            dispatch( userlogin({ name: data.data[0].name, customer_id: data.data[0].customer_id }));
            window.location.href = '/';
          }

        } else if (data.sqlMessage) {
          alert(data.sqlMessage);
        }

      })
      .catch((error) => console.log(error));
    } catch (error) {
      console.log("error :", error);
    }
  }

  return (
    <>
      <Nav></Nav>
      <div className="loginsection">
        <div className="main-container-login">
          <div className="login-main-container">
            <div className="Main-login-form">
              <div className="login-logo">
                <h2>Welcome Back!</h2>
              </div>

              <div className="login_form">
                <div className="Username-container">
                  <label className="login-Username-container-label">
                    Email
                  </label>
                  <input
                    className="login-input-bar"
                    type="email"
                    onChange={(val) => setemail(val.target.value)}
                  />
                </div>

                <div className="Username-container">
                  <label className="login-Username-container-label">
                    Password
                  </label>
                  <input
                    className="login-input-bar"
                    type="password"
                    onChange={(val) => setpassword(val.target.value)}
                  />
                </div>

                <div className="login_button_container">
                  <button className="login_button" onClick={login}>
                    Log in
                  </button>
                </div>

                <div className="login_text_container">
                  New User? join us now
                  <Link to="/signup">
                    <button className="card-button" id="signup-button">
                      <span>Sign Up</span>
                      <img className="arrow-login" src={arrow} alt="arrow" />
                    </button>{" "}
                  </Link>
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
