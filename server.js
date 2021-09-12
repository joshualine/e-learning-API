const express = require('express');
const dotenv = require('dotenv');
const routers = require('./backend/routes/router');
const connectDB = require('./backend/database/connections');
// const path = require('path');

const app = new express(); //Initialization of express class

// dotenv
dotenv.config({ path:'./config.env' });


const PORT = 3000;

// mongodb connection
connectDB();



// load routers
app.use('/', routers);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});