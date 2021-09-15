import React from 'react';
import ShoeBox from './ShoeBox';

const ShoeList = ({shoes}) => {
    console.log(shoes)
    return (
        <div id="shoelist"> 
        {shoes.map(shoe => (
           <ShoeBox 
                key = {shoe.id}
                shoe = {shoe}
                />
        ))}
        </div>
    );
}

export default ShoeList;
