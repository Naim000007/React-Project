import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "NAim1????",
    database: "test",
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
    // You can use req.body to get the data from the client-side
    const values = [
        req.body.title || "title from backend",
        req.body.desc || "desc from backend",
        req.body.cover || "cover from backend"
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Book has been created successfully.", data });
    });
});
app.delete("/books", (req, res) => {
    const bookId = 1; // Hardcoded book ID for the first book
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Book not found." });
        }

        return res.status(200).json({ message: "First book deleted successfully." });
    });
});
app.put("/books/:id", (req, res) => {
    const bookId = 2; // Hardcoded book ID
    const { title, desc, cover } = req.body;

    if (!title && !desc && !cover) {
        return res.status(400).json({ error: "At least one field (title, desc, cover) must be provided for updating." });
    }

    const updateFields = [];
    const updateValues = [];

    if (title) {
        updateFields.push("`title` = ?");
        updateValues.push(title);
    }
    if (desc) {
        updateFields.push("`desc` = ?");
        updateValues.push(desc);
    }
    if (cover) {
        updateFields.push("`cover` = ?");
        updateValues.push(cover);
    }

    const q = `UPDATE books SET ${updateFields.join(", ")} WHERE id = ?`;

    db.query(q, [...updateValues, bookId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Book not found." });
        }

        return res.status(200).json({ message: "Book updated successfully." });
    });
});

app.listen(8800, () => {
    console.log("Server started on port 8800");
});
