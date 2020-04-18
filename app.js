const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

// Set static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Midlewares
app.use(express.urlencoded({extended : false}));
app.use(express.json());

/**
 * Routes
 */
// Index Routes
const indexPage = require('./routes/index');
app.use('/', indexPage);

// Trend Routes
const trendingPage = require('./routes/trending');
app.use('/', trendingPage);

// Random Page Route
const randomPage = require('./routes/page');
app.use('/', randomPage);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log('Server up and running');
})

