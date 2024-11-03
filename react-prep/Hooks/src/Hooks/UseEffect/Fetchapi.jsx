import React, { useEffect, useState } from 'react';

const Fetchapi = () => {
    const [todos, setTodos] = useState([]);

    // Fetch data from API using useEffect hook
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []);

    return (
        <div>
            <h2>Fetching Data from API</h2>
            <div className="todo-container">
                {
                    todos.map(item => (
                        <div key={item.id} className="todo-item">
                            <h3>{item.title}</h3>
                            <p>{item.completed ? 'Completed' : 'Not Completed'}</p>
                        </div>
                    ))
                }
            </div>
            <style jsx>{`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }

                h2 {
                    text-align: center;
                    color: #333;
                }

                .todo-container {
                    display: flex;              /* Use flexbox layout */
                    flex-wrap: wrap;           /* Allow wrapping to next line */
                    justify-content: center;    /* Center items */
                    margin: -10px;             /* Adjust for child margins */
                }

                .todo-item {
                    background-color: #ffffff;
                    border: 1px solid #dddddd;
                    border-radius: 5px;
                    padding: 15px;
                    margin: 10px;              /* Space between boxes */
                    width: calc(25% - 20px);   /* Width of 4 boxes in one row */
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                h3 {
                    margin: 0;
                    color: #007bff;
                }

                p {
                    color: #666;
                }
            `}</style>
        </div>
    );
}

export default Fetchapi;
