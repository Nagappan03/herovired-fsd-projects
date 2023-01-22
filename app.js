require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const mongodb = require('mongoose');
const { default: mongoose } = require("mongoose");

const port = process.env.port || 5008;

mongoose.set('strictQuery', true);
mongodb.connect(process.env.MONGO_URL).then(() => console.log("Connected to database successfully"));

const AuthRouter = require('./routes/AuthRouter');
const ProductsRouter = require('./routes/ProductsRouter');

app.use('/auth', AuthRouter);
app.use('/products', ProductsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});