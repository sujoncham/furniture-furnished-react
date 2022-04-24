import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Furniture.css';

const FurnitureDetails = (props) => {
    const {furniture, addToCartHandle} = props;
    const {image, title, price} = furniture;
    return (
        <div className='item'>
            <img src={image} alt="" />
            <h5>{title}</h5>
            <p>Price : ${price.toFixed(2)}</p>
            <button onClick={()=> addToCartHandle(furniture)}>Add Product <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default FurnitureDetails;