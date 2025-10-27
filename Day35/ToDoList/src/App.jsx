import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  let [work, SetWork] = useState([]);
  let [inputData, setInputData] = useState("");
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem('listData'));
    if(data != null){
      SetWork(data.map((a)=>{
        return a;
      }))
    }
  },[])
  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(work));
  }, [work]);
  function fun1(){
    SetWork([...work, inputData]);
    // localStorage.setItem("listData", JSON.stringify(work));
    setInputData("");
  }
  function fun2(e){
    setInputData(e.target.value);
  }
  function del(idx){
    SetWork(work.filter((a,b)=>{
      return idx != b;
    }))
    // localStorage.setItem("listData", JSON.stringify(work));
    setInputData("");            
  }
  return (
    <div>
      <input type="text" placeholder='Enter work to do' id='inputData' value={inputData} onChange={fun2}/>
      <button onClick={fun1}>Add</button>
      {
        work.map((a,b)=>{
          return (
            <>
            <h2>{a}</h2>
            <button onClick={()=>del(b)}>Delete</button>
            </>
          )
        })
      }
    </div>
  )
}

export default App