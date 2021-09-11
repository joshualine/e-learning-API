const express = require('express');
const routers = require('./backend/routes/router');

const app = new express();



// load routers
app.use('/', routers);

app.listen(3000, () => {
  console.log('server running on port 3000');
})