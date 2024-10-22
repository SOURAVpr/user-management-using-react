import React, { useContext } from 'react'
import Style from './navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContextContainer } from '../../context/GlobalContext.js'
import { toast } from 'react-toastify'

const Navbar = () => {
  // use the global context
  // const { currentUser, user } = useContext(GlobalContextContainer)

  // use the navigate hook to go to login path
  const navigate = useNavigate()

  //? logout handling logic
  const handlelogout = () => {
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("currentUser")
    // currentUser(null)
    toast.success("Successfully Logged Out", { position: 'top-right' })
    navigate("/login")
  }
  const user = JSON.parse(localStorage.getItem("currentUser"))
  console.log(user);
  

  //? get user's initials

  const getInitials = (name) => {
    if (!name) {
      return '';
    }
    const names = name.split(' ');
    const initialsArray = names.map((ele) => {
      return ele[0] || ''; // Ensures that we handle cases where words might be empty
    });
    const initials = initialsArray.join('')
    return initials.toUpperCase();
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.leftside}>
        <Link to="/">Navbar</Link>
      </div>
      <div className={Style.rightside}>
        <ul>
          <li>Contact</li>
          <li>About</li>
          <li>Help</li>
        </ul>
        {user ? 
        <div className={Style.logout}>
          <div className={Style.usericon}>
            {getInitials(user.username)}
          </div>
          {/* <p>Hi..</p>
              <p>{user.username}</p> */}
          <button className={Style.logoutbtn} onClick={handlelogout}>Logout</button>
        </div> : <div><Link to="/login">Login</Link></div>}
      </div>

    </div>
  )
}

export default Navbar