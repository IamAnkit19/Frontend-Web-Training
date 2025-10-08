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

// import React from 'react'

// const Home = () => {
//   fetch('https://api.unsplash.com/photos').then((res)=>{
//     return res.json();
//   }).then((data)=>{
//     console.log(data);
//   })
//   return (
//     <>

//     </>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
    let [apiData, setApiData] = useState([])
    let [filterData, setFilterData] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data.recipes);
            setApiData(data.recipes);
            setFilterData(data.recipes);
        })
    },[])
    function del(id){
        let x = apiData.filter((a,b)=>{
            return b !== id;
        })
        setFilterData(x);
    }
    function save(id){
        let x = apiData.find((a, b)=>{
            return b == id;
        })
        localStorage.setItem("img", JSON.stringify(x));
    }
    function sort(x){
        if(x == 's'){
            let data = apiData.filter((a, b)=>{
                return a.mealType[0] == "Snack";
            })
            setFilterData(data);
        }
        else if(x == 'l'){
            let data = apiData.filter((a, b)=>{
                return a.mealType[0] == "Lunch";
            })
            setFilterData(data);;
        }
        else if(x == 'd'){
            let data = apiData.filter((a, b)=>{
                return a.mealType[0] == "Dinner";
            })
            setFilterData(data);
        }
    }
    // Sorting logic
    // let arr = [1,2,5,6,9,2,3,4,5];
    // let data = arr.sort((a,b)=>{
    //     return a - b; //Ascending Order Sorting
    //     // return b - a; //Descending Order Sorting
    // })
    // console.log(data);

    function asc(){
        let data = [...apiData].sort((a,b)=>{
            return a.rating - b.rating;
        })
        setFilterData(data);
    }
    function dec(){
        let data = [...apiData].sort((a,b)=>{
            return b.rating - a.rating;
        })
        setFilterData(data);
    }
  return (
    <>
    <div className="nav">
        {/* Also filter based on ratings */}
        <button onClick={asc}>ASC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={()=>sort('s')}>Snack</button>
        <button onClick={()=>sort('l')}>Lunch</button>
        <button onClick={()=>sort('d')}>Dinner</button>
    </div>
    <section className='all'>
    {
        filterData.map((a, b)=>{
            return(
                <>
                <div id='card'>
                    <img src={a.image}/>
                    <p>{a.name}</p>
                    <p>Rating: {a.rating}</p>
                    <div className="btns">
                        <button onClick={()=>del(b)}>Delete</button>
                        <button onClick={()=>save(b)}>Save</button>
                    </div>
                </div>
                </>
            )
        })
    }
    </section>
    </>
  )
}

export default Home