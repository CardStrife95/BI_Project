var express = require('express');
var hopital = require("./hopital.js");
var dataview = require('./dataview.js');
var router = express.Router();


router.get("/hopital",hopital.list);
//router.get("/hopital/:id",hopital.readHopital);
router.post('/hopital/update',hopital.update);
router.post("/hopital",hopital.save);

router.get('/dataview',hopital.data_view_list);

module.exports = router;