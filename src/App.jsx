// import React from "react";
// import Login,{Button,Profile, UserKeys} from "./UserComponent"; //default import and in curly bracses default export
// const App = () => {
//   return (
//     <div>
//       <h1>Hello this is the react</h1>
//       <h1>this is nikhil</h1>
//       <Button />
//       <Profile/>
//       <Login />
//       <h1>{UserKeys}</h1>
//     </div>
//   );
// };
// export default App;

import { useState } from "react"
import { useBeforeUnload } from "react-router"

// function App() {

//    const name1=undefined;
//    const name="nikhil";
//    let x=123;
//    const y=456;
//    function fruit(){
//       return "mango";

//    }

//   function operation(a,b,op){
//     if(op=='+'){
//       return a+b;
//     }else if(op=='-'){
//       return a-b;
//     }else{
//       return a*b;
//     }
//   }
//   return (
//     <div>
//       <h1>{name1?name1:"user not found"}</h1>
//       <h1>{name}</h1>
//       <h1>{x+y}</h1>
//       <h1>JSX with curly braces</h1>
//       <h1>{operation(10,200,'')}</h1>
//       <h1>{fruit()}</h1>
//     </div>
//   )
// }

// export default App;

//  const fruit = (name) => {
//     alert(name);
//   }

// function App() {

//   function callFun(){
//     alert("function called");
//   }

//   const fruit = (name) => {
//     alert(name);
//   }
//   return(
//     <div>
//       <button onClick={callFun}>Click Me</button>
//       <br/>
//       <button onClick={() => fruit("mango")}>Fruit</button>
//     </div>
//   )
// }
// export default App;
// !why autonatic calling occurs in this?
// because we have to pass the  function deference not the function call
// if we use () it will call the function automaticlly
// so we have to use without () to avoid automatic calling

// import { useState } from "react";
// function App(){
//   const[fruit,setFruit]=useState("Apple"); //yha pe setFruit ki jagha kuch bhi naam rakh skte hai but order or method sam erakhna padega
//   const handleFruit=()=>{
//     setFruit("Banana")
//   }
//   return(
//     <div>
//       <h1>State in React js </h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>Chnage fruit name </button>
//     </div>

//   )
// }
// export default App;

//? hide and show of the element
// import { useState } from "react";
// import User from "./User";
// function App() {
//   const [display, setDisplay] = useState(true);
//   return (
//     <div>
//       <h1>Toggle in react js </h1>
//        <button onClick={()=>setDisplay(!display)}>Toggle button</button>
//       {display ? <h1>Utkarsh singh</h1> : null }
//      {display?<User/>:null}
//     </div>
//   );
// }
// export default App;

//~ Conditional Rendering Explained

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count} </h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       {count == 0 ? <h1>Condition 0</h1>
//       : count==1?<h1> Condition 1</h1>
//       :count==2?<h1> Condition 2</h1>
//       :count==3?<h1> Condition 3</h1>
//       :count==4?<h1> Condition 4</h1>
//       :count==5?<h1> Condition 5</h1>
//       :count==6?<h1> Condition 6</h1>
//       :count==7?<h1> Condition 7</h1>
//       :<h1> Condition 8 has come </h1>}
//     </div>
//   );
// }
// export default App;

//~props in react js
// import User from "./User";
// function App() {
//   let userObject={
//     name:"xysske",
//     age:23,
//     city:"delhi"
//   }
//   let userObject1={
//     name:"peter",
//     age:113,
//     city:"Mumbai"
//   }
//   return (
//     <div>
//       <h1>Props in react js</h1>
//       {/* The prop is renamed from 'total' to 'user' for better clarity. */}
//       <User user={userObject} />
//       <User user={userObject1} />

//       {/* You would also need to update the User component to accept `props.user` instead of `props.total`. */}
//     </div>
//   );
// }
// export default App;

//~More about props
// import React from 'react'
// import User from './User'
// import Wrapper from './Wrapper';

// function App () {
//   return (
//     <div>
//       <h1> more about props in react js  </h1>
//       {/* <User name="Utkarsh singh"/>
//       <User />
//       // if do not pass any name then it will show guest cause we passed the gueswsed for non user name in userr.jsx
//       <User name="ramesh" />
//       //here name is passed so the name will be shown
//       <User name="deepesh" />
//       <User name="suresh"/> */}
//       <Wrapper>
//             <h1>Hi,everyone</h1>
//       </Wrapper>

//         <Wrapper>
//             <h1>Hi,Utkarsh</h1>
//       </Wrapper>

//     </div>
//   )
// }

//* export default Afunction App

// this is about the onchange and how ot use the input field and how to chnage it automatically and while entring the name or filling the filed dynamicaly
// import { useState } from "react";
// function App() {
//   const[val,setVal]=useState("")
//   return(
//     <div>
//       <h1>Get a input field and use the usetate as well</h1>
//       <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter text here" />
//       <br />
//       <h1>{val} </h1>
//       <button onClick={()=>setVal("")}>clear text</button>
//     </div>
//   )
// }
// export default App;

// import Skills from "./Skills";
// function App() {
//   return (
//     <div>
//       <h1>Handle checkbox in react js </h1>
//       <Skills/>
//     </div>
//   )
// }
// export default App;
// import { useState } from "react";
// function App() {
//   const [gender, setGender] = useState("male");
//   const [location, setLocation] = useState("Jaipur ");

//   return (
//     <div>
//       <h1>Radio button in the react js </h1>
//       <h4>Select gender</h4>
//       <br />
//       <label>
//         {" "}
//         <input
//           type="radio"
//           onChange={(event) => setGender(event.target.value)}

//           name="gender"
//           value="male"
//           id="male"
//           checked={gender === "male"}
//         />
//         Male{" "}
//       </label>
//       <label>
//         {" "}
//         <input
//           type="radio"
//           onChange={(event) => setGender(event.target.value)}
//           name="gender"
//           value="female"
//           id="female"
//           checked={gender === "female"}
//         />
//         Female{" "}
//       </label>
//       <h2>Selected gender:{gender}</h2>
//       <br /> <br />
//       <select  onChange={(event)=>setLocation(event.target.value)} defaultValue={"Jaipur"}>
//         <option value="noida">noida</option>
//         <option value="delhi">delhi</option>
//         <option value="mumbai">mumbai</option>
//         <option value="chennai">chennai</option>
//         <option value="Jaipur">Jaipur</option>
//         <option value="pune">pune</option>
//       </select>
//       <h2>Selected city:{location}</h2>
//     </div>
//   );
// }
// export default App;

// array collection of data
// const users = [
//   { id: 1, name: "John", age: 30 },
//   { id: 2, name: "Jane", age: 25 },
//   { id: 3, name: "Bob", age: 35 },
// ];

// ! mapping through the array
// function App() {
//   return (
//     <div>
//       <h1>User List</h1>
//       <ol>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.age} years old
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }
// export default App;

// function App() {
//   const userData = [
//     {
//       name: "utkarsh ",
//       email: "utkarsh@gmail.com",
//       contact: 9999999999,
//       id: 1,
//     },
//     {
//       name: "alok ",
//       email: "alok@gmail.com",
//       contact: 8888888888,
//       id: 2,
//     },
//     {
//       name: "umesh ",
//       email: "umesh@gmail.com",
//       contact: 7777777777,
//       id: 3,
//     },
//     {
//       name: "deepak ",
//       email: "deepak@gmail.com",
//       contact: 6666666666,
//       id: 4,
//     },
//     {
//       name: "satish ",
//       email: "satish@gmail.com",
//       contact: 5555555555,
//       id: 5,
//     },
//     {
//       name: "rohit ",
//       email: "rohit@gmail.com",
//       contact: 4444444444,
//       id: 6,
//     },
//   ];
//   return (
//     <div>
//       <h1>Welcome to React js here we lern loop with map function</h1>
//       <table border="1px solid black">
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Contact</td>
//             <td>id</td>
//           </tr>
//         </thead>
//         <tbody>
//           {userData.map((user,index) =>  // yha pe hum ek loop chla rhe hai in thw table to uniquely identify krne ke liye hum tr ke adner key lga dete hai to identify it properly and thats why.
//             <tr key={index}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.contact}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <h1>dummy data</h1>
//       <table border="1px solid black">
//         <thead>
//           <tr>
//             <td>name</td>
//             <td>email</td>
//             <td>contact</td>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>alok</td>
//             <td>alok@gmail.com</td>
//             <td>1234565478</td>
//           </tr>
//           <tr>
//             <td>umesh</td>
//             <td>umesh@gmail.com</td>
//             <td>37294338</td>
//           </tr>
//           <tr>
//             <td>deepak</td>
//             <td>deepak@gmail.com</td>
//             <td>34723749237</td>
//           </tr>
//           <tr>
//             <td>satish</td>
//             <td>satish@gmail.com</td>
//             <td>123456780</td>
//           </tr>
//           <tr>
//             <td>rohit</td>
//             <td>rohit@gmail.com</td>
//             <td>4444444444</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;
// import User from "./User"
// function App() {
//   const userData = [
//     {
//       name: "utkarsh ",
//       email: "utkarsh@gmail.com",
//       contact: 9999999999,
//       id: 1,
//     },
//     {
//       name: "alok ",
//       email: "alok@gmail.com",
//       contact: 8888888888,
//       id: 2,
//     },
//     {
//       name: "umesh ",
//       email: "umesh@gmail.com",
//       contact: 7777777777,
//       id: 3,
//     },
//     {
//       name: "deepak ",
//       email: "deepak@gmail.com",
//       contact: 6666666666,
//       id: 4,
//     },
//     {
//       name: "satish ",
//       email: "satish@gmail.com",
//       contact: 5555555555,
//       id: 5,
//     },
//     {
//       name: "rohit ",
//       email: "rohit@gmail.com",
//       contact: 4444444444,
//       id: 6,
//     },
//   ];
//   return (
//     <div>
//       <h1>Reuse Componenet in Loop</h1>
//       {userData.map((user) => (
//         <div >
//           <User key ={user.id} data={user}/>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default App;

//?here we learn how to use the loops in the componet and how to use the inner loop or the outer loop as well.
// import College from "./College";

// function App() {
//   const collegeData = [
//     {
//       name: "IIT Delhi",
//       location: "Delhi",
//       established: 1961,
//       students: [
//         {
//           name: "utkarsh",
//           age: "23",
//           email: "utkarsh@gmail.com",
//         },
//         {
//           name: "Gopal",
//           age: "23",
//           email: "utkarsh@gmail.com",
//         },
//       ],
//     },
//     {
//       name: "IIT Bombay",
//       location: "Mumbai",
//       established: 1958,
//       students: [
//         {
//           name: "ramgoapl",
//           age: "32",
//           email: "ramgopal@gmail.com",
//         },
//       ],
//     },
//     {
//       name: "IIT Madras",
//       location: "Chennai",
//       established: 1959,
//       students: [
//         {
//           name: "Kushal",
//           age: "29",
//           email: "kushal@gmail.com",
//         },
//       ],
//     },
//     {
//       name: "IIT Kanpur",
//       location: "Kanpur",
//       established: 1959,
//       students: [
//         {
//           name: "jatin",
//           age: "26",
//           email: "jatin@gmail.com",
//         },
//       ],
//     },
//     {
//       name: "IIT Kharagpur",
//       location: "Kharagpur",
//       established: 1951,
//       students: [
//         {
//           name: "ramesh",
//           age: "21",
//           email: "ramesh@gmail.com",
//         },
//       ],
//     },
//   ];
//   return (
//     <div>
//       <h1>Looping with the nested component </h1>
//       {collegeData.map((college, index) => (
//         <div key={index}>
//           <College college={college} />
//         </div>
//       ))}
//     </div>
//   );
// }
// export default App;

//Here we learn how to use the otther hooks like useEffect
//and how the hook can be implemented with the function component
//functional component+hooks=useable component
//which helps us to understand the hooks more better

// import React, { useEffect, useState } from 'react';
// import Counter from './Counter';

// function App() {
//   const [data, setData] = useState(0);
//   const [counter, setCounter] = useState(0);

// TODO To track button clicks
//   const [dataClicks, setDataClicks] = useState(0);
//   const [counterClicks, setCounterClicks] = useState(0);

//   useEffect(() => {
//     callOnce(); // runs only once
//   }, []);

//   function callOnce() {
//     console.log('The function callOnce is called');
//   }

//   const handleCounterClick = () => {
//     setCounter(counter + 1);
//     setCounterClicks(counterClicks + 1); // increment click count
//   };

//   const handleDataClick = () => {
//     setData(data + 1);
//     setDataClicks(dataClicks + 1); // increment click count
//   };

//   return (
//     <div>
//       <h1>useEffect Hook</h1>
//       <button onClick={handleCounterClick}>
//         Counter {counter}
//       </button>
//       <h1>Counter button clicked {counterClicks} times</h1>
//       <button onClick={handleDataClick}>
//         Data {data}
//       </button>
//       <h1>Data button clicked {dataClicks} times</h1>
//       <Counter />
//     </div>
//   );
// }
// export default App;

//~ handle props side effect with useEffect in component

// import React, { useEffect, useState } from 'react';
// import Counter from "./Counter";
// function App(){
//   const[count,setCounter]=useState(0)

//   return(
//     <div>
//       <h1>Hnadle props side effect with useEffect in component </h1>
//       <Counter count={count}/>
//       <button onClick={()=>setCounter(count+1)}>Increment</button>
//     </div>
//   )
// }

// export default App;

//!Dynamic and Conditional Inline Style

// import React, { useState } from "react";

// function App() {
//   const [isActive, setIsActive] = useState(false);

//   const toggleActive = () => {
//     setIsActive(prev => !prev); // functional updater — robust
//   };

//  derive style instead of storing it in state
//   const cardStyle = {
//     border: "1px solid #ccc",
//     padding: "20px",
//     borderRadius: "8px",
//     backgroundColor: isActive ? "#e0ffe0" : "#f9f9f9",
//     boxShadow: isActive ? "0 6px 12px rgba(0,200,0,0.3)" : "0 4px 8px rgba(0,0,0,0.1)",
//     transition: "background-color 200ms ease, box-shadow 200ms ease"
//   };

//   return (
//     <div style={cardStyle}>
//       <h1>Dynamic Styling</h1>
//       <p>This is a card with dynamic styles.</p>
//       <button onClick={toggleActive} aria-pressed={isActive}>
//         Toggle Active State
//       </button>
//     </div>
//   );
// }

// export default App;

//?external css
// import "./App.css";
// function App() {
//   return (
//     <>
//       <h1 className="heading">Exteral Style</h1>
//       <div className="container">
//         <div className="card">
//           <div>
//             <img
//               className="style"
//               src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
//             />
//           </div>
//           <div>
//             <h4>Utkarsh singh </h4>
//             <p>Web developer</p>
//           </div>
//         </div>
//         <div>
//           <div>
//             <img
//               className="style"
//               src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
//             />
//           </div>
//           <div>
//             <h4>Utkarsh singh </h4>
//             <p>Web developer</p>
//           </div>
//         </div>
//         <div>
//           <div>
//             <img
//               className="style"
//               src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
//             />
//           </div>
//           <div>
//             <h4>Utkarsh singh </h4>
//             <p>Web developer</p>
//           </div>
//         </div>
//         <div>
//           <div>
//             <img
//               className="style"
//               src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
//             />
//           </div>
//           <div>
//             <h4>Utkarsh singh </h4>
//             <p>Web developer</p>
//           </div>
//         </div><div>
//           <div>
//             <img
//               className="style"
//               src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
//             />
//           </div>
//           <div>
//             <h4>Utkarsh singh </h4>
//             <p>Web developer</p>
//           </div>
//         </div><div>
//           <div>
//             <img
//               className="style"
//               src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
//             />
//           </div>
//           <div>
//             <h4>Utkarsh singh </h4>
//             <p>Web developer</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;
// !Formstatus hook in react js
//isme hum dekhte hai ki jb hum form submit kre to sum=bmit button disable while subitting the butoon
// import {useFormStatus} from "react-dom"

// function App() {
//   const handleSubmit = async () => {
//     await new Promise((res) => setTimeout(res, 2000));
//     console.log("submit");
//   };

//   function CustomerForm() {
//          const { pending } = useFormStatus();
//          console.log(pending);
//     return(
//         <div>
//              <input type="text" placeholder="Enter your name" />
//         <br></br>
//         <br></br>
//         <input type="password" placeholder="Enter your password" />
//         <br></br>
//         <br></br>

//         <button disabled={pending} type="submit" onClick={handleSubmit}>{pending ? "Submitting..." : "Submit"}</button>
//         </div>
//     )

//   }

//   return (
//     <div>
//       <h1>UseFormStatus in the react js </h1>
//       <form action={handleSubmit}>
//         <CustomerForm />
//       </form>
//     </div>
//   );
// }

// export default App;

//useTranstionhook in react js and how we and why we use it
// import { useState } from "react";

// function App(){

//   const[pending,setPending]=useState(false);
//   const handleButton=async ()=>{
//    setPending(true)
//    await new Promise(res=>setTimeout(res,2000))
//     setPending(false)
//   }
//   return(
//     <div>
//       <h1>useTransition hook in react js </h1>
//       {/* <button disabled={pending} onClick={handleButton}>Click</button> */}
//       <button onClick={handleButton}>Click</button>

//     </div>
//   )
// }
// export default App;

//~ pure component in the react JS

//which should be how should be write the code
// let guest=0
// function App() {
//   return (
//     <>
//       <h1>Pure Component in React JS</h1>
//       {/* <p>A pure component is a component that always renders the same output given the same props and state.</p> */}
//       {/* <p>This means that if the props and state of a pure component haven't changed, React can skip rendering it, which can lead to performance optimizations.</p> */}
//       {/* <p>In functional components, you can achieve similar behavior using `React.memo`.</p> */}
//       <Cup guest={1}/>
//       <Cup guest={2}/>
//       <Cup guest={3}/>
//       <Cup guest={4}/>
//       <Cup guest={5}/>
//       <Cup guest={6}/>
//       <Cup guest={7}/>
//       <Cup guest={8}/>
//       <Cup guest={9}/>
//       <Cup guest={10}/>
//       <Cup guest={11}/>

//     </>

//   );
// }
// const Cup = ({guest}) => {
//     let count=guest;
//   return (
//     <h1>
//       we have {count} guest and we have to make {count} cup of tea
//     </h1>
//   );
// };

// export default App;
// ? dereived state in the react js

// import { useState } from "react";
// function App(){
//     const[users,setUsers]=useState([]);
//     const[user,setUser]=useState('');
// const handleAddUsers=()=>{
//     setUsers([...users,user])
// }
// const total=users.length  //ye ek derived state hai jo ki total users ke basis pe update ho rha hai
// const last=users[users.length-1] //ye ek derived state hai jo ki total users ke basis pe update ho rha hai
// const unique=[...new Set(users)].length //ye ek derived state hai jo ki total users ke basis pe update ho rha hai

// // console.log(users);

//     return(
//         <div>
//             <h1>Totl user:{total}</h1>
//             <h2>Last user:{last}</h2>
//             <h2>Unique user:{unique}</h2>

//             <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user"/>
//             <button onClick={handleAddUsers} >Add user</button>
//             {
//                 users.map((item,index)=>(
//                     <h4 key={index}>{item}</h4>
//                 ))
//             }
//         </div>
//     )
// }
// export default App;

// ! lifitng  state up
//make 2 componenet and share data between them
//Jab 2 ya zyada components ko same data chahiye ho, toh unke andar state rakhne ke bajaye, usko unke common parent me utha do.
// import { useState } from "react";
// import AddUser from "./AddUser";
// import DisplayUser from "./DisplayUser";
// function App(){
//     const[user,setUser]=useState();
//     return(
//         <div>
//             <h1>Lifting state up</h1>
//             <AddUser setUser={setUser}/>
//             <DisplayUser user={user}/>
//         </div>
//     )
// }
// export default App;

//~Updating objects in state  

// function App(){

//     const[data,setData]=useState({
//         name:'Utkarsh',
//         address:{
//             city:'delhi',
//             country:'India'
//         }
//     })

//     const handleName=(val)=>{
//         data.name=val
//         console.log(data);
//         setData({...data,name:val}) //yha pe new obj create ho rha hai uski wajha
//                                     //se yha pe update ho paa rha hai.
//     }
//     const handleCity=(city)=>{
//         data.address.city=city
//         console.log(data);
//         setData({...data,address:{...data.address,city:city}})
//     }
//     return(
//         <div>
//             <h1>Updating objects in state</h1>
//             <input type="text" placeholder="Update name" onChange={(event)=>handleName(event.target.value)}/>
//              <input type="text" placeholder="Update city"  onChange={(event)=>handleCity(event.target.value)}/>
//             {/* <button>click me</button> */}
//             <h2>Name:{data.name}</h2>
//             <h2>City:{data.address.city}</h2>
//             <h2>Country:{data.address.country}</h2>

//         </div>
//     )
// }
// export default App;

//^ updating arrays in the react js
// import { use, useState } from "react"; 
// function App(){
//     const[data,setData]=useState([
//         'utkarsh','sam','rohit','deepak'  
// ])
// const handleUser=(name)=>{

//     data[data.length-1]=name; //iski help se jo last name hai rohit vo update to ho jaaigga 
//     console.log(data); //and yha pe show bhi karega but screeen me nhi karega 
//     setData([...data]) //jb tk ye wali line nhi likhege cause it will spread and crate a new arry then show the output 
    
// }
//     return(
//         <div>
//             <h1>Updating arrays in the state of  react js</h1>
//             <input type="text" placeholder="enter last user"
//             onChange={(event)=>handleUser(event.target.value)}/>
//             {
//                 data.map((item,index)=>(
//                     <h3 key={index}>{item}</h3>
//                 ))
//             }
//         </div>
//     );
// }
// export default App;


//!useAction state in react js 
 //to handle th form and do all of these things in this 
 //ye form ko easily handle krta hai

// import { useActionState } from "react";
//  function App(){
//     const handleSubmit=async(previousData,formData)=>{
//         let name=formData.get('name');
//         let password=formData.get('password');        
//         await new Promise(res=>setTimeout(res,2000))
//         // console.log("handlesubmit called",name,password);
//         if(name && password){
//             return{message:'data submitted',name,password}
//         }else{
//             return{error:'failed to submit.Enter proper data ',name,password}
//         }

//     }
//    const[data,action,pending]=useActionState(handleSubmit,undefined);
//    console.log(data);
//     return(
//             <div>
//                 <h1>useAction state in react js</h1>
//                 <form action={action}>
//                     <input type="text" placeholder="enter your name " name="name"/>
//                     <br></br>
//                     <br></br>

//                     <input type="password" placeholder="enter your password " name="password"/>
//                     <br></br>
//                     <br></br>

//                     <button disabled={pending} type="submit">Submit</button>
//                     <br></br>

//                 </form>
//                 {
//                         data?.error && <span style={{color:"red"}}>{data?.error}</span>
//                     }
//                     {
//                         data?.message && <span style={{color:"green"}}>{data?.message}</span>
                    
//                     }
//                   <h3>Name:{data?.name}</h3>
//                   <h3>Password:{data?.password}</h3>
//             </div>
          
//     );

//  }
//  export default App;

//~useId Hook 
//this is used to generate the unique id for our imput
// import {useId} from 'react'
// function App(){
    

//     return(
//         <div>
//             {/* <h1>{name}</h1>
//             <h1>{password}</h1>
//             <h1>{terms_and_condition}</h1> */}
//             <UserForm/>
//             <hr></hr>
//             <UserForm/>

//         </div>
//     )
// }
// export default App;


// function UserForm(){
//     const name=useId();
//     const password=useId();
//     const terms_and_condition=useId();
//     return(
//         <div>
//             <form action="">
//                 <lable htmlfor={name}>Ente user name </lable>
//                 <input id={name} type="text" placeholder="enter"></input>
//                 <br></br>
//                 <lable htmlfor={password}>Ente user name </lable>
//                 <input id={password} type="text" placeholder="enter"></input>
//                 <br></br>
//                 <lable htmlfor={terms_and_condition}>Ente user name </lable>
//                 <input id={terms_and_condition} type="checkbox" placeholder="enter"></input>
//             </form>
//         </div>
//     )
// }
// this is useful when we are cratung a ton of ids and want to make sure that each and every id is unique as well.

//&fragments in react js 

// export default function App() {
//     return( // yha pe fragmem=nts use krne se extra dom node nhi hogi jo ki div me ho jaya krti thi 
//         //and its also useful in the re render and saves the ssr side 
//             <Fragment> 
//                 <h1>fragments in react js </h1>
//             </Fragment>
//     )
    
// }

//! creating the custom hooks in the react js
// ye aasan hai bs basic cheeze jaise ki humesha upar declare hoga and all that so its like that 
//its very usefull while creating custome function and 
//we can also use the default hooks inside of the custome hooks 


//& CONTEXT API
// import { useState } from "react";
// import College from "./usecontext/College";
// import { SubjectContext } from "./usecontext/ContextData";

// function App() {
//   const[subject,setSubject]=useState('')
//   return(
//     <div style={{backgroundColor:"red",padding:10}}>
//         <SubjectContext.Provider value={subject}>
//           <select  value={subject} onChange={(event)=>setSubject(event.target.value)}>
//             <option value="">Select option</option>
//             <option value="maths">maths</option>
//             <option value="science">science</option>
//             <option value="english">english</option>
//           </select>
//           <h1>Context API</h1>
//           <button onClick={()=>setSubject('')}>Clear Subject</button>
//           <College/> 
//         </SubjectContext.Provider>
//     </div>
//   )
// }
// export  default App;

//~React Router
// import { BrowserRouter, Routes,Route, Link, NavLink } from "react-router";
// import Test from "./Tets";
// export default function App(){ // we can also use the NavLink because it identifies the active class meaning
//     //kis oage ke upar hai apn ye navlink bta deta hai like with the help of some css it can highlight which link we are on
//     return(
//             <div>
//                 <Test/>
//                 {/* <Counter/>
//                 <BrowserRouter>
//                 <NavLink to="/"><h1>Home</h1></NavLink >
//                 <br></br>
//                 <Link to="/about"><h1>About</h1></Link>
//                 <br></br>
//                 <Link to="/sign-in"><h1>Sign-in</h1>
//                 </Link>
//                 <br></br>
//                 <Link to="/contact"><h1>Contact</h1>
//                 </Link> */}

               
               
// {/* Here in this when we use  the routes it decides that what we want to show on that page and and route decides the way kind of the url 
//  and a page we can use it defines the path where it should take us */ }
//                 {/* <Routes> 
//                     <Route path="/" element={<h1>Home</h1>}/> 
//                     <Route path="/about" element={<h1>About</h1>}/> 
//                     <Route path="/sign-in" element={<h1>Sign-in</h1>}/> 
//                     <Route path="/contact" element={<h1>Contact</h1>}/> 
//                     <Route path="/*" element={<h1>Page Not Found</h1>}/> {/* ye star use krte hai page not found if there is a page which isnt in the code and all that */}
//                 {/* </Routes> */} 
//                 {/* // </BrowserRouter> */}
//             </div>
//     )
// }


// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black">
//       <h1 className="text-4xl font-bold text-red-500">
//         Tailwind is working
//       </h1>
//     </div>
//   );
// }
//


//~APIIIIIIIIIIIIIIIII

//WHAT IS API?
//application programming interface.
//Api uses json format in order to make the api 
//Api have many methods like 
//GET,POST,DELETE,PUT these are some of the famous method of the API

//!API methods
// Free api data is: dummyjson.com/users
//GET:fetching of the data 
//POST:TO STORE SOME DATA 
//PUT/PATCH:to update the data 
//DELETE:to remove the data 


// import React from 'react'
// import './App.css'

// export default function App (){
//     const[userData,setUserData]=useState([]);
// useEffect(()=>{
//     getUsersData()

// },[])
//     async function getUsersData(){
//         const url ="https://dummyjson.com/users"
//         let response = await fetch (url)
//         response = await response.json()
//         // console.log(response); // ye poora array show karega 
//         setUserData(response.users)  // sorf user show karega instead of the whole array 

//     }
//     console.log(userData);

//   return (
//     <div>
//         <h1> FETCH DATA FROM API</h1>
//         {
//            userData && userData.map((user)=>(
//             // <h1>{user.firstName}</h1>
//             <ul className="user-list">
//                 <li>{user.firstName}</li>
//                 <li>{user.lastName}</li>
//                 <li>{user.maidenName}</li>
//                 <li>{user.age}</li>
//                 <li>{user.gender}</li>
//                 <li>{user.email}</li>




              
//             </ul>
//            ))
//         }
//     </div>
//   )
// }


//&  INSTALL JSON SERVER AND MAKE API.
// import './App.css'
//   export default function App(){
//     const[loading,setLoading]=useState(false);
//     const[userData,setUserData]=useState([]);
//     useEffect(()=>{
//         setLoading(true)
//         getUserData();
//     },[])
//     const getUserData=async()=>{
//         const url="http://localhost:3000/users"
//         let response=await fetch(url);
//         response=await response.json();
//         console.log(response);
//         setUserData(response);
//         setLoading(false);
//     }
//     return(
//         <div>
//             <h1>Fetching the api using the JSON with LOADER</h1>
//             {
// //                    !loading? //ye ek code line hai na ki faltu ki cheeze
//                 userData.map((user)=>(
//                    <ul key={user.id} className="user-list">
//                     <li>{user.name}</li>
//                     <li>{user.email}</li>
//                     <li>{user.age}</li>
//                     <li>{user.id}</li>
//                    </ul>
//                 ))
//                 :<h1>Loading Data</h1>
//             }
//         </div>
//     )
//   }
//~ Add User and User List Routes for APIs  
// import { BrowserRouter, Routes,Route, Link, NavLink } from "react-router";
// import { Fragment, useEffect, useState } from "react";
// import './App.css'
// import UserList from "./UserList";
// import UserAdd from "./UserAdd";
//  function App(){
    
//     return(
//        <div>
//         <ul className="nav-list">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/add">Add User</NavLink>

//           </li>
//         </ul>
//        {/* <UserAdd/> */}
//        <Routes>
//         <Route path="/" element={<UserList/>}/>
//         <Route path="/add" element={<UserAdd/>}/>

//        </Routes>
//        </div>
//     )
//   }
// export default App;


//!POST method Api use and how can we use it 
// import { BrowserRouter, Routes,Route, Link, NavLink } from "react-router";
// import { Fragment, useEffect, useState } from "react";
// import './App.css'
// import UserList from "./UserList";
// import UserAdd from "./UserAdd";
// import UserEdit from "./UserEdit";
//  function App(){
    
//     return(
//        <div>
//         <ul className="nav-list">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/add">Add User</NavLink>

//           </li>
//         </ul>
//        {/* <UserAdd/> */}
//        <Routes>
//         <Route path="/" element={<UserList/>}/>
//         <Route path="/add" element={<UserAdd/>}/>
//         <Route path="/edit/:id" element={<UserEdit/>}/>


//        </Routes>
//        </div>
//     )
//   }
// export default App;


//~ FORM VALIDATION IN REACT JS
import "./App.css"

function App  () {
  const [name,setName]=useState('');
  const [nameErr,setNameErr]=useState();

   const [password,setPassword]=useState('');
  const [passErr,setPassErr]=useState();

  const handleName = (event) => {
  const value = event.target.value;
  console.log(value);
  setName(value); // Missing this line!
  if (value.length > 5) {
    setNameErr("Please enter valid name under 5 characters");
  } else {
    setNameErr('');
  }
};

const handlePassword = (event) => {
  const value = event.target.value;
  let regex = /^[A-Z0-9]+$/i;
  setPassword(value); // Missing this line!
  if (regex.test(value)) {
    setPassErr(''); // Fix: pass empty string, not undefined
  } else {
    setPassErr("Please enter valid password - only numbers and alphabets allowed");
  }
};


  return (
    <div className="form-validation">
    <input className={nameErr?'error':''} type="text" onChange={handleName} placeholder="Name"/>
    <span>{nameErr && nameErr}</span>
    <br></br>
    <br></br>

    <input  className={passErr?'error':''} type="text" onChange={handlePassword} placeholder="Password"/>
    <span>{passErr && passErr}</span>

    <br></br>
    <br></br>

    <button disabled={nameErr || passErr}>Login</button>

    </div>
  )
}

export default App;
