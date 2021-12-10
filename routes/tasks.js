var express = require("express");
var router = express.Router();
var tasksController = require("../controllers/tasks.controller");
var middleware = require("../middleware");

router.use(middleware);

router.get("/:id", tasksController.getById);
router.post("/", tasksController.create);
router.get("/", tasksController.getAll);

module.exports = router;
