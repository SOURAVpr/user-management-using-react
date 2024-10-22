import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  const [data,setData] = useState(null)

  const fdata = async()=>{
    // const val = await fetch("https://api.github.com/users")
    // const res = await val.json()


    const {data} = await axios.get("https://api.github.com/users")
    console.log(data);
    setData(data)
    
  }
  // console.log(data)
  useEffect(()=>{
    fdata()
  },[])
  
  return (
    <div className='dashboard'>
      <div className="leftdashboard">
        <ul>
          <li><Link to="/dashboard/createuser">create-user</Link></li>
          <li><Link to="/dashboard/allusers">All user</Link></li>
          <li><Link to="/dashboard/profile">My Profile</Link></li>
        </ul>
      </div>
      <div className="rightdashboard">
        <Outlet/>
      <p>Select an option from the menu</p>
      </div>
    </div>
  )
}

export default Dashboard