//heartburnHelper

//
function diag(score)
{
	if(score<3){
		
		return "Don't worry , occasional heartburn is quite common.\n Sometimes it's caused or made worse by \n certain food and drink ";
	 }
	 else if(score == 3 || score <8)
	 {
		return "Hmm.. you have a 50% chance of having Gastro-esophageal disease. I advice you to see a doctor. I can help fix an appointment";
	 }
	 else if(score == 8 || score <11)
	 {
		return "Hmm.. you have a 79% chance of having Gastro-esophageal disease. I advice you to see a doctor. I can help fix an appointment";
	 }
	 else if(score >= 11 )
	 {
		return "Hmm.. you have a 89% chance of having Gastro-esophageal disease. I advice you to see a doctor. I can help fix an appointment";
	 }
	 
};


module.exports =function(v1,v2,v3,v4,v5,v6){
	
	var score = parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4)+parseInt(v5)+parseInt(v6);
		
	return diag(score +"\n for free guidence and discounted services please visit our Gut-Buddy Store!");
	};
