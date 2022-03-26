import React from 'react';

const RandomData = (props) => {
    const {rando} = props;
    return (
        <div>
            
            <img src={rando.image} alt="" /> <p>{rando.title} {rando.price}</p>
          
        </div>
    );
};

export default RandomData;