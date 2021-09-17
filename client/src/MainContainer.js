import React from 'react';
import Seller from './Seller';
import Filter from './Filter';
import ShoeList from './ShoeList'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NewProduct from './NewProduct';



const MainContainer = ({setUser, user}) => {

    // const[buyShoes, setBuyShoes] = useState([])

    let history = useHistory()

    const [shoes, setShoes] = useState([])

    // function handleBuyShoes(purchasedShoe) {
    //     const boughtShoes = shoes.map((shoe) => {
    //         if(shoe.id === purchasedShoe.id) {
    //             return purchasedShoe;
    //         }
    //         else {
    //             return shoe;
    //         }
    //     })
    //     setShoes(boughtShoes)
    // }

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
              history.push('/')
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

    function changeEmail() {
        history.push('/portfolio')
    }

    return (
        <div>
            <h1>Welcome to Foot Rocker {user.name}</h1>
            <div>
                <Filter shoes={shoes}/>
                <button onClick = {handleClick}>Logout</button>
                <button onClick = {sellShoe}>Sell Shoe</button>
                <button onClick = {changeEmail}>Change Account Info</button>
                <ShoeList shoes = {shoes}/>
                <Seller />
            </div>
        </div>
    );
}

export default MainContainer;
