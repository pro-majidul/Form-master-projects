import { useState } from "react";

const SimpleForm = () => {
    const [name, setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] =useState('')

    const getName = e =>{
        setName( e.target.value);
    }
    const getEmail = e =>{
        setEmail(e.target.value);

    }
    const getPassword = e =>{
        setPassword(e.target.value);
    }

    const handelFrom = e => {
        e.preventDefault()
        console.log(name);
        console.log(email);
        console.log(password);

    }
    return (
        <div>
            <form onSubmit={handelFrom}>
                <input onChange={getName} type="text" name='name' />
                <br />
                <input onChange={getEmail} type="email" name='email' />
                <br />
                <input onChange={getPassword}  type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;