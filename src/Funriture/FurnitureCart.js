import React from 'react';
import Cart from './Cart';

const FurnitureCart = (props) => {
   const {carts, cartRemoveHandle} = props;
   const randomHandle = ()=>{
    const randomProduct = Math.floor(Math.random()*carts.length);
    console.log(carts[randomProduct]);
   }
  
  
    return (
        <div className='sticky'>
            <h3>Total Cart Selected : {props.carts.length}</h3> 
            <h4>Cart List</h4>
            {
                carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
          

            <div className='button-action'>
                <button onClick={()=> randomHandle(carts)}>Select one</button>
                <button onClick={()=>cartRemoveHandle(carts)}>Reset Cart</button>
            </div>
        </div>
    );
};



export default FurnitureCart;