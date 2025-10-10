import React from 'react'

const Home = (a) => {  // Or const Home = ({data}){  }   By destructing
  return (
    <div>{a.data}</div>
  )
}

export default Home