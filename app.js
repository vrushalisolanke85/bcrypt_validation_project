var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/routes.users');
let authRouter= require('./routes/auth');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Welcome to ProData");
});
app.use('/auth',authRouter);
app.use('/users', usersRouter);

module.exports = app;
