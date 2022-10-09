import React from 'react';
import FriendCousin from '../FriendCousin/FriendCousin';

const Cousin = ({ house }) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{house}</small></p>

            <section>
                <FriendCousin></FriendCousin>
            </section>
        </div>
    );
};

export default Cousin;