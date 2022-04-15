import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
        
        <h1>Header</h1>

        <nav className='menu'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/order">Order</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </nav>
        <h3>Cart</h3>
        
        
        </div>
        );
    };
    
    export default Header;