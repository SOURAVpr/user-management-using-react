import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateUser = () => {
    const { slug } = useParams()
    console.log(slug);
    const navigate = useNavigate()

    const [userdata, setUserdata] = useState(
        {
            username: '',
            age: '',
            email: ''
        }
    )

    const specificUserData = async()=>{
        const{data} = await axios.get(`http://localhost:3000/user/${slug}`)
        setUserdata({username:data.username,age:data.age,email:data.email})
    }
    const { username, age, email } = userdata

    const handleInput = (e) => {
        const { name, value } = e.target
        setUserdata({ ...userdata, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userdata)

        try {
            const res = await axios.put(`http://localhost:3000/user/${slug}`, userdata)

            if (res.statusText === "OK") {
                toast.success("User Updated Successfully"), { position: "top-center" }
                navigate("/dashboard/allusers")
            } else {
                toast.error("failed to update user", { position: "top-center" })
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message,{position:"top-center"})
        }
    }

useEffect(()=>{
    specificUserData()
},[])

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                {/* id":1,
            "username":"demo",
            "age":25,
            "email":"demo@gmail.com" */}
                <label htmlFor="username">Username:</label>
                <input type="text" name='username' value={username} onChange={handleInput} /><br />
                <label htmlFor="age">Age:</label>
                <input type="text" name='age' value={age} onChange={handleInput} /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' value={email} onChange={handleInput} /><br />
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateUser