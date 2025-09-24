// import React, { useEffect, useState } from 'react'

// const Home = () => {
//   let [count, setCount] = useState(0);
//   let [city, setCity] = useState('Jabalpur');
//   useEffect(()=>{
//     console.log("Hiii");
//   },[count])
//   return (
//     <>
//     <h2>{count}</h2>
//     <button onClick={()=>setCount(count + 1)}>Click</button>
//     <h2>{city}</h2>
//     <button onClick={()=>setCity('Katni')}>Change</button>
//     </>
//   )
// }

// export default Home

// import React, { useEffect, useState } from 'react'
// import './Home.css'
// const Home = () => {
//   let [apiData, setApiData] = useState([]);
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
//       return res.json();
//     }).then((data)=>{
//       console.log(data);
//       setApiData(data);
//     },[])
//   })
//   return (
//     <>
//       {
//         apiData.map((a)=>{
//           return (<section>
//               <h2 id='one'>{a.id}</h2>
//               <h2 id='two'>{a.title}</h2>
//             </section>
//           )
//         })
//       }
//     </>
//   )
// }

// export default Home

import React from 'react'

const Home = () => {
  fetch('https://api.unsplash.com/photos').then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data);
  })
  return (
    <>

    </>
  )
}

export default Home