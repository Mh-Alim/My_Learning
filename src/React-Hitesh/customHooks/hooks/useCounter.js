
import { useState } from "react";


const useCounter = (val) => {
    const [count, setCount] = useState(val);

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }

    return [count,increment,decrement]
}

export default useCounter