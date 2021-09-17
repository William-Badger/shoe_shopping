import React from 'react';
import Seller from './Seller';
import Filter from './Filter';
import ShoeList from './ShoeList'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';



const MainContainer = ({setUser}) => {

    let history = useHistory()

    const [shoes, setShoes] = useState([])

    useEffect(() => {
        fetch('/products')
        .then(res => res.json())
        .then(data => sortItOut(data))
        },[])
        
    function sortItOut(data) {
        let stuff = data.sort((a, b) => b.likes - a.likes)
        setShoes(stuff);
    }
    
    function handleClick() {
        fetch('/logout', {
            method: 'DELETE' })
        .then(r => {
            if (r.ok) {
              setUser(null);
            }
          });
        }

    function sellShoe() {
        if (true) {
        history.push('/new-shoe')
        } else {
            console.log("You are not a seller")
        }
    }

    return (
        <div>
            <button onClick={() => {
                fetch('/users')
                .then(r => r.json())
                .then(console.log)
            }} >Test Button</button>
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
