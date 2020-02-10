$(function() {
	$(document).scroll(function() {
		if($(this).scrollTop() > 800) {
			$('.up').show()
		} else {
			$('.up').hide()
		}
	})

	$('.up').click(function() {
		$("html,body").animate({
			scrollTop: '0px'
		}, 500);
	})
})
$(document).ready(function() {
	wordlimit("overflow-ellipsis", 64); //根据自己想显示的字符确定
});

function wordlimit(cname, wordlength) { //参数分别为：类名，要显示的字符串长度
	var cname = document.getElementsByClassName(cname); //需要加省略符号的元素对象
	for(var i = 0; i < cname.length; i++) {
		var nowhtml = cname[i].innerHTML; //元素的内容
		var nowlength = cname[i].innerHTML.length; //元素文本的长度
		if(nowlength > wordlength) {
			cname[i].innerHTML = nowhtml.substr(0, wordlength) + '...'; //截取元素的文本的长度并加上省略号
		}
	}
}