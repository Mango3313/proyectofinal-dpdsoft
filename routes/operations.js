var express = require("express");
var router = express.Router();
var operationsController = require("../controllers/operations.controller");
var middleware = require("../middleware");

//router.use(middleware);

router.get("/sum", operationsController.sum);
router.get("/substract", operationsController.substract);
router.get("/divide", operationsController.divide);
router.get("/multiply", operationsController.multiply);

module.exports = router;
