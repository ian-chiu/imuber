import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import exampleRoute from "./routes/example.js";

dotenv.config();

// express app
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/example", exampleRoute);

// connect to db
console.warn(process.env.MONGO_URI)
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}...`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
