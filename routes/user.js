const path = require("path");
const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.get("/timer", userController.getAddActivity);

router.get("/", userController.getIndex);

router.get("/reports", userController.getAddReport);

router.get("/projects", userController.getAddProject);

module.exports = router;
