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
            {
                   !loading? //ye ek code line hai na ki faltu ki cheeze
                userData.map((user)=>(
                   <ul key={user.id} className="user-list">
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.age}</li>
                    <li>{user.id}</li>
                   </ul>
                ))
                :<h1>Loading Data</h1>
            }
        </div>
  )
}

export default UserList;