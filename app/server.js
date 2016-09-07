var express = require("express");
var app = express();
var router = express.Router();
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

// Path definitions
let root = path.dirname(require.main.filename);
let browserPath = path.join(root, './browser');
let npmPath = path.join(root, './node_modules');
let publicPath = path.join(root, './public');

//routers
const apiRouter = require('./routes/api');

// logging middleware
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// STATIC ROUTING for front-end
app.use(express.static(browserPath));
app.use(express.static(npmPath));
app.use(express.static(publicPath));

app.use('/api', apiRouter);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
