const express = require("express");
const app = express();
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

// Path definitions
const root = path.dirname(require.main.filename);
const browserPath = path.join(root, './browser');
const npmPath = path.join(root, './node_modules');
const publicPath = path.join(root, './public');

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
