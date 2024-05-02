import React from 'react'
import { Outlet , Navigate } from 'react-router-dom'

function Auth() {

  let LoggedIn = localStorage.getItem("LoggedIn")

  return (
    LoggedIn ? <Outlet /> : <Navigate to="/adminlogin" />
  )
}

export default Auth