import React from 'react'
import { useReducer } from 'react'
import Home from './Home'

const App = () => {
  let user = 'Ankit';
  let obj = {
    cnt:0,
    color:'red'
  }
  function reducer(count, action){
    if(action.type == 'inc'){
      console.log(count);
      return {cnt:count.cnt + 1, color:'orange'};
    }
    else if(action.type == 'dec'){
      return {cnt:count.cnt - 1, color:'green'};
    }
    else if(action.type == 'reset'){
      return {cnt:0, color:'red'};
    }
    else{
      return obj;
    }
  }
  let [count, dispatch] = useReducer(reducer, obj);
  return (
    <>
    <h2 style={{color:count.color}}>{count.cnt}</h2>
    <button onClick={()=>dispatch({type:'inc'})}>++</button>
    <button onClick={()=>dispatch({type:'dec'})}>--</button>
    <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    <Home data={user}></Home>
    </>
  )
}

export default App