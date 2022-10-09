import React from 'react';
import SpecialWfe from '../SpecialWfe/SpecialWfe';

const Myself = ({ house }) => {
    return (
        <div>
            <h2>Myself</h2>
            <p><small>House: {house}</small></p>

            <section>
                <SpecialWfe></SpecialWfe>
            </section>
        </div>
    );
};

export default Myself;