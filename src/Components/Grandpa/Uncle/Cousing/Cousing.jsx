import { useContext } from "react";
import Special from "../../Dad/Myselt/Special/Special";
import { totalAmount } from "../../Grandpa";


const Cousing = ({ name }) => {
    const [money, setMoney] = useContext(totalAmount)
    return (
        <div>
            <h3>Cousing </h3>
            <p>{name}</p>
            {name == 'Jobayer' && <Special></Special>}
            {name == 'Jobayer' && <p>{money}</p>}
            {name == 'Jobayer' && <button onClick={()=> setMoney(money + 2000)}>Add More</button>}
        </div>
    );
};

export default Cousing;