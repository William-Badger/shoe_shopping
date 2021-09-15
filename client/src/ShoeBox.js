import React from 'react';

const ShoeBox = ({shoe}) => {
    return (
        <div id="shoebox">
            <img src={shoe.image_url} alt=''/>
            <p>Name: {shoe.name}</p>
            <p>Quantity: {shoe.quantity}</p>
            <p>Brand: {shoe.brand_id}</p>
            <p>Price: {shoe.price}</p>
            <p>⭐ Rating: {parseFloat(shoe.likes).toFixed(2)}</p>
        </div>
    );
}

export default ShoeBox;
