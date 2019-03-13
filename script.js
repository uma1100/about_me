// window.onload = function(){  // ローディング画面をフェードアウトさせる
// 	$(function() {
// 		// $("#loading").fadeOut();
// 	});
// }
	 
$(function() {   //ロード中はコンテンツの高さをページの高さに合わせる
	$(".portfolio-logo").click(function (e) { 
		location.href = "https://yuma1100.github.io/about_me/";
	});
});
	
// $(window).on('load', function(){
// 	$('#loader-bg').delay(900).fadeOut(800);
// 	$('#loader').delay(600).fadeOut(300);
// 	$('.mdl-layout__content').delay(900).css('display', 'inline-block');
// });