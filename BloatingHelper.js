//BloatingHelper

function diag(score)
{
	if(score<15){
		
		return "Don't worry , occasional bloating is quite common.\n Sometimes it's caused or made worse by \n certain food and drink  ";
	 }
	 else if(score == 15 || score <24)
	 {
		return "Hmm.. you may have irritable bowel syndrome. I advice you to see a doctor. I can help fix an appointment";
	 }
	 else if(score >= 25 )
	 {
		return "Hmm.. you have signs of irritable bowel syndrome. I advice you to see a doctor. I can help fix an appointment";
	 }
	 
};


module.exports =function(v1,v2,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16){
	
	var score = parseInt(v1)+parseInt(v2)+parseInt(v4)+parseInt(v5)+parseInt(v6)+parseInt(v7)+parseInt(v8)+parseInt(v9)+parseInt(v10)+parseInt(v11)+parseInt(v12)+parseInt(v13)+parseInt(v14)+parseInt(v15)+parseInt(v16);
		
	return diag(score)+"\n \n For free guidence and discounted services please visit our Gut-Buddy Store!";
	};