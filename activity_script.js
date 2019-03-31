$(function () { 
	$('#act_view_1').click(function(e) {
		$('main').fadeOut(function () { 
			$('#back-curtain')
			.css({
				'width' : $(window).width(),    // ウィンドウ幅
				'height': $(window).height()    // 同 高さ
			})
			.show(function () { 
				$('#act_1').fadeIn();
			 });
		 });
		 $('.mdl-layout--small-screen-only').hide();
	});
	$('#act_view_2').click(function(e) {
		$('main').fadeOut(function () { 
			$('#back-curtain')
			.css({
				'width' : $(window).width(),    // ウィンドウ幅
				'height': $(window).height()    // 同 高さ
			})
			.show(function () { 
				$('#act_2').fadeIn();
			 });
		 });
		 $('.mdl-layout--small-screen-only').hide();
	});
	$('#act_view_3').click(function(e) {
		$('main').fadeOut(function () { 
			$('#back-curtain')
			.css({
				'width' : $(window).width(),    // ウィンドウ幅
				'height': $(window).height()    // 同 高さ
			})
			.show(function () { 
				$('#act_3').fadeIn();
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