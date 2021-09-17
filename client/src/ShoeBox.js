import React , { useState, useEffect } from 'react';

const ShoeBox = ({shoe}) => {

    const [newQuantity, setNewQuantity] = useState();

// function handleClick(e) {

//     setNewQuantity(product.quantity - 1)

//     e.preventDefault();
//     fetch(`/products/${product.id}`, {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: 'application/json'
//     },
//     body: JSON.stringify({
//         quantity: parseInt(newQuantity)
//     })
//     .then(r => r.json())
//     .then(shoe => console.log(shoe.quantity))
// })
// }

    return (
        <div className= 'individual' id="shoebox">
            <img className= 'image' src={shoe.image_url} alt=''/>
            <p>Name: {shoe.name}</p>
            <p>Quantity: {shoe.quantity}</p>
            <p>Price: {shoe.price}</p>
            <p>⭐ Rating: {parseFloat(shoe.likes).toFixed(2)}</p>
            {/* <button 
                className = 'buybutton'
                onClick={handleClick}>
                Buy Shoe
            </button> */}
        </div>
    );
}

export default ShoeBox;
