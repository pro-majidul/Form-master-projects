// normal form use 

const SimpleForm = () => {
   
    const handelSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);

    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input  type="text" name='name' />
                <br />
                <input  type="email" name='email' />
                <br />
                <input   type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;