var Express = require('express');
var app = new Express();

app.get('/', function(req,res,next) {
	console.log("Ya server is RUNNIN");
	res.send('Hello!')
})

app.listen(8080);
