import React from 'react';
import Cart from './Cart';
import './Furniture.css';
import RandomData from './RandomData';

const FurnitureCart = (props) => {
    
   const {carts, removeCartHandle, randomHandle, rando} = props;
  
    return (
        <div className='sticky'>
            <h3>Total Cart Selected : {carts.length}</h3> 
            {
                carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }

            <RandomData rando={rando}></RandomData>
            
    
            <div className='button-action'>
                <button onClick={()=> randomHandle(carts)}>Select one</button>
                <button onClick={()=>removeCartHandle(carts)}>Reset Cart</button>
            </div>
        </div>
    );
};



export default FurnitureCart;