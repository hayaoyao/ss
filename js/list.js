$(function() {
	$('#more').click(function(){
		$('.details2').show();
	})
	$('.still').click(function() {
		if($('.line-none').height() == "") {
			$('.line-none').css({
				"height": "auto",
				"overflow": "visible"
			})
		} else {
			$('.line-none').css({
				"height": "0",
				"overflow": "hidden"
			})
		}
	})
	$('.still2').click(function() {
		if($('.line-none2').height() == "") {
			$('.line-none2').css({
				"height": "auto",
				"overflow": "visible"
			})
		} else {
			$('.line-none2').css({
				"height": "0",
				"overflow": "hidden"
			})
		}
	})
	$('.video-img').click(function() {
		var _self = $(this);
		var video = $(this).attr("data-video");
		$("#videoSrc").attr("src", video);
		$('.video-box').show();
	});
	$('.video-pic').click(function() {
		$("#videoSrc").attr("src", "");
		$('.video-box').hide();
	})
	$('.library li').click(function() {
		$(this).addClass('acitve').siblings().removeClass('acitve');
	})

	function a(b, c) {
		$('.' + b).click(function() {
			$('html,body').animate({
				scrollTop: $('#' + c).offset().top - 100
			}, {
				duration: 500,
				easing: 'swing'
			});
			return false
		})
	}
	a('storage', 'storage');
	a('skill', 'skill');
	a('standard', 'standard');
	a('material', 'material');
	a('earth', 'earth');
})