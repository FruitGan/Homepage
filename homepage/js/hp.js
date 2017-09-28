$(function(){
	$('.nav').css({top:'0rem',opacity:0}).animate({top:'2rem',opacity:1},1000)
	$('.yuan').css({top:'5rem',opacity:0}).animate({top:'3rem',opacity:1},1000);
	$('.zym').css({top:'8rem',opacity:0}).animate({top:'5rem',opacity:1},1000);
	window.onscroll=function(){
		var top=$(document).scrollTop();
//		console.log(top)
		if(top>=350){
			$('.workhead:first').addClass('wh');
			$('.xx').addClass('wh');
			$('.wk').addClass('wh');
			$('.img').addClass('wh');
			$('.list').addClass('wh');
		}else{
			$('.workhead:first').removeClass('wh');
			$('.xx').removeClass('wh');
			$('.wk').removeClass('wh');
			$('.img').removeClass('wh');
			$('.list').removeClass('wh');
		}
		if(top>=1900){
			$('.skill').find('img').addClass('kimg')
		}else{
			$('.skill').find('img').removeClass('kimg')
		}
		if(top>=450){
			$('.xfj').addClass('fj');

		}else{
			$('.xfj').removeClass('fj');
		}
		if(top>=1000){
			$('.workhead').eq(1).addClass('wh');
		}else{
			$('.workhead').eq(1).removeClass('wh');
		}
		if(top>=1700){
			$('.workhead').eq(2).addClass('wh');
		}else{
			$('.workhead').eq(2).removeClass('wh');
		}
		
		if(top>=2200){
			$('.contacthead').addClass('wh');
		}else{
			$('.contacthead').removeClass('wh');
		}
	}
	$('.xfj').click(function(){
//		console.log(1)
		var top=$(document).scrollTop();
		$(document.body).animate({scrollTop:0},1000)
	})
	

})
