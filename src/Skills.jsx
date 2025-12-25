// import {useState} from "react";
// function Skills(){
//     const[skills,setSkills]=useState([]);
//     const handleSkills=(event)=>{
//         // console.log(event.target.value,event.target.checked);
//         if(event.target.checked){
//             setSkills([...skills,event.target.value]);
//         }else{
//             setSkills([...skills.filter((item)=>item!==event.target.value)]);
            
//         }
//     }
//     return (
//         <div>
//             <h3>Select your skills</h3>
//             <label>
//                 <input onChange={handleSkills} type="checkbox" id="js" value="js" />
//                 JavaScript
//             </label>
//             <br />
//             <br />

//             <label>
//                 <input onChange={handleSkills} type="checkbox" id="react" value="react" />
//                 React
//             </label>
//             <br />
//             <br />

//             <label>
//                 <input onChange={handleSkills}  type="checkbox" id="node" value="node" />
//                 Node.js
//             </label>
//             <h1>{skills.toString()}</h1>
//         </div>
//     )
// }
// export default Skills;