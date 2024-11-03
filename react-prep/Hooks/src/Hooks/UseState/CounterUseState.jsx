import { useState } from "react";
const CounterUseState = () => {
    const [count, setCount] = useState(0);
    function CountChange() {
        setCount(count + 1);
    }
    function CountChangebyfour() {
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
    }

    return (
        <div>
            <h2>Counter with useState Hook</h2>
            <p>Click the button to increment the counter</p>
            <button onClick={CountChange}>Increment</button>
            <button onClick={CountChangebyfour}>Increment By Four</button>
            <p>Count: {count}</p>
        </div>
    )
}

export default CounterUseState