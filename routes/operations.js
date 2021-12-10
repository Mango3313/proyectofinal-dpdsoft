var express = require("express");
var router = express.Router();
var operationsController = require("../controllers/operations.controller");
var middleware = require("../middleware");

//router.get("/:id", tasksController.getById);

router.use(middleware);

router.post("/sum", operationsController.sum);
router.get("/substract", operationsController.substract);
router.get("/divide", operationsController.divide);
router.get("/multiply", operationsController.multiply);

module.exports = router;
