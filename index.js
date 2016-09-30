var nunjucks = require('nunjucks');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Express = require('express');
var app = new Express();
var router = require('./routes');
// var restaurantsRoute = require('./routes/restaurants');
// var activitiesRoute = require('./routes/activities');


nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());app.use(morgan('dev'));

app.use(morgan('dev'));

app.use(Express.static('./public'));
app.use(Express.static('./bower_components'));

app.use('/', router)
// app.use('/', hotelRoute);
// app.use('/', restaurantsRoute);
// app.use('/', activitiesRoute);


// app.get('/', function(req,res,next) {
//   console.log("Ya server is RUNNIN");
//   res.send('Hello!')
// })

app.listen(8080);
