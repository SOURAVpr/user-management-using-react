import React, { useContext, useState } from 'react'
import Style from './login.module.css'
import { useNavigate } from 'react-router-dom'
import { GlobalContextContainer } from '../context/GlobalContext'
import { toast } from 'react-toastify'
const Login = () => {
  // state to store user input data
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  // use the provided context
  const {currentUser} = useContext(GlobalContextContainer)

  // user data destructi
  const { email, password } = data

  const fdata = {
    username: "Atmaram Tukaran Bhide",
    email: "admin@gmail.com",
    password: "admin123",
    secret_key: "gf4sdf5sdf543as"
  }

  const navigate = useNavigate()

  // Handler to update state based on input changes
  const handleData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

// Handle the login
  const handleLogin = (e) => {
    e.preventDefault()
    console.log(data);

    // Simple authentication check
    if (email == fdata.email && password == fdata.password) {
      localStorage.setItem("jwtToken", fdata.secret_key)
      localStorage.setItem("currentUser",JSON.stringify(fdata))
      // currentUser(fdata)
      toast.success("Successfully Logged In",{position:"top-right"})
      navigate("/dashboard")
    }
    else
      toast.error("Invalid Credentials",{position:"top-center"})
    // Reset the fileds after form submission
    setData({ email: "", password: "" })
  }

  return (
    <div className={Style.login}>
      <form action="" onSubmit={handleLogin}>
        <label htmlFor="email">Email :</label>
        <input type="email" name="email" value={email} onChange={handleData} />
        <label htmlFor="password">Password :</label>
        <input type="password" name='password' value={password} onChange={handleData} />
        <button className={Style.loginbtn}>Login</button>
      </form>
    </div>
  )
}

export default Login