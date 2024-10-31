import { useRef } from "react";

const RefFrom = () => {
    const nameRef = useRef(null)
    const emailRef =useRef(null)
    const passwordRef = useRef(null)

    const handelSubmit = e =>{
        e.preventDefault();
        console.log("object");
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" ref={nameRef} name='name' />
                <br />
                <input ref={emailRef} type="email" name='email' />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefFrom;