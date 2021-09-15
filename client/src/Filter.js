import React from 'react';
import { useState } from 'react'

function Filter ({filteredShoes, shoes}) {
    const [form, setForm] = useState({
        price: '0',
        brand: 'All',
    })


    const newFilteredShoes =()=>{
        return [...shoes].filter(shoes=>form.brand === shoes.brand && form.price >= shoes['min price'] && form.price <= shoes['max price'])
    }

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setForm({...form, [name]:value})
    }

    function handleFilter(e){
        e.preventDefault()
        filteredShoes(newFilteredShoes())
    }
    return (
        <div className="filter">
            <form onSubmit={(e)=>handleFilter(e)}>
                <label>Brand:
                    <select name='brand' value={form.brand} onChange={handleChange}>
                        <option value='All'>All</option>
                        <option value='Nike'>Nike</option>
                        <option value='Adidas'>Adidas</option>
                        <option value='New Balance'>New Balance</option>
                        <option value='Sketchers'>Sketchers</option>
                        <option value='Vans'>Vans</option>
                        <option value='Converse'>Converse</option>
                        <option value='Reebok'>Reebok</option>
                        <option value='Keds'>Keds</option>
                    </select>
                </label>
                <label>Price:
                    <select name='price' value={form.price} onChange={handleChange}>
                    <option value='0-50'>Under $50</option>
                    <option value='50-100'>$50 - $100</option>
                    <option value='100-150'>$100 - $150</option>
                    <option value='150-200'>$150 - $200</option>
                    <option value='200-1000'>Over $200</option>
                    </select>
                </label>
                <label>Popularity:
                    <select name='popularity' value={form.likes} onChange={handleChange}>
                        <option value='All'>All</option>
                        <option value='5'>5 stars</option>
                        <option value='>4'>4 stars and up</option>
                        <option value='>3'>3 stars and up</option>
                        <option value='>2'>2 stars and up</option>
                        <option value='>1'>1 star and up</option>
                    </select>
                </label>
                <br/>
                <input type='submit'></input>
            </form>      
        </div>
    );
}

export default Filter;
