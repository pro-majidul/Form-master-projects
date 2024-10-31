
const Reuseable = ({formTitle ,children, handelSubmit}) => {

   const handelSubmitBtn = e =>{
        e.preventDefault();
        const data ={
            name : e.target.name.value,
            password : e.target.password.value,
            email : e.target.email.value
        }
        handelSubmit(data)
   }
    return (
        <div>
            <h3>{children}</h3>
            <form onSubmit={handelSubmitBtn}>
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Reuseable;