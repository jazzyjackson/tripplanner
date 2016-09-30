var Express = require('express');
var router = Express.Router();

router.get('/', function(req, res){
  res.render('index');
})

router.get('/error', function(req,res){
  res.render('error');
})


module.exports = router;
