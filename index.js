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
   {"text": "" },
	   
 ]
});
});
//GET Handler Bloating
//https://wh1.herokuapp.com/Bloating?a1=&a2=&a3=&a4=&a5=&a6=&a7=&a8=&a9=&a10=&a11=&a12=&a13=&a14=&a15=&Coelic=&Crohn=&antibio=&wtloss=&BldStl=&sympwake=&AGE=
//http://localhost:5000/Bloating?b1=1&b2=1&b4=1&b5=1&b6=1&b7=1&b8=1&b9=1&b10=1&b11=1&b12=1&b13=1&b14=1&b15=1&b16=1
app.get('/Bloating', function(request, response) {
 //generate score based response
 var responseText = BloatingHelper(request.query.b1,request.query.b2,request.query.b4,request.query.b5,request.query.b6,request.query.b7,request.query.b8,request.query.b9,request.query.b10,request.query.b11,request.query.b12,request.query.b13,request.query.b14,request.query.b15,request.query.b16);

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "" },
	   
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

//GET handler Bloating serious
app.get('/Bloating/seedoc', function(request, response) {
 
 //generate score based response
 var responseText = "test";

 //display response
  response.json({
 "messages": [
   {"text": responseText },
   {"text": "" },
	   
 ]
});
});

//start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
