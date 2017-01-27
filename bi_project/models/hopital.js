var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Hopital = new Schema({
    id_hop : Schema.Types.ObjectId,
    name : String,
    address_nom_de_centre : String,
    address_rue : String,
    address_ville: String,
    address_code_postal :String,
    jour : String,
    specialite : String,
    activite : String,
    description:String,
    opening : String,
    closing : String,
    long : Number,
    lat : Number,
    phone_number :String
});

module.exports = mongoose.model("Hopital",Hopital);

//mongoose.connect("mongodb://127.0.0.1/bi_hospital_project");