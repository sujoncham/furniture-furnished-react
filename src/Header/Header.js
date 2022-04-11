import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <h1>Furniture Furnished</h1>
            <nav className='menu'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order <sup className='text-danger'>3</sup> </Link>
                <Link to="/blogs">Blog</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
        );
    };
    
    export default Header;