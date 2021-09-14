import React from 'react';
import Seller from './Seller';
import Filter from './Filter';

const MainContainer = () => {
    return (
        <div>
            <h1>Welcome to Foot Rocker</h1>
            <div>
                <Filter />
                <Seller />
            </div>
        </div>
    );
}

export default MainContainer;
