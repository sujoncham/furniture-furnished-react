import React from 'react';
import Cart from './Cart';

const FurnitureCart = (props) => {
   const {carts} = props;
    return (
        <div className='sticky'>
            <h3>Cart:{props.carts.length}</h3> 
            {
                carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default FurnitureCart;