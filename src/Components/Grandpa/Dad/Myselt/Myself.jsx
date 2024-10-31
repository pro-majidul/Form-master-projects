import { useContext } from "react";
import Special from "./Special/Special";
import { totalAmount } from "../../Grandpa";


const Myself = ({asset}) => {
    const [money] = useContext(totalAmount)
    return (
        <div>
            <h3>Myself</h3>
            <Special asset={asset}/>
            <p>{money}</p>
        </div>
    );
};

export default Myself;