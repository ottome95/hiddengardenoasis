// JavaScript Document
$(document).ready(function() {
    //alert($('header').height());


$('.window').css("height", $(window).height());
		$(".window, #bigvid").css("width", $(window).width());
		
		var view=$(window).height()-$('header').height()-$('footer').height();
		var videoView=view+$('footer').height()
		$('.gameView').css("height", view);
		
		
//$('iframe, #game, .windowView, #about').css("height", $(window).height()-$('header').height()-$('footer').height());


//$('#garden, #box').css("margin-top","50px");

		

			function getRandomColor() {
    			var letters = '0123456789ABCDEF'.split('');
    			var color = '#';
    			for (var i = 0; i < 6; i++ ) {
        			color += letters[Math.floor(Math.random() * 15)];
    			}
    			return color;
			}//end  randomColor
			
			var clickedTime; 
			var createdTime;
			var reactionTime;
			
			
			
			function makeBox(){
				var time=Math.random();
		    	time=time*5000;
			    var top = Math.random()*400;
				var left = Math.random()*900;
            	setTimeout(function(){
					if(Math.random()>0.5){
					document.getElementById("box").style.marginTop=top+"px";
					document.getElementById("box").style.marginLeft=left+"px";
					document.getElementById("box").style.borderRadius="50px";
					document.getElementById("image").style.borderRadius="100%";
					document.getElementById("box").align="top";
					}else{
						document.getElementById("box").style.borderRadius="0";
						document.getElementById("image").style.borderRadius="0";
					}
					document.getElementById("box").style.backgroundColor=getRandomColor();
					document.getElementById("box").style.display="block";
					
					createdTime=Date.now();
				}, time);//end timeout function
				
			}//end makeBox Function
		
        	
				 document.getElementById("box").onclick=function(){
					
					clickedTime=Date.now();
					reactionTime=(clickedTime-createdTime)/1000;
					//alert(reactionTime);
					document.getElementById("time").innerHTML=reactionTime;
				
					/*if(reactionTime > 1.5){
						 $("<p>Game Over!! Time to visit a NYC Hidden Oasis for a Zen retreat</p>").appendTo("#message");
					   	   end;
					} else{
						$("<p>You are Zen!!</p>").appendTo("#message");
						   
					}*/
					this.style.display="none";
					makeBox();
				}// end onclick function
		
			makeBox();

				
	
	



			
			
	});
        
					
		