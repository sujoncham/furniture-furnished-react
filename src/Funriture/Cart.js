import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = (props) => {
    const {cart, singleCartRemove} = props;
    return (
        <div className='selected-cart'>
            <img className='cart-img' src={cart.image} alt="" /> <span>{cart.title} - {cart.price} - <FontAwesomeIcon onClick={()=>singleCartRemove(cart)} icon={faTrash}></FontAwesomeIcon> </span> 
        </div>
    );
};

export default Cart;