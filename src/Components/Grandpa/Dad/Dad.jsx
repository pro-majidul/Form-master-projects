import Brother from "./Brother/Brother";
import Myself from "./Myselt/Myself";
import Sister from "./Sister/Sister";


const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
           <div className="flex">
           <Myself></Myself>
           <Brother></Brother>
           <Sister></Sister>
           </div>
        </div>
    );
};

export default Dad;