import React, { useEffect, useState } from 'react'


const getItem = (key,initialValue) => {
    const savedItem = localStorage.getItem(key);
    if(savedItem) return savedItem;

    if (initialValue instanceof Function) return initialValue();
    return initialValue
}
const useLocalStorage = (key,initialValue = '') => {
    const [text, setText] = useState(() => {return getItem(key,initialValue)})
    
    useEffect(() => {
        localStorage.setItem(key, text)
    }, [text])
    return [text,setText]
    
}

export default useLocalStorage