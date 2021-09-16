import React from 'react';
import Seller from './Seller';
import Filter from './Filter';
import ShoeList from './ShoeList'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';



const MainContainer = () => {

    let history = useHistory()

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
    
    function handleClick() {
        fetch('https://localhost:3000/sessions', {
            method: 'DELETE' })
        .then(res => res.json())
        .then(res => console.log(res))
    }

    function sellShoe() {
        if ("user.is_seller" === "user.is_seller") {
        history.push('/new-shoe')
        } else {
            console.log("You are not a seller")
        }
    }

    return (
        <div>
            <h1>Welcome to Foot Rocker</h1>
            <div>
                <Filter shoes={shoes}/>
                <button onClick = {handleClick}>Logout</button>
                <button onClick = {sellShoe}>Sell Shoe</button>
                <ShoeList shoes = {shoes}/>
                <Seller />
            </div>
        </div>
    );
}

export default MainContainer;
