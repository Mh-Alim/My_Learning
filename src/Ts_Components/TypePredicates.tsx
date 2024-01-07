import React from 'react'

const TypePredicates = () => {

    type Fish = { swim: () => void }
    type Bird = { fly: () => void }

    const b = {
        fly: () => {
            console.log("bird is flying");
        }
    }


    function isFish(x: Fish | Bird): x is Fish {
        return (x as Fish).swim !== undefined
    }

    function food(pet: Fish | Bird) {
        if (isFish(pet)) {
            // pet
            console.log("food for fish");
        }
        else {
            // pet 
            console.log("food for bird");
        }
    }

    food(b)


    console.log(isFish(b));


  return (
    <div>TypePredicates</div>
  )
}

export default TypePredicates