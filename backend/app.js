var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const passport = require('passport')

var app = express();

const users = require('./routes/users.js');
const notes = require('./routes/notes.js');
const notebooks = require('./routes/notebooks.js')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: 'pword is 1234',
    resave: false,
    saveUninitialized: true
  })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));



app.use('/users', users);
app.use('/notes', notes);
app.use('/notebooks', notebooks)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log('APP ERROR', err)
  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
