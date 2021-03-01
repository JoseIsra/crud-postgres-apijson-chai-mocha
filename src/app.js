const express = require('express');
const middleware = require('./middlewares/handlesError');
const app = express();
require('dotenv').config();


app.use(express.json());


app.use('/api',require('./routes/api'));

app.use(middleware.NotFoundError);
app.use(middleware.errorHandler);




module.exports = app;