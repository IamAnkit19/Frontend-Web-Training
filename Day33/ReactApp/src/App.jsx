import React from 'react'
import { useReducer, useState } from 'react'
import Home from './Home'
import Cart from './Cart'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  let [apiData, setApiData] = useState([])
  let [filterData, setFilterData] = useState([])
  let [cart, setCart] = useState([])
  let [itemsInCart, setItemsInCart] = useState(0);
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
    {/* <h2 style={{color:count.color}}>{count.cnt}</h2>
    <button onClick={()=>dispatch({type:'inc'})}>++</button>
    <button onClick={()=>dispatch({type:'dec'})}>--</button>
    <button onClick={()=>dispatch({type:'reset'})}>Reset</button> */}
    {/* <Home data={user}></Home> */}
    <Routes>
      <Route path='/' element={<Home apiData={apiData} setApiData={setApiData} filterData={filterData} setFilterData={setFilterData} cart={cart} setCart={setCart} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}></Home>}/>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}></Cart>}/>
    </Routes>
    </>
  )
}

export default App