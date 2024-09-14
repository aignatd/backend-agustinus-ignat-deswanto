require('dotenv').config();
require('module-alias/register');

const express = require('express');
const { createRouter } = require('express-file-routing');
const cors = require('cors');
const path = require('path');
const { expressjwt: jwt } = require("express-jwt");
const values = require("@config/jwtcon");

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors({origin : "*"}));

app.use(jwt({
    secret: values.jwtkey,
    algorithms: [values.algorithm]
  }).unless({ path: ["/auth/token"] })
);

createRouter(app, {
  directory: path.join(__dirname, "routes"),
  additionalMethods: ["custom"],
  routerOptions: express.RouterOptions
});

const apiTimeout = 900 * 1000;
app.use(async (err, req, res, next) => {
  if(err) {
    console.log('Error ->', err.status, err.code, err.toString());

    if(err.code === "credentials_required") {
      res.status(403).json({ code: 4001, msg: "Token not found" });
      return;      
    }
    else
    if(err.code === "JsonWebTokenError" || err.code === "credentials_bad_scheme") {
      res.status(400).json({ code: 4002, msg: "Check token failed" });
      return;      
    }
    else
    if(err.code === "invalid_token") {
      if(err.toString() === "UnauthorizedError: jwt expired")
        res.status(401).json({ code: 4003, msg: "Token is expired" });
      else
        res.status(403).json({ code: 4004, msg: "The token is not valid" });

      return;      
    }

    next(err);
  }

  // Set the timeout for all HTTP requests
  req.setTimeout(apiTimeout, () => {
    console.log('Request Timeout');

    let err = new Error('Request Timeout');
    err.status = 408;
    next(err);
  });

  // Set the server response timeout for all HTTP requests
  res.setTimeout(apiTimeout, async () => {
    console.log('Service Unavailable');

    let err = new Error('Service Unavailable');
    err.status = 503;
    next(err);
  });

  next();
});

app.listen(11011, () => {
   console.log("Server started on port 11011");
})