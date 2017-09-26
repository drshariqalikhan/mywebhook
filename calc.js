
 //QALY class
 
 function getVal(qno,answer)
 {
	 switch (qno){
		 case 1:
		 //code
		 switch (answer){
			 case 'no problem to me':
			 //code
			 return 1;
			 break;
			 case 'Some problem':
			 //code
			 return 2;
			 break;
			 case 'I cannot walk':
			 //code
			 return 3;
			 break;
		 }
		 break;
		 case 2:
		 //code
		 switch (answer){
			 case 'no problem to me':
			 //code
			 return 1;
			 break;
			 case 'Some problem':
			 //code
			 return 2;
			 break;
			 case 'I cannot':
			 //code
			 return 3;
			 break;
		 }
		 
		 break;
		 case 3:
		 //code
		 switch (answer){
			 case 'no problem to me':
			 //code
			 return 1;
			 break;
			 case 'Some problem':
			 //code
			 return 2;
			 break;
			 case 'I cannot':
			 //code
			 return 3;
			 break;
		 }
		 break;
		 case 4:
		 //code
		 switch (answer){
			 case 'no problem to me':
			 //code
			 return 1;
			 break;
			 case 'Some problem':
			 //code
			 return 2;
			 break;
			 case 'severe':
			 //code
			 return 3;
			 break;
		 }
		 break;
		 case 5:
		 //code
		 switch (answer){
			 case 'no problem to me':
			 //code
			 return 1;
			 break;
			 case 'Some problem':
			 //code
			 return 2;
			 break;
			 case 'severe for me':
			 //code
			 return 3;
			 break;
		 }
		 break;
		 
	 }
 }
 
 function getNthree(ans1,ans2,ans3,ans4,ans5,country)
 {
	 var con = (""+country).toUpperCase();
	 if (ans1==3 || ans2==3 ||ans3==3 ||ans4==3 ||ans5==3)
	 {
	 switch(con){
		 case 'SINGAPORE':
		 //code 
		 return 0.2905;
		 break;
		 case 'UNITED KINGDOM':
		 //code
		 return 0.269;
		 break;
		 case 'THAILAND':
		 //code
		 return 0.139;
		 break;
		 default:
		 //code
		 return 0;
		 break;
		 
		 
	 }
	 }
 }
 
 function getScore(ans_num,ans_val, country)
 {
	 var con = (""+country).toUpperCase();
	 if(ans_val == 1)
	 {
		 return 0;
		
	 }
	 else if(ans_val == 2){
	 switch(con){
		 case 'SINGAPORE':
		 //code 
		 switch(ans_num){
			 case 1:
			 //return
			 break;
			 case 2:
			 //return
			 break;
			 case 3:
			 //return
			 break;
			 case 4:
			 //return
			 break;
			 case 5:
			 //return
			 break;
		 }
		 break;
		 case 'UNITED KINGDOM':
		 //code
		 switch(ans_num){
			 case 1:
			 //return
			 break;
			 case 2:
			 //return
			 break;
			 case 3:
			 //return
			 break;
			 case 4:
			 //return
			 break;
			 case 5:
			 //return
			 break;
		 }
		 break;
		 case 'THAILAND':
		 //code
		 switch(ans_num){
			 case 1:
			 //return
			 break;
			 case 2:
			 //return
			 break;
			 case 3:
			 //return
			 break;
			 case 4:
			 //return
			 break;
			 case 5:
			 //return
			 break;
		 }
		 break;
		 default:
		 //code
		 switch(ans_num){
			 case 1:
			 //return
			 break;
			 case 2:
			 //return
			 break;
			 case 3:
			 //return
			 break;
			 case 4:
			 //return
			 break;
			 case 5:
			 //return
			 break;
		 }
		 break;
	 }
	 }
	 else if(ans_val == 3){
	 switch(con){
		 case 'SINGAPORE':
		 //code 
		 
		 break;
		 case 'UNITED KINGDOM':
		 //code
		 
		 break;
		 case 'THAILAND':
		 //code
		 
		 break;
		 default:
		 //code
		 
		 break;
	 }
	 }
	 
 }
 
 function getConstant(country)
 {
	 var con = (""+country).toUpperCase();
	 switch(con){
		 case 'SINGAPORE':
		 return 0;
		 break;
		 case 'UNITED KINGDOM':
		 return 0.081;
		 break;
		 case 'THAILAND':
		 return 0.202;
		 break;
		 default:
		 return 0.895;
		 break;
		 
	 }
 }
 module.exports = function(Name,Location,Date,ans1,ans2,ans3,ans4,ans5)
 {
	 var name = Name;
	 var loc = Location;
	 var date = Date;
	 
	  var a1 = getScore(1,getVal(1,ans1));
	 var a2 = getScore(2,getVal(2,ans2));
	 var a3 = getScore(3,getVal(3,ans3));
	 var a4 = getScore(4,getVal(4,ans4));
	 var a5 = getScore(5,getVal(5,ans5));
	 var n3 = getNthree(getVal(1,ans1),getVal(2,ans2),getVal(3,ans3),getVal(4,ans4),getVal(5,ans5));
	 this.qalyscore= getConstant(""+Location)-(n3+a1+a2+a3+a4+a5);
	 
	 //this.qalyscore= getConstant(""+Location)-(n3+a1+a2+a3+a4+a5);
	 
	 
 } 