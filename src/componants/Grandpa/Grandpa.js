import React, { createContext } from 'react';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

//3 things 01. declear context
export const RingContext = createContext('Matir ring');

const Grandpa = () => {
    const house = 7;
    // const ring = 'diamons ring';

    return (
        <RingContext.Provider value='Dadir ring'>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <section className='flex'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;