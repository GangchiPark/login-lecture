"use strict";

const express = require("express");
const router = express.Router();
const control = require("./home.control");


router.get("/login",control.login);
router.get("/",control.main);


module.exports = router;