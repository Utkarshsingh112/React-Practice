// function Student({ student }) {
//   return (
//     <div>
//       <h3>Students:</h3>
//       {student.map((students) => (
//         <ul>
//           <li>
//             <h4>Name:{students.name}</h4>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// }
import Subject from "./usecontext/subject";

function Student() {
    return(
            <div style={{backgroundColor:"yellow",color:"black",padding:10}}>
                <h1>
                    Student component
                </h1>
                <Subject/>
            </div>
    )
}
export default Student;