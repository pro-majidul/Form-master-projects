/**
 * Use Individual state 
 */


import { useState } from 'react';

const StateFullForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error , setError] = useState('')

    const getName = e => {
        setName(e.target.value);
    }
    const getEmail = e => {
        setEmail(e.target.value);

    }
    const getPassword = e => {
        setPassword(e.target.value);
    }

    const handelSubmit = e => {
        e.preventDefault()
        if(password.length < 5){
            setError('You must prived 6 Digit of Password')
        }else{
            setError('')
            console.log(name);
            console.log(email);
            console.log(password);
        }

    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input onChange={getName} type="text" name='name' />
                <br />
                <input required onChange={getEmail} type="email" name='email' />
                <br />
                <input onChange={getPassword} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p>{error} </p>
            }
        </div>
    );
};

export default StateFullForm;