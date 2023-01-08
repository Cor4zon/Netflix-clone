const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');

dotenv.config();
const app = express();

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connection okey'); 
    } catch (err) {
        console.log(err);
    }
}

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(8080);
