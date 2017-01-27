var mongoose = require('mongoose');
//var Hopital = require('../models/hopital');
var Hopital = mongoose.model('Hopital');
var request = require('request');

var url_api = "https://opendata.paris.fr/api/records/1.0/search/?dataset=consultations_des_centres_de_sante&rows=10&facet=nom_de_lactivite&facet=specialite&facet=adresse_code_postal&facet=adresse_ville";


exports.list = function(req,res,next)
{
   var totalHopital = 0;
    request(url_api, function(err, resp, data){
        if(err) throw err;
        var obj = JSON.parse(data);
        var records = obj.records;


        var list = [];
        if(records != null){
           
            for(var i = 0;i<records.length;i++)
            {
                var hopital= records[i].fields;
                
                list.push(hopital);
            }
            totalHopital = list.length;
            console.log(list);
            res.render('hopital',{hopital : list,total : totalHopital});
                 
        }
        else{
            res.send("Nothing");
        }
      
    });
};

exports.read = function(req,res,next)
{
    Hopital.find()
        .exec(function(err,hopitaux){
            if (err) next(err);
            res.render('hopital',{hopitaux:hopitaux});
        });
}


exports.update = function(req,res,next)
{
    console.log("Update...");
    request(url_api, function(err, resp, data){
        if(err) throw err;
        console.log("Reading The JSON data ...");
        var obj = JSON.parse(data);
        var records = obj.records;


        if(records != null){
           
            for(var i = 0;i<records.length;i++)
            {
                var hopital= records[i].fields;
                console.log("Création du schéma ...");
                new Hopital({
    name : hopital.nom_du_centre_de_sante,
    address_nom_de_centre : hopital.adresse_nom_du_centre,
    address_rue : hopital.address_rue,
    address_ville: hopital.address_ville,
    address_code_postal :hopital.address_code_postal,
    jour : hopital.jour,
    specialite : hopital.specialite,
    activite : hopital.activite,
    description:hopital.description,
    opening : hopital.opening,
    closing : hopital.closing,
    long : hopital.longtitude,
    lat : hopital.latitude,
    phone_number : hopital.numero_de_telephone
                }).save(function(err,hopital,count){
                   if(err) {
                       console.log("Erreur sur le save");
                       next(err)};
                   console.log("Enregistrement effectué");
                   res.redirect('/hopital');         
                });
                                
            }            
                 
        }
        else{
            console.log("Erreur sur l'update");
            res.send("Nothing");
        }
      
    });
}

exports.save = function(req,res,next)
{
    //Les variables du body
    
    var hop_name = req.body.name_hopital;
    var adr_nom_de_centre = req.body.adr_nom_de_centre;
    var adr_rue = req.body.adr_rue;
    var adr_ville = req.body.adr_ville;
    var adr_code_postal = req.body.code_postal;
    var hop_jour = req.body.hop_jour;
    var specialite = req.body.specialite;
    var activite = req.body.activite;
    var description = req.body.description;
    var opening = req.body.opening;
    var closing = req.body.closing;
    var phone = req.body.number;

    //Création d'un Schéma puis sauvegarder dans la BDD
    new Hopital({
        name : hop_name,
        address_nom_de_centre : adr_nom_de_centre,
        address_rue : adr_rue,
        address_ville: adr_ville,
        address_code_postal : adr_code_postal,
        jour : hop_jour,
        specialite : specialite,
        activite : activite,
        description: description,
        opening : opening,
        closing : closing,
        phone_number : phone    
    }).save(function(err){
        if(err) next(err);
        res.send(200);
        res.redirect('/hopital');
    });
    
    
};

/*
exports.readHopital = function(req,res){
    var id = req.params.id;
    Hopital.findById(id,function(err,hopital){
        if(err) throw err;
        res.render('hopital',{hopital:hopital});
    });
}
*/



