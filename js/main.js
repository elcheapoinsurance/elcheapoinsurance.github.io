$(document).ready(function(){

	$(".logo").mouseenter(function(){
		$(this).addClass("animated jello");
	}).mouseleave(function(){
		$(this).removeClass("animated jello");
	});
		

	$(".lucha").hover(function(){
		$(this).addClass("animated bounce");
	}, function(){
		$(this).removeClass("animated bounce");
	});

});