import React, { useState } from 'react'
import { GlobalContextContainer } from './GlobalContext'

const UserContext = ({children}) => {
    const [user,setUser]= useState(null)
    const currentUser=(x)=>{
        setUser(x)
    }

  return <GlobalContextContainer.Provider value={{currentUser,user}}>
    {children}
  </GlobalContextContainer.Provider>
}

export default UserContext