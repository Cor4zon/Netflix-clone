const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

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
app.use('/api/users', usersRouter);

app.listen(8080);
