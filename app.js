var express = require('express'); 
var app = express();
var path= require('path');
var bodyParser = require('body-parser');
 
app.set('public',__dirname+'/public');
app.set("view engine", "ejs")
app.set('port',  process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var indexRoute = require('./routes/indexRoute.js');
app.use('/', indexRoute);

var server = app.listen(app.get('port'), function() {
    var port =server.address().port;
    console.log('Magic happens on port ' + port);
});
cd