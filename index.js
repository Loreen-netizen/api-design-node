// TODO: mount the tigers route with a a new router just for tigers
// exactly like tigers below
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var morgan = require('morgan');
var tigerRouter = require('./tigers');
var lionRouter = require('./lions');

var app = express();


app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// this is called mounting. when ever a req comes in for
// '/tiger' we want to use this router
app.use('/tigers', tigerRouter);
app.use('/lions', lionRouter);

app.use(function(err, req, res, next) {
  if (err) {
    console.log({err})
    res.status(500).send(err);
  }
});


app.listen(3003);
console.log('on port 3002');
