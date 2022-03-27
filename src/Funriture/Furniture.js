import React, { useEffect, useState } from 'react';
import '../App.css';
import Description from '../Description/Description';
import FurnitureCart from './FurnitureCart';
import FurnitureDetails from './FurnitureDetails';

const Furniture = () => {
    const [furnitures, setFurnitures] = useState([]);
    const [carts, setCarts] = useState([]);
    const [rando, setRando] = useState([]);
    useEffect(()=>{
      fetch('furniture.json')
      .then(res => res.json())
      .then(data => setFurnitures(data));
    }, []);

    const addToCartHandle = (product) =>{
            // console.log(product);
        const newCart = [...carts, product];
        if(newCart.length<=4){
            setCarts(newCart);
        } else{
            alert("not more than 4");
        } 
    }

    const randomHandle = (rando)=>{
        const randomProduct = Math.floor(Math.random()*rando.length);
        const newRando = carts[randomProduct];
        setRando(newRando);
        
       }
     
       
    const removeCartHandle = () =>{
        const newCart = [];
        const newRando = [];
        setCarts(newCart);
        setRando(newRando);
    }

    return (
        <div className='main'>
            <h3>Products:{furnitures.length}</h3>
            <div className='container'>
            <div className='product-items'>
            <div className='product'>
                <div className="product-item">
                {
                    furnitures.map(furniture => <FurnitureDetails 
                        key={furniture.id} 
                        furniture={furniture} 
                        addToCartHandle={addToCartHandle} 
                        ></FurnitureDetails>)
                }
                </div>

            <Description></Description>

            </div>
            <div className="cart">
                <FurnitureCart rando={rando} randomHandle={randomHandle} removeCartHandle={removeCartHandle} carts={carts}></FurnitureCart>
            </div>
            </div>
            </div>
           
        </div>
    );
};

export default Furniture;