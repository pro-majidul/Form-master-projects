import { useContext } from "react";
import { assestContext } from "../../../Grandpa";



const Special = ({ asset }) => {
    const gift = useContext(assestContext)
    return (
        <div>
            <h3>Special</h3>
            {
                asset && <p> has {asset}</p>
                    
            }
            <p> also has {gift}</p>

        </div >
    );
};

export default Special;