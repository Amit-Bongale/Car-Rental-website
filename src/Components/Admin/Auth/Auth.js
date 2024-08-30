import React from 'react'
import { Outlet , Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Auth() {

  let LoggedIn = useSelector((state) => state.admin.value)
  
  return (
    LoggedIn ? <Outlet /> : <Navigate to="/adminlogin" />
  )
}

export default Auth