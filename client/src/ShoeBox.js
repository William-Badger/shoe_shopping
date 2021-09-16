import React from 'react';
import { useEffect, useState } from 'react';

const ShoeBox = ({shoe}) => {

    const [brand, setBrand] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/brands/${shoe.brand_id}`)
        .then(res => res.json())
        .then(data => setBrand(data))
        console.log(brand)
    }, []);

    return (
        <div classname= 'individual' id="shoebox">
            <img src={shoe.image_url} alt=''/>
            <p>Name: {shoe.name}</p>
            <p>Quantity: {shoe.quantity}</p>
            <p>Brand: {brand.name}</p>
            <p>Price: {shoe.price}</p>
            <p>⭐ Rating: {parseFloat(shoe.likes).toFixed(2)}</p>
        </div>
    );
}

export default ShoeBox;
