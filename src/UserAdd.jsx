import React, { useState } from 'react'

function UserAdd ()  {

const[name,setName]=useState("");
const[age,setAge]=useState("");
const[email,setEmail]=useState("");

const createUser=async()=>{
  console.log(name,age,email);
  const url="http://localhost:3000/users";
  let response=await fetch(url,{
    method:"POST",  //In the psotmethod we have to initilze it not like the GET method 
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:name,
      age:age,
      email:email
    })
  });
  response=await response.json();
  console.log(response);
  
  
}
  return (
    <div style={{backgroundColor:"yellow",color:"black",padding:10,textAlign:"center"}}>
        <h1>Add New User</h1>
        <input onChange={(event)=>setName(event.target.value)}  type="text" placeholder="Enter name"/>
        <br></br>
        <input onChange={(event)=>setAge(event.target.value)} type="text" placeholder="Enter age"/>
        <br></br> 
        <input onChange={(event)=>setEmail(event.target.value)} type="text" placeholder="Enter email"/>
        <br></br>
        <button onClick={createUser}>Add User</button>
        
    </div>
  )
}

export default UserAdd;