import React from 'react';
import Cart from './Cart';

const FurnitureCart = (props) => {
   const {carts, removeCartHandle, singleCartRemove} = props;


   const randomHandle = ()=>{
    const randomProduct = Math.floor(Math.random()*carts.length);
    const newCarts = carts[randomProduct]
    console.log(newCarts)
   }
  
  
    return (
        <div className='sticky'>
            <h3>Total Cart Selected : {props.carts.length}</h3> 
            <h4>Cart List</h4>
            {
                carts.map(cart => <Cart key={cart.id} cart={cart} singleCartRemove ={singleCartRemove}></Cart>)
            }
    
            <div className='button-action'>
                <button onClick={()=> randomHandle(carts)}>Select one</button>
                <button onClick={()=>removeCartHandle(carts)}>Reset Cart</button>
            </div>
        </div>
    );
};

// https://github.com/Programming-Hero-Web-Course4/lucky-one-sujoncham

export default FurnitureCart;