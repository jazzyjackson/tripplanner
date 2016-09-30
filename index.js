var template = require('nunjucks');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Express = require('express');
var app = new Express();

app.use()

template.configure('views', {noCache: true});
app.set('view enginer', 'html');
app.engine('html', nunjucks.render);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());app.use(morgan('dev'));

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', function(req,res,next) {
  console.log("Ya server is RUNNIN");
  res.send('Hello!')
})

app.listen(8080);
