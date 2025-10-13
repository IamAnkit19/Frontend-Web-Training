import React from 'react'

const Cart = ({cart, setCart, itemsInCart, setItemsInCart}) => {
    function del(item){
        let x = cart.filter((a)=>{
            return a.userId !== item.userId;
        })
        setCart(x);
        let quantity = item.quantity;
        setItemsInCart(itemsInCart-quantity);
    }
    function setQuantity(a,x){
        if(x == -1){
            if(a.quantity == 1){
                del(a);
                return;
            }
            else{
                a.quantity--;
            }
            setItemsInCart(itemsInCart-1);
        }
        else{
            a.quantity++;
            setItemsInCart(itemsInCart+1);
        }
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
                        <button onClick={()=>setQuantity(a,-1)}>--</button>
                        <button onClick={()=>del(a)}>Remove</button>
                        <button onClick={()=>setQuantity(a,1)}>++</button>
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