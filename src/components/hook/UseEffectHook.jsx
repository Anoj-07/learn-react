// ! useEffect() 
// React Hook that tells React DO SOME CODE WHEN (Pick one):
// 1. This component re-render
// 2. This component mounts
// 3. This State of a values

import { useEffect, useState } from "react";

// * useEffect(function, [dependencies])

// 1. useEffect(() => {})             // Runs after every re-render
// 2. useEffect(() => {}, [])        // Runs only on mount
// 3. useEffect(() => {}, [values]) // Runs on mount + when value changes

// * USES
// 1. Event Listeners
// 2. DOM Manipulation
// 3. Subscriptions (real time updates)
// 4. Fetching Data from an API
// 5. Clean Up when a component unMount

function UseEffectHook(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green')

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount(){
     setCount(c => c + 1);   
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor( c => c === "green" ? "red" : "green");
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>subtract</button><br />

            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default UseEffectHook