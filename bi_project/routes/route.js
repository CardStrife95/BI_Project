var express = require('express');
var hopital = require("./hopital.js");
var router = express.Router();


router.get("/hopital",hopital.list);
router.post("/hopital",hopital.save);

module.exports = router;