import React from 'react'

const Throttling = () => {
    
    const getData = () => {
        console.log("Data is Fetching...")
    }
    const throttling = () => {
        let flag = true;
        let time;
        return function () {
            if (flag) {
                getData();
                flag = false
                setTimeout(() => {
                    flag = true;
                }, 4000);
            } 
        }
    }
    const betterFunction = throttling();
    window.addEventListener('resize', () => betterFunction());
  return (
      <div>
          
    </div>
  )
}

export default Throttling