import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from 'cors';
import path from 'path';

const app = express();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // Include credentials such as cookies in the request
}));

app.use(express.json());
app.use(cookieParser());

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "public", "upload")); // Adjust destination path as needed
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage });

// Route for file upload
app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    res.status(200).json(file.filename);
});

// Route handlers
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Start the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
