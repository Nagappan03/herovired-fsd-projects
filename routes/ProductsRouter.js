const express = require('express');
const ProductsRouter = express.Router();

const Validator = require('../utils/Validator');
const GetProducts = require('../controllers/GetProducts');

ProductsRouter.get('/getProducts', Validator, GetProducts);

module.exports = ProductsRouter;