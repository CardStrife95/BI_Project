var express = require('express');
var hopital = require("./hopital.js");
var dataview = require('./dataview.js');
var map = require("./map.js");
var contact = require('./contact.js');
var one = require("./one.js");
var nm = require('./nm.js');
var router = express.Router();


router.get("/hopital",hopital.list);
//router.get("/hopital/:id",hopital.readHopital);
router.post('/hopital/update',hopital.update);
router.post("/hopital",hopital.save);

router.get('/dataview',hopital.data_view_list);

router.get("/map",map.read);
router.get('/contact',contact.read);

router.get("/one",one.read);
router.get("/nm",nm.read);

module.exports = router;