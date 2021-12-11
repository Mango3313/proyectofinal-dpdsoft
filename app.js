var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var StatsD = require("hot-shots");
const PAYMENT_FILE_PATH = "./payment-generated.txt";
const VALID_KEYS_PATH = './valid-keys.txt';
const fs = require("fs");

var indexRouter = require("./routes/index");
var tasksRouter = require("./routes/tasks");
var authRouter = require("./routes/auth");
var paymentRouter = require("./routes/payment");
var shipmentRouter = require("./routes/shipment");

const Sentry = require("@sentry/node");

// Importing @sentry/tracing patches the global hub for tracing to work.
const Tracing = require("@sentry/tracing");

var app = express();
var dogstatsd = new StatsD();

// view engine setup
app.set("view engine", "jade");
dogstatsd.increment("page.views");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

Sentry.init({
  dsn: "https://ffa78b2b8fd04ccba35ec46432bd9f2c@o1059747.ingest.sentry.io/6095856",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
app.use("/auth", authRouter);
app.use("/", indexRouter);
app.use("/tasks", tasksRouter);
app.use("/payment", paymentRouter);
app.use("/shipment",shipmentRouter);
app.listen(process.env.PORT || 3000, function () {
  // server ready to accept connections here
  /*
  if(!fs.existsSync(PAYMENT_FILE_PATH)){
    var fdp = fs.open(PAYMENT_FILE_PATH, 'a', function (err, file) {
      if (err) throw err;
    });
  }
  if(!fs.existsSync(VALID_KEYS_PATH)){
      var fdk = fs.open(VALID_KEYS_PATH, 'a', function (err, file) {
        if (err) throw err;
      });
    }
  */
  console.log("App deployed");
});


module.exports = app;
