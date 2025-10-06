// import { useState } from "react";

// const App=()=>{
//   let [input, setInput] = useState("");
//   let [data, setData] = useState([]);
//   let [editedData, setEditedData] = useState("");
//   function fun1(e){
//     setInput(e.target.value);
//   }
//   function fun2(){
//     setData([...data, input]);
//   }
//   function deletee(x){
//     let deleteData = data.filter((a,b)=>{
//       return x != b;
//     })
//     setData(deleteData)
//   }
//   function edit(idx){
//     let newData = data.map((a,b)=>{
//       if(idx == b){
//         a = editedData;
//       }
//       return a;
//     })
//     setData(newData)
//   }
//   function fun3(e){
//     setEditedData(e.target.value)
//   }
//   return (
//     <div>
//       <input onChange={fun1} />
//       <button onClick={fun2}>Click</button>
//       <input onChange={fun3} placeholder="Edit"/>
//       {
//         data.map((a, b)=>{
//           return(
//             <>
//             <h2>{a}</h2>
//             <button onClick={()=>{deletee(b)}}>Delete</button>
//             <button onClick={()=>{edit(b)}}>Edit</button>
//             </>
//           )
//         })
//       }
//     </div>
//   )
// }
// export default App;

import React, { useState } from 'react'

const App = () => {
    let [input,SetInput]=   useState({
      name:"",
      email:"",
      passWord:""
    })
    function fun1(e){
      let  {name,value}=    e.target
      SetInput({...input,[name]:value})
      console.log(input);
    }
  return (
    <div>
      {/* <h2>{input}</h2> */}
      <input   name='name' value ={input.name} onChange={fun1} type='text' placeholder='Name'/>
      <br></br>
      <br></br>
      <input  name='passWord' value={input.passWord}  onChange={fun1} type='text' placeholder='passWord'/>
      <br></br>
      <input  type='email' name="email" onChange={fun1}  value={input.email}/>

    </div>
  )
}

export default App