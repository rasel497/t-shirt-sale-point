import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt.id}
                        tshirt={tshirt}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Home;