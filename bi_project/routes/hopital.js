var mongoose = require('mongoose');
//var Hopital = require('../models/hopital');
var Hopital = mongoose.model('Hopital');
var request = require('request');

var url_api = "https://opendata.paris.fr/api/records/1.0/search/?dataset=consultations_des_centres_de_sante&rows=10&facet=nom_de_lactivite&facet=specialite&facet=adresse_code_postal&facet=adresse_ville";


exports.list = function(req,res,next)
{
    request(url_api, function(err, resp, data){
        if(err) throw err;
        var obj = JSON.parse(data);
        var records = obj.records;
        

        if(records != null){
            
            for(var i = 0;i<records.length;i++)
            {
                var data = records[i].fields;
                res.render('hopital');
                
            }
        }
        else{
            res.send("Nothing");
        }
        
        //console.log(data);
    });
};

exports.save = function(req,res,next)
{
    new Hopital({
        name : "Hopital de paris",
        address : "Paris"     
    }).save(function(err){
        if(err) throw err;
        res.redirect('/hopital');
    });
};




