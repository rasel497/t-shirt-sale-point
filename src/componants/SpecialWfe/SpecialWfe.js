import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const SpecialWfe = () => {
    const ring = useContext(RingContext)

    return (
        <div>
            <h2>SpecialWfe</h2>
            <p>Gift: {ring}</p>

        </div>
    );
};

export default SpecialWfe;