require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web')
// import express from 'express' ; //es modules
const connection = require('./config/database');


const app = express()
const port = process.env.PORT || 8888; //port => hardcore . uat . prod
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//Khai báo route
app.use ('/', webRouters);




connection.query(
  'select * from Users u',
  function(err, results, fields) {
    console.log(">>> result=", results); // results contains rows returned by server
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})