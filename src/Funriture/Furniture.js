import React from 'react';
import FurnitureDetails from './FurnitureDetails';

const Furniture = (props) => {
    console.log(props.Furniture);
    return (
        <div>
            <h3>Products</h3>
            <div className='all-furniture'>
            <div className='furniture'>
                <FurnitureDetails></FurnitureDetails>
            </div>
            <div className='cart'></div>
            </div>
        </div>
    );
};

export default Furniture;