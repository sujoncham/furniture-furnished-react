import React from 'react';
import Cart from './Cart';
import './Furniture.css';
import RandomData from './RandomData';

const FurnitureCart = ({cart, removeCartHandle, randomHandle, rando}) => {

    return (
        <div className='sticky'>
            <h5>Total Cart : {cart.length}</h5> 
            {
                cart.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
            }

            <RandomData rando={rando}></RandomData>
            
            <div className='button-action'>
                <button onClick={()=> randomHandle(cart)}>Select one</button>
                <button onClick={()=>removeCartHandle(cart)}>Reset Cart</button>
            </div>
        </div>
    );
};



export default FurnitureCart;