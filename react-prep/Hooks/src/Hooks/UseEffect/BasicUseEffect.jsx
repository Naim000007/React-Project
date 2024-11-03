import React from 'react';

const BasicUseEffect = () => {
    const [count, setCount] = React.useState(0);
    const [message, setMessage] = React.useState("");

    const checkCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    React.useEffect(() => {
        if (count === 3) {
            setMessage("You clicked 3 times!");
        } else {
            setMessage("");
        }
    }, [count]);

    return (
        <div>
            <h1>Basic UseEffect Hook</h1>
            <p>{message}</p>
            <button onClick={checkCount}>Click Me</button>
        </div>
    );
}

export default BasicUseEffect;
