import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import ContextP from './Context';

const ProductDetails = () => {
    let [showData, setShowData] = useState(0);
    let {id} = useParams();
    let {state} = useContext(ContextP);
    let data = state.apiData.find((a, b)=>{
        return b == id;
    })
    // console.log(data);
    console.log(showData);
    
    
    setShowData(data);
  return (
    <div>
        {
            <h2>{showData.name}</h2>
        }
    </div>
  )
}

export default ProductDetails