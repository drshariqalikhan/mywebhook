var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.get('/', function(request, response) {
  //response.render('pages/index');
  response.json({
 "messages": [
   {"text": "Welcome to the Chatfuel Rockets!"},
   {"text": "What are you up to?"}
 ]
});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
