const express = require('express');
const route = express.Router();


// App Routers----------------
route.get('/', (req,res) => {
  res.send("hello word");
})

// API Routers----------------



module.exports = route