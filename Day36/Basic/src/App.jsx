import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0);
  let [background, setBackground] = useState('white');
  let [timer, setTimer] = useState(0);
  let [play, setPlay] = useState('pause')
  function fun1(){
    setCount(count+1);
    if(background == 'white')
      setBackground('red');
    else if(background == 'red')
      setBackground('green')
    else if(background == 'green')
      setBackground('white')
  }
  // let x = setInterval(()=>{
  //   setTimer(timer + 1);
  // },1000)
  useEffect(()=>{
    let x = null;
    if(play == 'play'){
      x = setInterval(()=>{
        setTimer(prev=>prev+1);
      },1000)
    }
    return () => clearInterval(x);
  },[play])
  function fun2(){
    // let date = Date();
    if(play == 'play'){
      setPlay('pause');
    }
    else if(play == 'pause'){
      setPlay('play');
    }
  }
  function fun3(){
    setPlay('pause');
    setTimer(0);
  }
  return (
    <div style={{backgroundColor:background}}>
        {/* <h1>{count}</h1>
        <button onClick={fun1}>++</button> */}
        <h2>{Math.floor(timer/60)}:{timer%60}</h2>
        <button onClick={()=>fun2()}>Start/Pause</button>
        <button onClick={()=>fun3()}>Reset</button>
    </div>
  )
}

export default App