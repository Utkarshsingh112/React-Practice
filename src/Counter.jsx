// import {useState} from "react";
// const Counter=()=>{
//     const[count,setCount]=useState(0);
//     return(
//         <div>
//             <h1>Counter:{count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
//         </div>
//     )
// }
// export default Counter;

// export const Child=()=>{
//     return(
//         <div>
//             <h1>{"hello"}</h1>
//         </div>
//     )
// }

// function Counter({ counter, data }) {
//   const getCounter = () => {
//     console.log("call only");
//   };
//   getCounter();

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <h1>{data}</h1>
//     </div>
//   );
// }
// export default Counter;

// import {useEffect} from "react";

// const Counter = ({ count }) => {
//   const handleCounter = () => {
//     console.log("handleCounter called");
//   };
//   useEffect(() => {
//     handleCounter();
//   }, []);
//   return (
//     <div>
//       <h1>counter component {count}</h1>
//     </div>
//   );
// };

// export default Counter;
