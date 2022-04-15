import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link } from "react-router-dom";
>>>>>>> 56e53649fed4f071166d832892e718d08e6c2caa
import './Header.css';

const Header = () => {
    return (
<<<<<<< HEAD
        <div className='header'>
        
        <h1>{title}</h1>

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
=======
        <header className='header'>
            <h1>Furniture Furnished</h1>
            <nav className='menu'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order <sup className='text-danger'>3</sup> </Link>
                <Link to="/blogs">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
>>>>>>> 56e53649fed4f071166d832892e718d08e6c2caa
        );
    };
    
    export default Header;