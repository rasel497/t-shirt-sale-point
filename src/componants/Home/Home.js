import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    // handler for Buy this And add previous + new
    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('already added to cart');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('successfully added');
        }
    }

    // Remove from cart in handle
    const handleRemoveItem = tshirt => {
        // console.log(tshirt);
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;