const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
require('dotenv/config');

// Set static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Midlewares
app.use(express.urlencoded({extended : false}));
app.use(express.json());


// Database connection 
const options = {
    useNewUrlParser: true ,
    useUnifiedTopology: true
};

mongoose.connect(process.env.DB_CONNECTION_URL, options, (err) => {
    if(err) console.error(err);
    else console.log('Connected to the DB');
})

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
// const randomPage = require('./routes/page');
// app.use('/', randomPage);

// Users Routes
const userPage = require('./routes/users');
app.use('/', userPage);

// Product Page Routes
const prouductPage = require('./routes/product');
app.use('/',prouductPage);


const PORT = 3000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log('Server up and running at: ' + PORT);
})

