// ! React hook : 
// Special function that allows functional components to use React features without writing class components (useState, useEffect, useContext, useReducer, useCallback, and more)

// ! useState():
// A react hook that allows the creation of a statefull variable AND a setter function to update its values in the virtual Dom. [name, setName] 

import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const [isReset, setIsReset] = useState(false);
    const [resetCount, setResetCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
        // setIsReset(!isReset)
        setIsReset(true)
        setResetCount(resetCount + 1)
    }



    return (
        <>
        <section className='counter-section'>
            <div className='count-container'>
                <p>Count: {count}</p>
                <p>IsReset: {isReset ? "yes" : "no"}</p>
                <p>Reset Count: {resetCount}</p>
            </div>

            <div className='button-container'>
                <button className='count-button' onClick={decrement}>-</button>
                <button className='count-button' onClick={reset}>Reset</button>
                <button className='count-button' onClick={increment}>+</button>
            </div>
        </section>
            

        </>
    );
}

export default Counter




// const [name, setName] = useState('Guest');
//     const [age, setAge] = useState(0);

//     const updateName = () => {
//         setName('Anoj')
//     };

//     return(
//         <div>
//             <p>Name: {name}</p>
//             <button onClick={updateName}>set Name</button>
//         </div>
//     )