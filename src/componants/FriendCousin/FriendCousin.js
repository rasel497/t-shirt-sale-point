import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';


const FriendCousin = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>FriendCousin</h2>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default FriendCousin;