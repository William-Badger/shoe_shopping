import React from 'react';
import { NavLink } from "react-router-dom"

const Seller = () => {
    return (
        <div>
            <p className = 'links'><NavLink to="/seller">Become a Seller</NavLink></p>
        </div>
    );
}

export default Seller;
