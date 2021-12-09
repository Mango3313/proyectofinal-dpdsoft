var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var StatsD = require('hot-shots');

var indexRouter = require('./routes/index');
var tasksRouter = require('./routes/tasks');
var authRouter = require('./routes/auth');
var paymentRouter = require('./routes/payment');

const Sentry = require("@sentry/node");

// Importing @sentry/tracing patches the global hub for tracing to work.
const Tracing = require("@sentry/tracing");

var app = express();
var dogstatsd = new StatsD();

// view engine setup
app.set('view engine', 'jade');
dogstatsd.increment('page.views')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

Sentry.init({
    dsn: "https://ffa78b2b8fd04ccba35ec46432bd9f2c@o1059747.ingest.sentry.io/6095856",
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
  const transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
  });
app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/tasks', tasksRouter);
app.use('/payment', paymentRouter);
app.listen(3000, () => {
    console.log('Example app listening at 3000')
  });

module.exports = app;
