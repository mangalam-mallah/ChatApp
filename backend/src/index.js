import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js';

dotenv.config()
const app = express()

const PORT = process.env.PORT;

app.listen(5001, () => {
    console.log("Server is running on port:", PORT);
    connectDB();
})