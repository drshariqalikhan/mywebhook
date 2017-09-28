const express = require('express');
const app = express();
const HeartburnHelper = require('./heartburnHelper.js');
const BloatingHelper= require('./BloatingHelper.js');
const ConstipationHelper= require('./ConstipationHelper.js');
const BleedingHelper= require('./BleedingHelper.js');
const PainHelper= require('./PainHelper.js');
const DiarrhoeaHelper= require('./DiarrhoeaHelper.js');
const FeverHelper= require('./FeverHelper.js');
const GutHealthHelper= require('./GutHealthHelper.js');
const OthersHelper= require('./OthersHelper.js');

app.set('port', (process.env.PORT || 5000));


//GET Handler Heartburn
//http://localhost:5000/Heartburn?ans1=1&ans2=2
//https://wh1.herokuapp.com/Heartburn?ans1={{hb1}}&ans2={{hb2}}&ans3={{hb3}}&ans4={{hb4}}&ans5={{hb5}}&ans6={{hb6}}
app.get('/Heartburn', function(request, response) {
 
 //generate score based response
 var responseText = HeartburnHelper(request.query.ans1,request.query.ans2,request.query.ans3,request.query.ans4,request.query.ans5,request.query.ans6);

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "TODO: send to Gut store for appropriate service" },
	   
 ]
});
});
//GET Handler Bloating
app.get('/Bloating', function(request, response) {
 //generate score based response
 var responseText = BloatingHelper(parseInt(request.query.ans1),parseInt(request.query.ans2));

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "TODO: send to Gut store for appropriate service" },
	   
 ]
});
});
//GET Handler Constipation
app.get('/Constipation', function(request, response) {
 //generate score based response
 var responseText = ConstipationHelper(parseInt(request.query.ans1),parseInt(request.query.ans2));

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "TODO: send to Gut store for appropriate service" },
	   
 ]
});
});
//GET Handler Bleeding
app.get('/Bleeding', function(request, response) {
 //generate score based response
 var responseText = BleedingHelper(parseInt(request.query.ans1),parseInt(request.query.ans2));

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "TODO: send to Gut store for appropriate service" },
	   
 ]
});
});
//GET Handler Pain
app.get('/Pain', function(request, response) {
 //generate score based response
 var responseText = PainHelper(parseInt(request.query.ans1),parseInt(request.query.ans2));

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "TODO: send to Gut store for appropriate service" },
	   
 ]
});
});
//GET Handler Diarrhoea
app.get('/Diarrhoea', function(request, response) {
 //generate score based response
 var responseText = DiarrhoeaHelper(parseInt(request.query.ans1),parseInt(request.query.ans2));

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "TODO: send to Gut store for appropriate service" },
	   
 ]
});
});
//GET Handler Fever
app.get('/Fever', function(request, response) {
 //generate score based response
 var responseText = FeverHelper(parseInt(request.query.ans1),parseInt(request.query.ans2));

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "TODO: send to Gut store for appropriate service" },
	   
 ]
});
});
//GET Handler GutHealth
app.get('/GutHealth', function(request, response) {
 //generate score based response
 var responseText = GutHealthHelper(parseInt(request.query.ans1),parseInt(request.query.ans2));

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "TODO: send to Gut store for appropriate service" },
	   
 ]
});
});
//GET Handler Others
app.get('/Others', function(request, response) {
 //generate score based response
 var responseText = OthersHelper(parseInt(request.query.ans1),parseInt(request.query.ans2));

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "TODO: send to Gut store for appropriate service" },
	   
 ]
});
});


//start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
