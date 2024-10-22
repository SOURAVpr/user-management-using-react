import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const CreateUser = () => {
    const [userdata,setUserdata] = useState(
        {
            username:'',
            age:'',
            email:''
        }
    )
    const {username,age,email} = userdata
    const handleSubmit= async(e)=>{
        e.preventDefault()
        console.log(userdata)
        
        const res=await axios.post("http://localhost:3000/user",userdata)
        
        if(res.statusText === "Created") {
            toast.success("User Created Successfully"),{position:"top-center"}
        } else{
            toast.error("failed to add user",{position:"top-center"})
        }
    }
    const handleInput = (e)=>{
        const {name,value}=e.target
        setUserdata({...userdata,[name]:value})
    }
    return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
        {/* id":1,
            "username":"demo",
            "age":25,
            "email":"demo@gmail.com" */}
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' value={username} onChange={handleInput}/><br />
            <label htmlFor="age">Age:</label>
            <input type="text" name='age' value={age} onChange={handleInput}/><br />
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' value={email} onChange={handleInput}/><br />
            <button>Add User</button>
        </form>
    </div>
  )
}

export default CreateUser