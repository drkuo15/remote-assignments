const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'pug');

const mainRoutes = require('./');
const dataRoutes = require('./data');

app.use(mainRoutes);
app.use(dataRoutes);
app.use(express.static(__dirname + '/views'));

// HTML Method 2
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// const sumRoutes = require('./sum');
// app.use(sumRoutes);


app.listen(3000);