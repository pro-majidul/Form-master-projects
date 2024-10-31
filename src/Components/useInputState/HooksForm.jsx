import useInputState from "./useInputState";

const HooksForm = () => {
    
    // const [name , handelNameChange] = useInputState('Rojoi kanto')
    // const [email , handelEmailChange] = useInputState('rojoni23@gmail.com')
    const handelEmail = useInputState('rojoni&sojoni@gamil.com')
    const handelSubmit = e =>{
        e.preventDefault();
        // console.log(name );
        console.log(handelEmail.value);
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                {/* <input value={name} onChange={handelNameChange} type="text" name='name' /> */}
                <br />
                <input {...handelEmail} type="email" name='email' />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HooksForm;