var Express = require('express');
var router = Express.Router();
var superTable = require('../models');
var hotelTable = superTable.Hotel;
var restaurantsTable = superTable.Restaurant;
var activitiesTable = superTable.Activity;

router.get('/', function(req, res){
  Promise.all([hotelTable.findAll({attributes: ['name']}),
   restaurantsTable.findAll({attributes: ['name']}),
   activitiesTable.findAll({attributes: ['name']})])
    .then(function(success){
      var hotelArray = success[0];
      var restaurantArray = success[1];
      var activityArray = success[2];
      res.render('index',{hotels: hotelArray,
                          restaurants: restaurantArray,
                          activities: activityArray});
    });
});

router.get('/error', function(req,res){
  res.render('error');
})


module.exports = router;
