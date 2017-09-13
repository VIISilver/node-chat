var express = require('express');
var bodyParser = require('body-parser');
var messageController = require(__dirname + '/server/controllers/messages_controller');

var app = express();
var baseURL = '/api/messages';

app.use( bodyParser.json() );
app.use( express.static(__dirname + '/public/build' ));

var port = 3000;
app.listen( port, () => { console.log('Server listening on port ' + port); } );

app.get(baseURL, messageController.read);
app.post(baseURL, messageController.create);
app.put(baseURL + '/:id', messageController.update);
app.delete(baseURL + '/:id', messageController.delete);
