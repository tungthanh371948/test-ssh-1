require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web')
// import express from 'express' ; //es modules

const app = express()
const port = process.env.PORT || 8888; //port => hardcore . uat . prod
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//Khai báo route
app.use ('/', webRouters);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})