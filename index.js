var express = require('express');
var app = express();
const calc = require('./calc.js');
app.set('port', (process.env.PORT || 5000));
var eq;


app.get('/', function(request, response) {
 
 eq=calc.calculate(request.query.a1,request.query.a2,request.query.a3,request.query.a4,request.query.a5);
 
 //store result in db
 var data=calc.getId(request.query.name,request.query.fbid,request.query.timestamp,request.query.location,request.query.a1,request.query.a2,request.query.a3,request.query.a4,request.query.a5,eq);
 
  response.json({
 "messages": [
   {"text": "your QOL is "+ eq},
   {"text": "Thanks!"}
 ]
});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
