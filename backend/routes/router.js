const express = require('express');
const route = express.Router();
const controller = require('../controllers/userController');


// App Routers----------------
route.get('/', (req,res) => {
  res.send("hello word");
})

// API Routers----------------
route.post('/api/user', controller.create);
route.get('/api/users', controller.find);
route.put('/api/user/:id', controller.update);
route.delete('/api/user/:id', controller.delete);



module.exports = route