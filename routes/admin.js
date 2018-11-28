const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();

const products = []; 

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add product', path: '/admin/add-product'})
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push(req.body)
    console.log(products);
    res.redirect('/');
});

module.exports = {
    router,
    products
} ;