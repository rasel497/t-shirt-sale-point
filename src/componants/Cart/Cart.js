import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveItem }) => {

    // Wow...conditional Rendering only using if else
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <p>Buy more and get special offer!</p>
        </div>
    }
    else if (cart.length === 3) {
        message = <p>Congratulation! Enjoy 25% Off for next all order.</p>
    }
    else {
        message = <p>Thanks for buying!</p>
    }


    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>Order Summary</h3>
            <h4 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order quantity: {cart.length}</h4>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {/* Wow...conditional ta turnary operator diye aro easily kora jy */}
            {cart.length === 5 ? <p>Congratulation! Enjoy 50%</p> : <p></p>}
            {cart.length === 2 && <h2>Double item</h2>}
            {cart.length === 4 || <p>Four items na</p>}
        </div>
    );
};

export default Cart;
/*
Conditional Rendering
1. use element in a variable and if else
2. ternary operation condition ? true : false
3. && operator (if condition is true, i want to display something)
4. || operator (if condition is false, i want to display something)
*/