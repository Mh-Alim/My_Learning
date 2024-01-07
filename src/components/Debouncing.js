import React from 'react'


let counter = 0;

const Debouncing = () => {
    
    const getData = () => {
        console.log("Fetching data...",counter++);
    }
    const debounce = (fun,delay = 1000) => {
        let timer = 10;
        

        return function () {
            console.log("before ",timer)
            clearTimeout(timer);
            timer = setTimeout(() => {
                fun();
            }, delay);
            console.log("After ",timer)

        }
        
    }
    const perform = debounce(getData)
    
    return (
    <>
            <div>Debouncing</div>
            <input onKeyUp={() => perform()} type="text" />
    </>
  )
}

 export default Debouncing