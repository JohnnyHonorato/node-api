'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./conncection');

const app = express();
const router = express.Router();

connectDB();

const Product = require('./models/product');

const index_route = require('./routes/index-route');
const product_route = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', index_route);
app.use('/products', product_route);

module.exports = app;