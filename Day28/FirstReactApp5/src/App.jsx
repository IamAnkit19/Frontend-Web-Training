import { useState } from "react";

const App=()=>{
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);
  let [editedData, setEditedData] = useState("");
  function fun1(e){
    setInput(e.target.value);
  }
  function fun2(){
    setData([...data, input]);
  }
  function deletee(x){
    let deleteData = data.filter((a,b)=>{
      return x != b;
    })
    setData(deleteData)
  }
  function edit(idx){
    let newData = data.map((a,b)=>{
      if(idx == b){
        a = editedData;
      }
      return a;
    })
    setData(newData)
  }
  function fun3(e){
    setEditedData(e.target.value)
  }
  return (
    <div>
      <input onChange={fun1} />
      <button onClick={fun2}>Click</button>
      <input onChange={fun3} placeholder="Edit"/>
      {
        data.map((a, b)=>{
          return(
            <>
            <h2>{a}</h2>
            <button onClick={()=>{deletee(b)}}>Delete</button>
            <button onClick={()=>{edit(b)}}>Edit</button>
            </>
          )
        })
      }
    </div>
  )
}
export default App;