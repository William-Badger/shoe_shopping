import React from 'react';
import { useEffect, useState } from 'react';

const NewProduct = ({user}) => {

    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newImage, setNewImage] = useState('');
    // const [newBrand, setNewBrand] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    // const [brands, setBrands] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost/brands')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, []);


    function handleSubmit(e) {
        e.preventDefault();
        const newProduct = {
            name: newName,
            price: parseInt(newPrice),
            image_url: newImage,
            likes: 5.0,
            quantity: parseInt(newQuantity),
            user_id: user.id
        }
        console.log(newProduct)

        fetch('/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct)
        })
    }

    return (
        <div>
            <h2>Add a shoe: </h2>
            <form onSubmit={handleSubmit}>
                <label>Name of shoe</label>
                <input 
                type="text" 
                placeholder="Name of Shoe"
                value = {newName}
                onChange = {(e) => setNewName(e.target.value)}
                required
                ></input>
                <br/>

                <label>Price</label>
                <input 
                type="number" 
                placeholder="Price" 
                value = {newPrice}
                onChange = {(e) => setNewPrice(e.target.value)}
                required
                ></input>
                <br/>

                <label>Quantity</label>
                <input 
                type="number" 
                placeholder="Quantity" 
                value = {newQuantity}
                onChange = {(e) => setNewQuantity(e.target.value)}
                required
                ></input>
                <br/>

                <label>Picture of Shoes</label>
                <input 
                type="text" 
                placeholder="Picture Url" 
                value = {newImage}
                onChange = {(e) => setNewImage(e.target.value)}
                required
                ></input>
                <br/>

                {/* <label>Brand</label>
                <select name='brand'>
                        <option value='Nike'>Nike</option>
                        <option value='Adidas'>Adidas</option>
                        <option value='New Balance'>New Balance</option>
                        <option value='Sketchers'>Sketchers</option>
                        <option value='Vans'>Vans</option>
                        <option value='Converse'>Converse</option>
                        <option value='Reebok'>Reebok</option>
                        <option value='Keds'>Keds</option>
                    </select> */}

                <button type = "submit" >Submit</button>
                <hr/>
            </form>
        </div>
    );
}

export default NewProduct;
