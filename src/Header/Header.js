import React from 'react';
import './Header.css';

const Header = ({title}) => {
    return (
        <div className='header'>
        <h1>{title}</h1>
        <h3>Cart</h3>
        
        </div>
        );
    };
    
    export default Header;