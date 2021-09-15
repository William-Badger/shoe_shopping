import React from 'react';
import Seller from './Seller';
import Filter from './Filter';
import ShoeList from './ShoeList'
import { useState, useEffect } from 'react';



const MainContainer = () => {

    const [shoes, setShoes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => sortItOut(data))
        },[])
        
    function sortItOut(data) {
        let stuff = data.sort((a, b) => b.likes - a.likes)
        console.log(stuff)
        setShoes(stuff);
    }
    
    

    return (
        <div>
            <h1>Welcome to Foot Rocker</h1>
            <div>
                <Filter shoes={shoes}/>
                <ShoeList shoes = {shoes}/>
                <Seller />
            </div>
        </div>
    );
}

export default MainContainer;
