require('dotenv').config();

const express = require("express");
const cors = require("cors");
const app = express();
const createError = require('http-errors');

const routeCustomer = require('./routes/customer');
const routeMerchant = require('./routes/merchant');
const routeAuth = require('./routes/auth');

app.use(express.urlencoded());
app.use(express.json());
app.use(cors({origin : "*"}));

app.use('/customer', routeCustomer);
app.use('/auth', routeAuth);
app.use('/merchant', routeMerchant);

const apiTimeout = 900 * 1000;
app.use((req, res, next) => {
  // Set the timeout for all HTTP requests
  req.setTimeout(apiTimeout, () => {
    let err = new Error('Request Timeout');
    err.status = 408;
    next(err);
  });

  // Set the server response timeout for all HTTP requests
  res.setTimeout(apiTimeout, () => {
    let err = new Error('Service Unavailable');
    err.status = 503;
    next(err);
  });
  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(11011, () => {
   console.log("Server started on port 11011");
})