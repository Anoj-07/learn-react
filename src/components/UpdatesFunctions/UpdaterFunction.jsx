// ! Updater Function = 
// A function passed as an argument to setState() usually ex. setYear(arrow function) allow for safe update based on the previous state Used with multiple state updates and asynchronous functions, Good practice to use updater functions


import React, {useState} from 'react';

function UpdaterFunction() {

    const [count, setCount] = useState(0); 
    
    const increment = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <>
        <section className='counter-section'>
            <div className='count-container'>
                <p>Count: {count}</p>
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

export default UpdaterFunction