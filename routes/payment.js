var express = require("express");
var router = express.Router();
var paymentController = require("../controllers/payment.controller");
var middleware = require("../middleware");

router.get("/create", paymentController.create);
router.get("/promos", paymentController.getPromos);
router.post("/applydiscount", paymentController.applyDiscount);

module.exports = router;
