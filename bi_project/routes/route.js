var express = require('express');
var hopital = require("./hopital.js");
var router = express.Router();


router.get("/hopital",hopital.list);
//router.get("/hopital/:id",hopital.readHopital);
router.post('/hopital/update',hopital.update);
router.post("/hopital",hopital.save);

module.exports = router;