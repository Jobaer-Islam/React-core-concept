const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');

    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    cart.push(id);

    // save new cart to the local storage
    saveCartToLocalStorage(cart);
}

const removeFromLocalStorage = id =>{
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartToLocalStorage(remainingCart);
}

export {
    getCartFromLocalStorage,
    addItemToCartLocalStorage,
    removeFromLocalStorage
}