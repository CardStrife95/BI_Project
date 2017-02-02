  
  //var url_api = "https://opendata.paris.fr/api/records/1.0/search/?dataset=consultations_des_centres_de_sante&rows=10&facet=nom_de_lactivite&facet=specialite&facet=adresse_code_postal&facet=adresse_ville";

  exports.read = function(req,res,next)
  {
      res.render('map');
  }