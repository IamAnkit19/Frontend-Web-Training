import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0);
  let [background, setBackground] = useState('white');
  let [timer, setTimer] = useState(0);
  let [play, setPlay] = useState('pause');
  let [initial, setInitial] = useState(0);
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
    console.log("Hii Ankit");
  },[])
  useEffect(()=>{
    let x = null;
    if(play == 'play'){
      x = setInterval(()=>{
        setTimer(prev=>prev+1);
      },10)
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
  const formatTime = (time) => {
    const hour = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  function fun4(e){
    setInitial(e.target.value);
  }
  function fun5(){
    setTimer((prev)=>initial);
  }
  return (
    <div style={{backgroundColor:background,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',height:'100vh'}}>
        <h1>{count}</h1>
        <button onClick={fun1}>++</button>
        <h1>StopWatch</h1>
        {/* <h2>{Math.floor(timer/60)}:{timer%60}</h2> */}
        <h2>{formatTime(timer)}</h2>
        <input type="number" placeholder='Enter initial time' onChange={fun4}/>
        <button onClick={fun5}>Set Initial Time</button>
        <button onClick={()=>fun2()}>Start/Pause</button>
        <button onClick={()=>fun3()}>Reset</button>
    </div>
  )
}

export default App