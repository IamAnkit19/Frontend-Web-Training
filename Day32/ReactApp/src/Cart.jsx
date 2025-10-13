import React from 'react'

const Cart = ({cart, setCart}) => {
    function del(id){
        let x = cart.filter((a,b)=>{
            return b !== id;
        })
        setCart(x);
    }
  return (
    <section className='all'>
        {
        cart.map((a, b)=>{
            return(
                <>
                <div id='card'>
                    <img src={a.image}/>
                    <p>{a.name}</p>
                    <p>Rating: {a.rating}</p>
                    <p>Quantity: {a.quantity}</p>
                    <div className="btns">
                        <button onClick={()=>del(b)}>Remove</button>
                        {/* <button onClick={()=>save(b)}>Save</button> */}
                        {/* <button onClick={()=>setCart(a)}>Add To Cart</button> */}
                    </div>
                </div>
                </>
            )
        })
    }
    </section>
  )
}

export default Cart