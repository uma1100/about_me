document.addEventListener('DOMContentLoaded', function() {
	var yumalogo = document.querySelector("#yumalogo");
	yumalogo.addEventListener('mouseenter', function(){
		var yumalogo_txt = document.querySelector("#yumalogo_txt");
		yumalogo_txt.setAttribute("visible",'true');
	});
	yumalogo.addEventListener('mouseleave', function(){
		var yumalogo_txt = document.querySelector("#yumalogo_txt");
		yumalogo_txt.setAttribute("visible",'false');
	});
	var rabbit_flower = document.querySelector("#rabbit-flower");
	rabbit_flower.addEventListener('mouseenter', function(){
		var rabbit_flower_txt = document.querySelector("#rabbit-flower-txt");
		rabbit_flower_txt.setAttribute("visible",'true');
	});
	rabbit_flower.addEventListener('mouseleave', function(){
		var rabbit_flower_txt = document.querySelector("#rabbit-flower-txt");
		rabbit_flower_txt.setAttribute("visible",'false');
	});
});