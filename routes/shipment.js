var express = require("express");
var router = express.Router();
var shipmentController = require("../controllers/shipment.controller");
var middleware = require("../middleware");

//router.get('/:id', tasksController.getById);

router.use(middleware);

router.get("/createshipment", shipmentController.createShipment);
router.get("/changestatus", shipmentController.changeStatus);

module.exports = router;
