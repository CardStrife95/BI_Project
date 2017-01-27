var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Hopital = new Schema({
    id_hop : Schema.Types.ObjectId,
    name : String,
    address : String
});

module.exports = mongoose.model("Hopital",Hopital);

