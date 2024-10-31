import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue)

    // const handelChange = val =>{
    //     setValue(val.target.value)
    // }
    // return [value , handelChange]
    
    const onChange = val =>{
        setValue(val.target.value)
    }
    return{
        value ,
        onChange,
    }
}

export default useInputState ;