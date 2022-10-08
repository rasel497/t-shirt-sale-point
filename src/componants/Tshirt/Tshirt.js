import React from 'react';

const Tshirt = ({ tshirt }) => {
    const { name, id, picture } = tshirt;
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Tshirt;