import Nav from "../../nav/Nav"

import './userdetails.css'

import { useSelector , useDispatch } from "react-redux"
import { userlogout } from "../../../Redux/User/UserSlice"

import { Navigate } from "react-router-dom"

function Userdetails() {

  const username = useSelector((state) => state.user.name)
  const userid = useSelector((state) => state.user.customer_id)
  const loggedin = useSelector((state) => state.user.loggedin)

  const dispatch = useDispatch()
  return (
    <div>
      { loggedin ? (<></>) : <Navigate to="/"></Navigate>}

      <Nav></Nav>
      <div className="userdetails-container">
        <h1 className="user-name"> Welcome {username}</h1>
        <h3> User Id : {userid} </h3>

        <button className="button-center" onClick={() => dispatch(userlogout())}>Logout</button>
        
      </div>
    </div>
  )
}

export default Userdetails