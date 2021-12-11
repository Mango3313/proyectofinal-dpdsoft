var express = require("express");
const { route } = require(".");
var router = express.Router();
var tasksController = require("../controllers/tasks.controller");
var middleware = require("../middleware");

router.get("/:id",tasksController.getById);
router.post("/",middleware,tasksController.create);
router.get("/",middleware,tasksController.getAll);

module.exports = router;
