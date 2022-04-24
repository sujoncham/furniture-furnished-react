import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='selected-cart'>
            <img className='cart-img' src={cart.image} alt="" /> <p>{cart.title.slice(0, 12)}- ${cart.price}  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </p> 
        </div>
    );
};

export default Cart;