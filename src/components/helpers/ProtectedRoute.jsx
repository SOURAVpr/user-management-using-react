import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const isAuth = localStorage.getItem("jwtToken")==null?false:true
  return isAuth?children:<Navigate to="/login"/>
}

export default ProtectedRoute