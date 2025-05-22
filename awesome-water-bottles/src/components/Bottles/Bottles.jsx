import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addItemToCartLocalStorage, getCartFromLocalStorage, removeFromLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    // useEffect 
    useEffect( ()=>{
         const storedCardIds = getCartFromLocalStorage();
        //  console.log(storedCardIds , bottles);

        const storedCart = [];

        for(const id of storedCardIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);

            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        console.log('stored cart', storedCart);
        setCart(storedCart);
        
         
    }, [bottles])

    const handleAddToCart = (bottle) => {
        // console.log("bottle added", bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);

        // save the bottle id in the Storage
        addItemToCartLocalStorage(bottle.id);
        
    }

    const handleRemoveFromCart = id => {
        console.log('remove item from the cart');
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLocalStorage(id);
        
    }



    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to Cart: {cart.length}</p>
            <Cart cart = {cart} handleRemoveFromCart = {handleRemoveFromCart}> </Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart = {handleAddToCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;