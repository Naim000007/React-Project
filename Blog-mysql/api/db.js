import mysql from "mysql";

// Create a MySQL connection pool
const db = mysql.createPool({
    connectionLimit: 10, // Adjust according to your server capacity
    host: "localhost",
    user: "root",
    password: "NAim1????",
    database: "blog"
});

// Handle MySQL connection errors
db.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        throw err; // You might choose to handle this differently based on your application's requirements
    }
    console.log("Connected to MySQL database!");
    connection.release(); // Release the connection
});

export default db;
 