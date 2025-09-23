import { useState } from "react"

const Home=()=>{
  console.log("Hiiiiiiiii");
  let [state, SetState] = useState("white");
  let [counter, SetCounter] = useState(0);
  let [date, SetDate] = useState(new Date().toLocaleTimeString());
  function fun1(){
    if(state == "white"){
      SetState("red");
    }
    else if(state == "red"){
      SetState("green");
    }
    else{
      SetState("white");
    }
  }
  let interval = setInterval(()=>{
    // console.log("Hiii")
    SetDate(new Date().toLocaleTimeString())
  })
//   let date = new Date().toLocaleTimeString();
  // function fun2(a){
  //   if(a == 'i'){
  //     SetCounter(counter + 1);
  //   }
  //   else if(a == 'd'){
  //     SetCounter(counter - 1);
  //   }
  //   else{
  //     SetCounter(0);
  //   }
  // }
  return (
    <div style={{backgroundColor:state, height:"500px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <h2>Hello Someone</h2>
    <h3>{counter}</h3>
    <h4>{date}</h4>
    <button onClick={()=>clearInterval(interval)}>Stop Time</button>
    <button onClick={()=>SetCounter(counter+1)}>Increment</button>
    <button onClick={()=>SetCounter(counter > 0 ? counter - 1 : 0)}>Decrement</button>
    <button onClick={()=>SetCounter(0)}>Reset</button>
    <button onClick={fun1}>Click To Change Background</button>
    </div>
  )
}
export default Home;