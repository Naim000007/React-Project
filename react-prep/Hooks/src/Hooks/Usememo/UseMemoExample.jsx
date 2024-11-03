import React, { useState, useMemo } from 'react';

// A function to calculate factorial with a base case for zero and error handling
const factorial = (n) => {
    if (n < 0) return "Undefined for negative numbers"; // Edge case
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1);
};

const UseMemoExample = () => {
    const [number, setNumber] = useState(5);
    const [theme, setTheme] = useState("light");

    // Memoize the factorial result
    const factorialResult = useMemo(() => factorial(number), [number]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
            <h1>Factorial Calculator</h1>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                min="0"
            />
            <p>Factorial of {number}: {factorialResult}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default UseMemoExample;
