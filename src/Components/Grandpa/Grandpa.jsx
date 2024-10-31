import Aunty from './Aunty/Aunty';
import Dad from './Dad/Dad';
import './Grandpa.css'
import Uncle from './Uncle/Uncle';

const Grandpa = () => {
    return (
        <div className='grandpa'> 
        <div>
            <h2>Grandpa</h2>
            <div className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </div>
        </div>
        </div>
    );
};

export default Grandpa;<h2>Grandpa</h2>