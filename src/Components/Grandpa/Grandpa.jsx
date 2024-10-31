import { createContext, useState } from 'react';
import Aunty from './Aunty/Aunty';
import Dad from './Dad/Dad';
import './Grandpa.css'
import Uncle from './Uncle/Uncle';
export const assestContext = createContext('Daimond')


export const totalAmount = createContext(1000)
const Grandpa = () => {
    const [money, setMoney] = useState(1000)
    const asset = 'gold'
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p> Net : {money}</p>
            <totalAmount.Provider value={[money , setMoney]}>
                <assestContext.Provider>
                    <section className='flex'>
                        <Dad asset={asset}></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </assestContext.Provider>
            </totalAmount.Provider>
        </div>

    );
};

export default Grandpa; <h2>Grandpa</h2>