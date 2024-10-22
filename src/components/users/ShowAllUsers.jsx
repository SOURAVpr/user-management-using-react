import axios from 'axios'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const ShowAllUsers = () => {
    const [users , setUsers] = useState([])
    const [delflag,setDelflag] = useState(false)

    const allusersdata = async () => {
        const { data } = await axios.get("http://localhost:3000/user")
        console.log(data);
        setUsers(data)

    }

    const handleDelete = useCallback(async(id)=>{
        const res = await axios.delete(`http://localhost:3000/user/${id}`)
        console.log(res)
        setDelflag(!delflag)
    },[delflag])

    const getInitials = (username) => {
        if (!username) return '';
        const names = username.split(' ');
        const initials = names.map(name => name[0].toUpperCase()).join('');
        return initials;
    };

    useEffect(() => {
        allusersdata();
    }, [handleDelete])

    return (
        // use param is a hook which is used to fetvh the slug value from the url . Slug helps to all any parameter dynamically in the url
        // <Fragment>
        //     <Cards/>
        // </Fragment>
        <div className="user-cards">
            {users.length > 0 ? (
                users.map(user => (
                    <div key={user.id} className="user-card">
                        <div className="user-initials">
                            {getInitials(user.username)}
                        </div>
                        <div className="user-info">
                            <h3>{user.username}</h3>
                            <p>Age: {user.age}</p>
                            <p>Email: {user.email}</p>
                        </div>
                        <div className="user-actions">
                            <button className="update-btn"><Link to={`/dashboard/updateuser/${user.id}`}>Edit</Link></button>
                            <button className="delete-btn" onClick={()=>{handleDelete(user.id)}}>Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading users...</p>
            )}
        </div>
    );
}

export default ShowAllUsers