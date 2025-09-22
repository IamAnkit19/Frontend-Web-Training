const App=()=>{
  let count = 0
  function func1(){
    count+=1;
    console.log(count);
  }
  return (
    <>
    <h2>{count}</h2>
    <button onClick={func1}>Click</button>
    {/* <form>
      <span>Enter your name:</span>
      <input type="text" placeholder="Enter your name"/>
      <br />
      <br />
      <span>Enter father's name:</span>
      <input type="text" placeholder="Enter father's name"/>
      <br />
      <br />
      <span>Choose your DOB:</span>
      <input type="date" />
      <br />
      <br />
      <span>Choose gender:</span>
      <input type="radio" name="gender"/>Male
      <input type="radio" name="gender"/>Female
      <br />
      <br />
      <button type="submit">Submit</button>
    </form> */}
    </>
  )
}

export default App