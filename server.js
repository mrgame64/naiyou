var ipAddress = process.env.OPENSHIFT_NODEJS_IP || 'localhost',
	port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
	
var dbHost = process.env.OPENSHIFT_MONGODB_DB_HOST || 'localhost',
	dbPort = process.env.OPENSHIFT_MONGODB_DB_PORT || 3200,
	dbName = 'node';
	
GLOBAL.production = false;
	
//Handlebars
GLOBAL.hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
	
//ExpressJS
GLOBAL.express = require('express');
GLOBAL.app = express();

app.use(require('body-parser')());
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'ニャー、猫です！(=^・・^=)', cookie: { maxAge: 3600000 }}));
require("./routes/router.js");
app.set('view engine', 'html');
app.engine('html', hbs.__express);

//MongoDB
GLOBAL.mongoose = require('mongoose');
GLOBAL.Schema = mongoose.Schema;
GLOBAL.ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://'+dbHost+':'+dbPort+'/'+dbName, function (err, res){
  if (err)
	console.log ('Error connecting to MongoDB: ' + err);
  else
	console.log ('Connected to MongoDB database '+dbName+' at '+dbHost+':'+dbPort);
});

//Moment
GLOBAL.moment = require('moment');

//Start server
setTimeout(function() {
	GLOBAL.server = app.listen(port, ipAddress);
	console.log('Webserver started on at %s:%s', ipAddress, port);
}, 1000);
