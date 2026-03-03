import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import userRoutes from './Router/user.router.js';

dotenv.config();
const app = express();
app.use(express.json());

connectDB();


// Middleware to ensure Content-Type: application/json header is set
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})