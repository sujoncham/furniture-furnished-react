import React from 'react';
import './Header.css';

const Header = (props) => {
    const {title, cart} = props;
    return (
        <div className='header'>
        <h1>{title}</h1>
        <h3>Cart <sup>{cart.length}</sup></h3>
        
        
        </div>
        );
    };
    
    export default Header;