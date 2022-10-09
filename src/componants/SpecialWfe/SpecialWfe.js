import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const SpecialWfe = () => {
    const [house, setHouse] = useContext(RingContext)

    return (
        <div>
            <h2>SpecialWfe</h2>
            <p>Gift: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>

        </div>
    );
};

export default SpecialWfe;