// JavaScript Document

$(function(){
	
	   $(".user_pic li .div").each(function(i){
		if((i+1)%2==0){
			$(this).css({"height":"230px"});	
		}
	   });
	   $(".user_pic li").eq(0).stop(false,true).animate({
		   width:'400px',
		   padding:'0px'
		   
		},500);
		$(".user_pic li").eq(0).find(".div_c").hide();
		$(".user_pic li").hover(function(){
			 $(".user_pic li .div").removeClass("activexz"); 
		     $(".user_pic li").eq(0).find(".div_c").css({"left":"0px"});
			
			var gs=$(this).css("width");
			if(gs=="270px"){
			
			$(".user_pic li").stop(false,true).animate({
		       width:'270px'
		   
		    },500);
			 $(".user_pic li .div_c").show();
			    
				$(this).stop(false,true).animate({
		         width:'400px'
		   
		       },500);
			 $(this).find(".div_c").hide();
			 $(this).find(".div").hover(function(){
				 $(".user_pic li .div").removeClass("activexz"); 
				 $(this).addClass("activexz");
			 });
			}
			
},function(){});
	   		
			
 })

