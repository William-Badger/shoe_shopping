import React from 'react';

const ShoeBox = ({shoe}) => {

    return (
        <div className= 'individual' id="shoebox">
            <img src={shoe.image_url} alt=''/>
            <p>Name: {shoe.name}</p>
            <p>Quantity: {shoe.quantity}</p>
            <p>Price: {shoe.price}</p>
            <p>⭐ Rating: {parseFloat(shoe.likes).toFixed(2)}</p>
        </div>
    );
}

export default ShoeBox;
