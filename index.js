var express = require('express');
var app = express();
var QALY = require('./calc.js');
app.set('port', (process.env.PORT || 5000));



app.get('/', function(request, response) {
 
 //QALY instance(Name,Location,Date,ans1,ans2,ans3,ans4,ans5)
 //var myQALY = new QALY(request.query.Name,request.query.Location,request.query.Date,request.query.ans1,request.query.ans2,request.query.ans3,request.query.ans4,request.query.ans5);
 
  response.json({
 "messages": [
   {"text": "your QOL is "+ QALY(request.query.Name,request.query.Location,request.query.Date,request.query.ans1,request.query.ans2,request.query.ans3,request.query.ans4,request.query.ans5)},
   {"text": "Thanks!"}
 ]
});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
