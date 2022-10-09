import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

//3 things 01. declear context
export const RingContext = createContext('Matir ring');
export const MoneyContext = createContext(555);
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);
    // const ring = 'diamons ring';

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>Grandpa</h2>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;