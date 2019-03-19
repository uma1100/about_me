// window.onload = function(){  // ローディング画面をフェードアウトさせる
// 	$(function() {
// 		// $("#loading").fadeOut();
// 	});
// }
	 
$(function() {   //ロード中はコンテンツの高さをページの高さに合わせる
	$(".portfolio-logo").click(function (e) { 
		location.href = "https://yuma1100.github.io/about_me/";
	});
	$('#keyword101').click(function(e) {
		$('main').fadeOut(function () { 
			$('#back-curtain')
			.css({
				'width' : $(window).width(),    // ウィンドウ幅
				'height': $(window).height()    // 同 高さ
			})
			.show(function () { 
				$('#key101').fadeIn();
			 });
		 });
		 $('.mdl-layout--small-screen-only').hide();
	});
	// ④暗幕と拡大画像を非表示
	$('#back-curtain,button').on('click',function() {
		$('.act_article').fadeOut( 
			function() {$('#back-curtain').hide(function () { $('main').fadeIn(); });}
		);
		$('.mdl-layout--small-screen-only').fadeIn();
	});
});
	
// $(window).on('load', function(){
// 	$('#loader-bg').delay(900).fadeOut(800);
// 	$('#loader').delay(600).fadeOut(300);
// 	$('.mdl-layout__content').delay(900).css('display', 'inline-block');
// });