import React, { useEffect, useState } from 'react';
import FurnitureCart from './FurnitureCart';
import FurnitureDetails from './FurnitureDetails';

const Furniture = () => {
    const [furnitures, setFurnitures] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
      fetch('furniture.json')
      .then(res => res.json())
      .then(data => setFurnitures(data));
    }, []);

    const addToCartHandle = (product) =>{
            // console.log(product);
        const newCart = [...carts, product];
        setCarts(newCart);
    }

    const removeCartHandle = () =>{
        const newCart = [];
        setCarts(newCart);
    }

    const singleCartRemove = () =>{
        const newCart = [...carts];
        setCarts(newCart);
    }


 
    return (
        <div>
            <h3>Products:{furnitures.length}</h3>
            <div className='product-items'>
            <div className='product'>
            {
                furnitures.map(furniture => <FurnitureDetails 
                    key={furniture.id} 
                    furniture={furniture} 
                    addToCartHandle={addToCartHandle} 
                    ></FurnitureDetails>)
            }
            </div>
            <div className="cart">
                <FurnitureCart singleCartRemove={singleCartRemove} removeCartHandle={removeCartHandle} carts={carts}></FurnitureCart>
            </div>
            </div>
           
        </div>
    );
};

export default Furniture;