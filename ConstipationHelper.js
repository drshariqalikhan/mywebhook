//ConstipationHelper

function diag(score)
{
	if(score<5){
		
		return "Don't worry , occasional constipation is quite common.";
	 }
	 else if(score == 5 || score <15)
	 {
		return "constipation is quite common. I can help provide some easy solutions or if you want to see a doctor if I can help fix an appointment";
	 }
	 else if(score >= 15 )
	 {
		return "Hmm.. you have signs of Significant constipation. I advice you to see a doctor. I can help fix an appointment";
	 }
	 
};


module.exports =function(v1,v2,v3,v4,v5,v6,v7,v8){
	
	var score = parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4)+parseInt(v5)+parseInt(v6)+parseInt(v7)+parseInt(v8);
		
	return diag(score)+"\n \n For free guidence and discounted services please visit our Gut-Buddy Store!";
	};