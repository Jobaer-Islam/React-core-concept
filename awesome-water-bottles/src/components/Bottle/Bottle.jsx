import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {img, name, price, stock } = bottle;
    // console.log(bottle);
    
    return (
        <div className='card bottle'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <button>${price}</button>
            <p>In Stock : {stock}</p>
            <button onClick={()=> handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;