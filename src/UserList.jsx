import React from 'react'
import { useEffect, useState } from 'react'

function UserList  ()  {
    const[loading,setLoading]=useState(false);
        const[userData,setUserData]=useState([]);
        useEffect(()=>{
            setLoading(true)
            getUserData();
        },[])
        const getUserData=async()=>{
            const url="http://localhost:3000/users"
            let response=await fetch(url);
            response=await response.json();
            console.log(response);
            setUserData(response);
            setLoading(false);
        }
  return (
     <div>
            <h1>API Data </h1>
            <ul className='user-list user-list-header'>
                <li>Name</li>
                <li>Email</li>
                <li>Age</li>
                <li>Delete</li>
            </ul>
            {
                   !loading? //ye ek code line hai na ki faltu ki cheeze
                userData.map((user)=>(
                   <ul key={user.id} className="user-list">
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.age}</li>
                   </ul>
                ))
                :<h1>Loading Data</h1>
            }
        </div>
  )
}

export default UserList;