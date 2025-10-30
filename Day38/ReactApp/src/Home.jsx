import React from 'react'

const Home = () => {
  let user = "Ankit Pal";
  return (
    <div>
      <h1>This is Home</h1>
      <New name={user}/>
    </div>
  )
}

const New = ({name}) => {
  return (
    <div>Hello {name} I am New Componant</div>
  )
}

export {New}

export default Home