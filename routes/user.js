const path = require("path");
const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.get("/", userController.getIndex);

router.get("/timer", userController.getAddDescription);

// router.get("/timer", userController.getProjects);

router.get("/reports", userController.getAddReport);

// router.get("/projects", userController.getAddProject);

router.get("/projects", userController.getProjects);

router.post("/projects", userController.postAddProject);

module.exports = router;
