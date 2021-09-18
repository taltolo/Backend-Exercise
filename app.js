const express=require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

//Using middleware parser
app.use(bodyParser.json());

const orderRoute = require('./routes/orders.js');

// Tell express to use this router 
app.use('/orders',orderRoute);

// In case of failure
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    res.redirect('/fail');
    next(err);
  });

  //connection to DB
mongoose.connect(process.env.DB_CONNECTION
, {useNewUrlParser: true}
,() => console.log('connected to DB!')
);

// Listen to Port 3000
app.listen(3000);