
// import axios from 'axios';
// import { useState } from 'react';


// export default function MyAsync() {
//   const [list, setList] = useState();

//   const listUsers = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/training");
//       //console.log(res.data);
//       const data = res.data;
//       setList(data);

//       //console.log(data);

//       // //captura a div root
//       // const root = document.getElementById("root");

//       // //cria um elemento lista
//       // const ul = document.createElement('ul')
//       // ul.textContent = list;


//       // //root.appendChild(ul);



//     } catch (err) {
//       console.error(err);
//     }
//   };
//   // const newLocal = listUsers();

//   console.log(list)

//   return (
//     <div>
//       <p>Teste de Async / Await com API Axios </p>
//       <ul>

//         {list.data.map((li) => {
//           <li key={li._id}>
//             <span>AA</span>          </li>
//         })}
//       </ul>
//     </div>
//   )
// }
