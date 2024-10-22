import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './pages/navbar/Navbar'
import { GlobalContextContainer } from './context/GlobalContext.js'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  const [user, setUser] = useState("")
  // useEffect(() => {
  //   localStorage.getItem("jwtToken") ? (setUser(true)) : setUser(null)
  // }, [])

  const currentUser = (x) => {
    setUser(x)
  }
  return (
    <div className='main_body'>
      <GlobalContextContainer.Provider value={{ currentUser, user }}>
        <Navbar />
        <div className='outlet_box'>
          <Outlet />
        </div>
      </GlobalContextContainer.Provider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition:Zoom
      />
    </div>
  )
}

export default Root